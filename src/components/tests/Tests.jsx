import { List } from "react-window";
import { S } from "./Test.styles";
import { Test } from "./Test";
import { useState, useRef, useEffect } from "react";
import { loadTestById } from "../../data/loadTestById";
import testIndex from "../../data/testIndex.json";

export const Tests = ({ testId }) => {
    // 1) Используем список, который передали через prop testId (testList)
    //    Ожидаем testId = [{ id: 101875, title: "..." }, ...] или аналогичный meta array.
    const metaList = Array.isArray(testId)
        ? testId.map((m) => ({ id: String(m.id), title: m.title || m.title }))
        : Object.keys(testIndex).map((id) => ({ id: String(id), title: testIndex[id].title }));

    const loadedTestsRef = useRef({});
    const loadingRef = useRef({});
    const [currentTestId, setCurrentTestId] = useState(null);
    const [loadedTests, setLoadedTests] = useState({});

    useEffect(() => { loadedTestsRef.current = loadedTests; }, [loadedTests]);

    async function handleTestClick(testMeta, index) {
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
            const loaded = await loadTestById(id); // loadTestById должен поддерживать string/number

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

    // RowComponent использует актуальный state из замыкания
    const RowComponent = ({ index, style, tests }) => {
        const testMeta = tests[index];
        if (!testMeta) return null;
        const id = String(testMeta.id);
        const isCurrent = currentTestId === id;
        const loaded = loadedTests[id];
        const isLoading = !!loadingRef.current[id];

        // console.log('Row render', { id, isCurrent, isLoading, loaded });
        // if (loaded) console.log('loaded.questions.length=', loaded.questions?.length);

        return (
            <div style={style}>
                <S.Details>
                    <S.Summary onClick={() => handleTestClick(testMeta, index)}>
                        {testMeta.title}
                    </S.Summary>

                    {isCurrent && (
                        <>
                            {isLoading && !loaded && <div>Загрузка теста…</div>}
                            {!isLoading && !loaded && <div>Не удалось загрузить тест</div>}
                            {loaded && Array.isArray(loaded.questions) && <Test test={loaded} />}
                        </>
                    )}
                </S.Details>
            </div>
        );
    };

    const validTests = metaList;

    return (
        <S.TestWrapper style={{ height: 1000 }}>
            <List
                rowComponent={RowComponent}
                rowCount={validTests.length}
                rowHeight={60}
                rowProps={{ tests: validTests }}
            >
                {currentTestId && loadedTests[currentTestId] && (
                    <div style={{ marginTop: 12 }}>
                        <Test test={loadedTests[currentTestId]} />
                    </div>
                )}
            </List>
        </S.TestWrapper>
    );
};
