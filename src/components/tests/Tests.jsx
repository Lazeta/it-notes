import { useState, useRef, useEffect } from "react";
import { List, useDynamicRowHeight } from "react-window";
import { S } from "./Test.styles";
import { Test } from "./Test";
import { loadTestById } from "../../data/loadTestById";
import testIndex from "../../data/testIndex.json";

export const Tests = ({ testId }) => {
    const metaList = Array.isArray(testId)
        ? testId.map((m) => ({ id: String(m.id), title: m.title || m.title }))
        : Object.keys(testIndex).map((id) => ({ id: String(id), title: testIndex[id].title }));

    const validTests = metaList;

    const rowHeight = useDynamicRowHeight({ defaultRowHeight: 60 });

    const [currentTestId, setCurrentTestId] = useState(null);
    const [loadedTests, setLoadedTests] = useState({});
    const loadingRef = useRef({});
    const loadedTestsRef = useRef(loadedTests);
    useEffect(() => { loadedTestsRef.current = loadedTests; }, [loadedTests]);

    async function handleTestClick(testMeta) {
        const id = String(testMeta.id);

        if (currentTestId === id) {
            setCurrentTestId(null);
            return;
        }

        if (loadedTestsRef.current[id]) {
            setCurrentTestId(id);
            return;
        }

        if (loadingRef.current[id]) {
            setCurrentTestId(id);
            return;
        }

        loadingRef.current[id] = true;
        setCurrentTestId(id);

        try {
            const loaded = await loadTestById(id);
            if (loaded) {
                setLoadedTests((prev) => {
                    const next = { ...prev, [id]: loaded };
                    loadedTestsRef.current = next;
                    return next;
                });
            } else {
                console.error("Failed to load test", id);
                setCurrentTestId(null);
            }
        } catch (err) {
            console.error("Error loading test", id, err);
            setCurrentTestId(null);
        } finally {
            loadingRef.current[id] = false;
        }
    }

    const RowComponent = ({ index, style, tests }) => {
        const testMeta = tests[index];
        if (!testMeta) return null;
        const id = String(testMeta.id);
        const isCurrent = currentTestId === id;
        const loaded = loadedTests[id];
        const isLoading = !!loadingRef.current[id];

        const innerKey = `${id}-${isCurrent ? 'open' : 'closed'}`;

        return (
            <div style={style} key={innerKey}>
                <S.Details open={isCurrent}>
                    <S.Summary
                        onClick={(e) => {
                            e.preventDefault();
                            handleTestClick(testMeta);
                        }}
                    >
                        {testMeta.title || "Без названия теста"}
                    </S.Summary>

                    {isCurrent && (
                        <>
                            {isLoading && !loaded && <div>Загрузка теста…</div>}
                            {!isLoading && !loaded && <div>Не удалось загрузить тест</div>}
                            {loaded && Array.isArray(loaded.questions) && (
                                <div>
                                    <Test test={loaded} />
                                </div>
                            )}
                        </>
                    )}
                </S.Details>
            </div>
        );
    };

    return (
        <S.TestWrapper style={{ height: 600 }}>
            <List
                rowComponent={RowComponent}
                rowCount={validTests.length}
                rowHeight={rowHeight}
                rowProps={{ tests: validTests }}
            />
        </S.TestWrapper>
    );
};
