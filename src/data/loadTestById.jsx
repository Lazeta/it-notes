import testIndex from "./testIndex.json";

const moduleCache = {};

export async function loadTestById(id) {
    const meta = testIndex[id];
    if (!meta) {
        console.error("No metadata for test id", id);
        return null;
    }

    const cacheKey = `${meta.path}#${meta.exportName}`;
    if (moduleCache[cacheKey]) return moduleCache[cacheKey];

    try {
        const mod = await import(`${meta.path}.js`);
        // Диагностика — убрать или уменьшить в проде
        // console.debug("Module keys:", Object.keys(mod));
        // console.debug("module[exportName]:", mod[meta.exportName]);
        // console.debug("typeof export:", typeof mod[meta.exportName]);
        // console.debug("export id:", mod[meta.exportName] && mod[meta.exportName].id);


        // 1) Попробуем явно по имени экспорта
        let value = meta.exportName && (mod[meta.exportName] ?? null);

        // 2) Попробуем default
        if (!value && mod.default) {
            value = mod.default;
        }

        // 3) Если всё ещё нет — ищем по полю id среди всех экспортов
        if (!value) {
            for (const k of Object.keys(mod)) {
                const v = mod[k];
                if (v && typeof v === "object" && (v.id === id || String(v.id) === String(id))) {
                    value = v;
                    console.warn(`Found test by id inside export "${k}"`);
                    break;
                }
            }
        }

        if (!value) {
            // полезный отладочный вывод
            console.error("Loaded module but could not find test object for id", id, "meta:", meta);
            // для диагностики покажи примеры экспортов (не выводи слишком много)
            const sample = Object.keys(mod).slice(0, 10);
            console.debug("Export keys in module:", sample);
            return null;
        }

        moduleCache[cacheKey] = value;
        return value;
    } catch (err) {
        console.error("Error loading test:", id, err);
        return null;
    }
}
