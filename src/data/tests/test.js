import { testAgile } from "./testAgile";
import { testEventLoop } from "./testEventLoop";
import { testCORS } from "./testCORS";
import { testRESTAPI } from "./testRESTAPI";
import { testMethodsOfObjectArrayFunction } from "./testMethodsOfObjectArrayFunction";
import { testClasses } from "./testClasses";
import { testRequestParamJSON } from "./testRequestParamJSON";
import { testWorkWithBackend } from "./testWorkWithBackend";
import { testCookies } from "./testCookies";
import { testSearchMethods } from "./testSearchMethods";
import { testEvents } from "./testEvents";
import { testSemanticCriticalRenderingPath } from "./testSemanticCriticalRenderingPath";
import { testDOM } from "./testDOM";
import { testClosure } from "./testClosure";
import { testPromise } from "./testPromise";
import { testVirtualDom } from "./testVirtualDom";
import { testFiber } from "./testFiber";
import { testBOM } from "./testBOM";
import { testDataType } from "./testDataType";
import { testDataStructure } from "./testDataStructure";
import { testDataBase } from "./testDataBase";
import { testOOP } from "./testOOP";
import { testSOLID } from "./testSOLID";
import { testVarLetConst } from "./testVarLetConst";
import { testCallApllyBind } from "./testCallApllyBind";
import { testFunctionVsArrowFunction } from "./testFunctionVsArrowFunction";
import { testStyleIsolation } from "./testStyleIsolation";
import { testFunctionalProgramming } from "./testFunctionalProgramming";
import { testEquality } from "./testEquality";
import { testFunctionExpressionVsFunctionDeclaration } from "./testFunctionExpressionVsFunctionDeclaration";
import { testMapVsForEach } from "./testMapVsForEach";
import { testNullVsUndefined } from "./testNullVsUndefined";
import { testGeneric } from "./testGeneric";
import { testMemo } from "./testMemo";
import { testSemanticVersioning } from "./testSemanticVersioning";
import { testThis } from "./testThis";
import { testLocalStorageLocalSession } from "./testLocalStorageLocalSession";
import { testHooks } from "./testHooks";
import { testScopes } from "./testScopes";
import { testPosition } from "./testPosition";
import { testArrays } from "./testArrays";
import { testStateManager } from "./testStateManager";
import { testUseEffect } from "./testUseEffect";
import { testSemantic } from "./testSemantic";
import { testMethodologyBem } from "./testMethodologyBem";
import { testPrototype } from "./testPrototype";
import { testContext } from "./testContext";
import { testTwoWayDataBinding } from "./testTwoWayDataBinding";
import { testGitFlow } from "./testGitFlow";
import { testUseTSJS } from "./testUseTSJS";
import { testMapSet } from "./testMapSet";
import { testPsevdoelement } from "./testPsevdoelement";
import { testIIFE } from "./testIIFE";
import { testCSS } from "./testCSS";
import { testProps } from "./testProps";
import { testJSX } from "./testJSX";
import { testReact } from "./testReact";
import { testSelectorsCSS } from "./testSelectorsCSS";
import { testTernaryOperator } from "./testTernaryOperator";
import { testDestructurization } from "./testDestructurization";
import { testSetTimeout } from "./testSetTimeout";
import { testInheritance } from "./testInheritance";
import { testAsyncAwait } from "./testAsyncAwait";
import { testLibrary } from "./testLibrary";
import { testHTML } from "./testHTML";
import { testTesting } from "./testTesting";
import { testProcessors } from "./testProcessors";
import { testPureFunction } from "./testPureFunction";
import { testCache } from "./testCache";
import { testTypescript } from "./testTypescript";
import { testRouteRef } from "./testRouteRef";

