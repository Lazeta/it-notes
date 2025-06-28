import { testAgile } from "./Common/Development/testAgile";
import { testEventLoop } from "./Javascript/Browser/testEventLoop";
import { testCORS } from "./Common/GeneralPrinciples/testCORS";
import { testRESTAPI } from "./Common/GeneralPrinciples/testRESTAPI";
import { testClasses } from "./Javascript/Core/testClasses";
import { testRequestParamJSON } from "./Common/GeneralPrinciples/testRequestParamJSON";
import { testWorkWithBackend } from "./Common/GeneralPrinciples/testWorkWithBackend";
import { testCookie } from "./Javascript/Storage/testCookie";
import { testSearchMethods } from "./Javascript/Core/testSearchMethods";
import { testEvents } from "./Javascript/Browser/testEvents";
import { testSemanticCriticalRenderingPath } from "./Javascript/HTML/testSemanticCriticalRenderingPath";
import { testDOM } from "./Javascript/Browser/testDOM";
import { testClosure } from "./Javascript/Core/testClosure";
import { testPromise } from "./Javascript/Core/testPromise";
import { testVirtualDom } from "./React/Reconciliation/testVirtualDom";
import { testFiber } from "./React/Reconciliation/testFiber";
import { testBOM } from "./Javascript/Browser/testBOM";
import { testDataType } from "./Javascript/Core/testDataType";
import { testDataStructure } from "./Common/DataStructures/testDataStructure";
import { testDataBase } from "./Common/DataStructures/testDataBase";
import { testOOP } from "./Common/Patterns/testOOP";
import { testSOLID } from "./Common/Patterns/testSOLID";
import { testVarLetConst } from "./Javascript/Core/testVarLetConst";
import { testStyleIsolation } from "./Javascript/CSS/testStyleIsolation";
import { testFunctionalProgramming } from "./Common/GeneralPrinciples/testFunctionalProgramming";
import { testEquality } from "./Javascript/Core/testEquality";
import { testFunctions } from "./Javascript/Core/testFunctions";
import { testMapVsForEach } from "./Javascript/Core/testMapVsForEach";
import { testNullVsUndefined } from "./Javascript/Core/testNullVsUndefined";
import { testGenerics } from "./TypeScript/Advanced/testGenerics";
import { testMemo } from "./React/Optimization/testMemo";
import { testSemanticVersioning } from "./Javascript/HTML/testSemanticVersioning";
import { testThis } from "./Javascript/Core/testThis";
import { testLocalStorageLocalSession } from "./Javascript/Storage/testLocalStorageLocalSession";
import { testHooks } from "./React/Hooks/testHooks";
import { testScope } from "./Javascript/Core/testScope";
import { testPosition } from "./Javascript/CSS/testPosition";
import { testMethodsArrays } from "./Javascript/Core/testMethodsArrays";
import { testSemantic } from "./Javascript/HTML/testSemantic";
import { testMethodologyBem } from "./Common/Patterns/testMethodologyBem";
import { testPrototype } from "./Javascript/Core/testPrototype";
import { testContext } from "./Javascript/Core/testContext";
import { testTwoWayDataBinding } from "./React/Optimization/testTwoWayDataBinding";
import { testGitFlow } from "./Common/Git/testGitFlow";
import { testUseTSJS } from "./Common/GeneralPrinciples/testUseTSJS";
import { testPsevdoelement } from "./Javascript/CSS/testPsevdoelement";
import { testIIFE } from "./Javascript/Core/testIIFE";
import { testCSS } from "./Javascript/CSS/testCSS";
import { testProps } from "./React/Components/testProps";
import { testJSX } from "./React/JSX/testJSX";
import { testReact } from "./React/testReact";
import { testSelectorsCSS } from "./Javascript/CSS/testSelectorsCSS";
import { testTernaryOperator } from "./Javascript/Core/testTernaryOperator";
import { testDestructurization } from "./Javascript/Core/testDestructurization";
import { testSetTimeout } from "./Javascript/Core/testSetTimeout";
import { testInheritance } from "./Javascript/Core/testInheritance";
import { testAsyncAwait } from "./Javascript/Core/testAsyncAwait";
import { testLibrary } from "./Common/GeneralPrinciples/testLibrary";
import { testHTML } from "./Javascript/HTML/testHTML";
import { testTesting } from "./React/Testing/testTesting";
import { testProcessors } from "./Common/GeneralPrinciples/testProcessors";
import { testPureFunction } from "./Javascript/Core/testPureFunction";
import { testCache } from "./Javascript/Storage/testCache";
import { testTypescript } from "./TypeScript/Core/testTypescript";
import { testRouteRef } from "./React/Routing/testRouteRef";
import { testMethodsObjects } from "./Javascript/Core/testMethodsObjects";
import { testPureComponent } from "./React/Optimization/testPureComponent";
import { testHTTP } from "./Common/GeneralPrinciples/testHTTP";

export const test = [
  testEventLoop,
  testOOP,
  testClosure,
  testPromise,
  testFiber, 
  testDOM,
  testBOM, 
  testThis,
  testVirtualDom,
  testFunctionalProgramming,
  testDataType,
  testDataStructure, 
  testDataBase,
  testSOLID,
  testRESTAPI,
  testCORS,
  testVarLetConst,
  testStyleIsolation,
  testEquality,
  testFunctions,
  testIIFE,
  testMapVsForEach,
  testScope,
  testMethodsArrays,
  testMethodsObjects,
  testNullVsUndefined,
  testMemo,
  testHooks,
  testPureComponent,
  testPrototype,
  testContext,
  testInheritance,
  testRouteRef, 
  testGenerics,
  testSemantic,
  testSemanticVersioning,
  testLocalStorageLocalSession,
  testPosition,
  testMethodologyBem,
  testTwoWayDataBinding,
  testWorkWithBackend,
  testGitFlow,
  testUseTSJS,
  testPsevdoelement,
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
  testJSX,
  testReact,
  testSelectorsCSS,
    // [10%] Какие селекторы знаешь
    // [10%] Что такое псевдоклассы
    // [10%] Что ты знаешь про специфичность селекторов
  testTernaryOperator,
  testDestructurization,
  testEvents,
    // [10%] E.Preventdefailt() и e.Stopprepaganation(), для чего нужны
  testSetTimeout,
  testAsyncAwait,
  testLibrary, 
  testHTML, 
  testTesting, 
  testProcessors, 
  testPureFunction, 
  testCookie,
  testCache,
  testAgile, 
  testClasses, 
  testSemanticCriticalRenderingPath, 
  testRequestParamJSON, 
  testSearchMethods,
  testTypescript,
  testHTTP,
];