export const test = [
  testEventLoop,
    // [66%] Расскажи про event loop 
    // [20%] Что такое макро и микро задачи 
    // [16%] Для чего нужен eventloop в js 
    // [10%] В чём разница между макро и микро задачами
    // [3%]	В чём разница в работе eventloop на сервере и в браузере
    // [3%]	Где находятся макро и микро таски в eventloop
    // [3%]	Какие проблемы решает eventloop
    // [3%]	Сколько в один кадр eventloop`а может войти reflow и repaint
    // [3%]	Как работает eventloop в web api
    // [3%]	Как взаимодействуешь с eventloop
  testClosure,
    // [46%] Что такое замыкание 
    // [10%] Для чего замыкание нужно 
    // [6%]	Расскажи про замыкание
    // [3%]	Какой смысл замыканий, если бы не было функций высшего порядка
    // [3%]	В чём разница между видами замыкания
    // [3%]	Чем отличается замыкание от области видимости
  testPromise,
    // [46%] Что такое promise и какие состояния у него есть
    // [6%]	Зачем появились promise	
    // [6%]	Как работает promiseall	и для чего?
    // [3%]	Что такое promise.All
    // [3%]	Что возвращает promiseall при ошибке
    // [3%]	Как работает promise	
    // [3%]	Где используются promise	
    // [3%]	Какими способами можно создать promise	
    // [3%]	Какие статические методы promise знаешь	
    // [3%]	Какие статусы есть у promise
    // [3%]	В чём преимущество синтаксического сахара в виде async await над promise	
    // [3%]	В чем отличие async/await от promise
    // [3%]	Расскажи о том что такое promise race
    // [3%]	Сходство и отличия observable от promise	
    // [3%]	Можно ли перезапустить остановленный promise	
    // [3%]	Какая самая важная отличительная черта promise	
    // [3%]	Что произойдёт если я использую await на то что не является promise		
    // [3%] К какой категории относятся промисы
    // [3%]	Что использовали до promise
  testVirtualDom,
    // [26%] Что такое virtual dom 
    // [6%] Зачем нужен виртуальный дом
    // [3%]	Зачем нужно дерево компонентов/virtual dom	
    // [3%]	Чем отличаются между собой shadow dom и virtual dom и regular dom
    // [3%]	Что быстрее, dom или virtual dom	
    // [3%]	Какой тип данных представляет из себя virtual dom в js	
    // [3%]	Есть ли в react shadow dom или только virtual	
    // [3%]	Для чего необходим virtual dom в react
  testFiber, 
    // [20%] Что такое fiber дерево
  testDOM,
    // [13%] Что такое dom дерево 
    // [6%]	Зачем необходим dom	
    // [3%]	Что происходит при встрече с тегами link, img, script во время формирования dom-дерева	
    // [3%]	Как понять что dom загружен		
    // [3%]	Какие достоинства у инкрементального dom против виртуального	
    // [3%]	Почему нельзя напрямую использовать браузерный dom	
    // [3%]	Для чего в react используется react-router-dom	
    // [3%]	Какая машинерия нужна для слоеной архитектуры или domain-driver design, и для чего	
    // [3%]	Что такое shadow dom
    // [3%]	Расскажи про механизмы в node js, domain и async hooks	
    // [3%]	Чем отличаются между собой shadow dom и virtual dom и regular dom
    // [3%]	Каким способом можно получить dom элемент во vue
    // [3%]	Почему нельзя отдать строку в дом
  testBOM, 
    // [12%] что такое BOM
  testDataType,
    // [26%] Какие типы данных существуют в javascript
    // [6%]	Что знаешь о примитивных типах данных в javascript
    // [3%]	Какие типы данных поддерживаются в typescript
    // [3%]	А чем отличаются типы данных друг от друга
    // [3%]	Чем отличается object от других примитивных данных
    // [3%]	В чем ключевое отличие мутабельных и имутабельных типов данных
    // [3%]	Что такое ссылочный тип данных
    // [3%]	А чем отличаются типы данных друг от друга
  testDataStructure, 
    // [6%]	Какие структуры данных есть в js
    // [3%]	К какой структуре данных в javascript близок observable
    // [3%]	Какие способы хранения данных в браузере знаешь
    // [3%]	Какой тип данных у массива и функции
    // [3%] Что такое двустороннее и однонаправленное связывание данных
    // [3%]	Какой тип данных представляет из себя virtual dom в js
    // [3%]	Что используется для отображения списка данных в jsx
  testDataBase, 
    // [3%]	Что делает отчёт в базе данных
    // [3%] Как бы спроектировал запрос базы данных без orm
    // [3%]	Как работает поток данных между redux и компонентом
    // [3%] Какие могут быть оптимизации для снижения обмена данных между front-end и сервером
    // [3%]	Какие есть доступы или подходы к базам данных из прикладного кода (active record)
  testOOP, 
    // [10] Принципы ооп
    // [6%]	Что такое ооп
    // [3%]	Что выбираешь ооп или функции
    // [3%]	Чем ооп в js отличается от ооп в других языках
  testSOLID,
    // [6%]	Что такое solid
    // [3%]	Какое отношение к solid
  testVarLetConst,
    // [26%] Чем let отличается от var 
    // [23%] Чем var отличает от const 
    // [16%] Какими способами можно объявить переменные, назовите отличия 
    // [13%] В чём разница между let и const 
  testCallApllyBind,
    // [20%] Различие методов call apply bind 
  testFunctionVsArrowFunction,
    // 20%] в чем разница между классической функцией и стрелочной [
  testStyleIsolation,
    // [20%] Какие способы изоляции стилей ты знаешь 
  testFunctionalProgramming,
    // [20%] Концепция функционального программирования
  testEquality,
    // [20%] в чем разница == и === 
  testFunctionExpressionVsFunctionDeclaration,
    // [20%] Что знаешь о различии function expression и function declaration
    // [10%] различие функций
  testMapVsForEach,
    // [16%] В чём разница между foreach и map 
  testNullVsUndefined,
    // [16%] В чём отличие null от undefined 
  testGeneric,
    // [16%] Что такое дженерик 
  testMemo,
    // [16%] Что такое мемоизация
    // [3%]	Зачем использовал usememo
    // [3%]	Расскажи про memo в react
    // [3%]	В чем разница между usecallback и usememo
    // [3%]	Для чего нужно сравнивать ссылки при мемоизации
    // [3%]	Как мемоизировать
  testSemanticVersioning,
    // [16%] Можешь рассказать о семантическом версионировании 
  testThis,
    // [16%] Что такое this 
  testLocalStorageLocalSession,
    // [16%] В чём отличие хранения данных в local storage от куки 
    // [10%] В чём отличие хранения данных в local storage от сессий 
  testHooks,
    // [16%] Какие бывают хуки 
    // [13%] С какими hook приходилось работать 
    // [10%] Что такое хук 
    // [10%] Что такое useCallback и зачем он?
    // [10%] Что такое useMemo и зачем он?
    // [10%] Что такое useRef и зачем он?
    // [10%] Что такое useLayoutEffect и зачем он?
    // [10%]
    // [3%]	Какие основные реакт хуки знаешь и используешь
    // [3%]	В какой последователности будут вызываться хуки при использовании хуков жизненного цикла в миксине и подключении его в компонент
    // [3%]	Зачем нужны хуки react
    // [3%]	Какие хуки добавляют для подключения ротера
  testScopes,
    // [13%] Расскажи про области видимости 
  testPosition,
    // [13%] Какие бывают значения у свойства position 
    // Как можно позиционировать элементы
  testArrays,
    // [13%] Какие методы массивов знаешь 
  testStateManager,
    // [13%] Что такое state manager и с какими приходилось работать 
  testUseEffect,
    // [13%] Как использовать useEffect 
  testSemantic,
    // [13%] Что такое семантика 
  testMethodologyBem,
    // [13%] Что такое методология bem
    // [6%]	В чем преимущество методологии bem
  testPrototype,
    // [13%] Что такое прототипы 
  testRESTAPI,
    // [13%] Что такое rest api 
    // Основные принципы REST
    // Примеры использования REST API
    // Форматы данных
    // HTTP-методы в REST
  testContext,
    // [13%] Что такое контекст в функции 
    // [10%] Как поменять контекст функции 
    // [10%] Что такое контекст в javascript 
    // [10%] Виды контекста
    // [6%] Что такое лексическое окружение
  testTwoWayDataBinding,
    // [13%] Что такое двустороннее связывание 
  testWorkWithBackend,
    // [13%] Как делается http запрос 
    // [10%] что такое http
  testGitFlow,
    // [10%] Что такое git-flow
  testUseTSJS,
    // [10%] Что приоритетнее использовать ts или js
  testMapSet,
    // [10%] Расскажи о map и set
  testPsevdoelement,
    // [10%] Что такое псевдоэлемент
  testIIFE,
    // [10%] Что такое iife
  testCSS,
    // [10%] Что такое css
    // [10%] Что означает слово каскад в css
    // [10%] Разница между margin и padding
    // [10%] Cвойство display - основное значение и как оно работает
    // [10%] Как отцентрировать блок по горизонтали и по вертикали
    // [10%] Что такое inline стили, и какой они имеют приоритет
    // [10%] Что такое наследование в css
    // [10%] Какими способами можно скрыть элемент 
    // [3%]	Что необходимо указать в css для срабатывания данных брэкпоинтов
  testProps,
    // [10%] Что такое props
    // [3%] что такое и для чего проп key
  testJSX,
    // [10%] Что такое jsx
  testReact,
    // [10%] Что такое react
    // [10%] Какие проблемы решает react
    // [4%] оптимизация React
  testSelectorsCSS,
    // [10%] Какие селекторы знаешь
    // [10%] Что такое псевдоклассы
    // [10%] Что ты знаешь про специфичность селекторов
  testTernaryOperator,
    // [10%] Что такое тернарный оператор
  testDestructurization,
    // [10%] Что такое деструктуризация
  testEvents,
    // [10%] E.Preventdefailt() и e.Stopprepaganation(), для чего нужны
  testSetTimeout,
    // [10%] Как работает settimeout
  testInheritance,
    // [10%] Что такое прототипное наследование
  testAsyncAwait, 
    // [10%] Расскажи про async await
  testLibrary, 
    // [10%] Зачем используют vuex
  testCORS, 
    // [10%] Что такое cors
  testHTML, 
    // [10%] Какие основные используемые теги в html знаешь 
  testTesting, 
    // [10%] Расскажи про работу с тестами 
  testProcessors, 
    // [10%] С какими процессорами работал 
  testPureFunction, 
    // [10%] Что такое чистая функция 
    // [10%] что такое PureComponent
    // [4%] чем отличается PureComponent от обычной функции
    // [4%] чем отличается чистая функция от функции
  testMethodsOfObjectArrayFunction, 
    // [10%] Методы объектов
    // Object.entries()
    // [3%]	Какие знаешь способы клонирования объектов
    // [3%]	Назови основные методы перебора массивов и объектов
    // [3%]	В чём разница между object.Getownpropertynames и object.Keys
    // Объясните, как работает метод Object.keys и приведите пример его использования
    // Как с помощью метода reduce можно получить сумму всех чисел в массиве? Напишите пример кода
    // Опишите разницу между методами клонирования объектов в JavaScript и как можно изолировать ссылки при клонировании
    // 
  testCookies, 
    // [6%] Какие главные особенности куки 
    // [6%] В чём разница между сессией и куком 
    // [3%] Как работают cookies 
    // [3%] Как проверить что куки включены 
    // [3%] Что такое httponly cookies 
    // [3%] Что такое secure ("безопасные") cookies 
    // [3%] Объясните разницу между cookies, sessionstorage и localstorage 
    // [3%] ак защитить cookie от js 
    // [3%] Кому видны данные, хранящиеся в local storage, session storage и cookies 
    // [3%] ак поставить cookie в браузере 
    // [3%] Как поставить cookies-файл так, чтобы он удалился через 3 дня 
    // [3%] Какие поля в cookies есть, отвечающие за security
  testCache, 
    // [5%] что такое кэширование
  testAgile, 
  testClasses, 
  testSemanticCriticalRenderingPath, 
  testRequestParamJSON, 
  testSearchMethods,
    // Как получить элемент DOM по его ID с помощью JavaScript?
    // Объясните разницу между методами querySelector и getElementById в JavaScript.
    // Каковы основные различия между статическим и живым NodeList, и как это влияет на работу с методами поиска элементов в DOM?
  testTypescript, 
    // [3%]	Какие типы данных поддерживаются в typescript
  testRouteRef, 
];
