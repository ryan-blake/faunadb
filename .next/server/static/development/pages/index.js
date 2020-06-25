module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/TableRow.js":
/*!********************************!*\
  !*** ./components/TableRow.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/ryanzillhuw/Desktop/faunadb-demo/components/TableRow.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n/* harmony default export */ __webpack_exports__[\"default\"] = (({\n  creditCard,\n  firstName,\n  loading,\n  lastName,\n  telephone\n}) => __jsx(\"div\", {\n  className: \"table table-row\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 2,\n    columnNumber: 3\n  }\n}, __jsx(\"p\", {\n  className: loading ? 'loading' : '',\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }\n}, firstName, \" \", lastName), ' ', __jsx(\"p\", {\n  className: `telephone ${loading ? 'loading' : ''}`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }\n}, telephone), __jsx(\"p\", {\n  className: `credit-card credit-card-number ${loading ? 'loading' : ''}`,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }\n}, creditCard && __jsx(\"img\", {\n  width: \"40\",\n  height: \"40\",\n  src: \"https://www.iconninja.com/files/801/537/209/payment-visa-method-card-icon.png\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 22\n  }\n}), creditCard)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhYmxlUm93LmpzPzRkYzgiXSwibmFtZXMiOlsiY3JlZGl0Q2FyZCIsImZpcnN0TmFtZSIsImxvYWRpbmciLCJsYXN0TmFtZSIsInRlbGVwaG9uZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWUsZ0VBQUM7QUFBRUEsWUFBRjtBQUFjQyxXQUFkO0FBQXlCQyxTQUF6QjtBQUFrQ0MsVUFBbEM7QUFBNENDO0FBQTVDLENBQUQsS0FDYjtBQUFLLFdBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBRyxXQUFTLEVBQUVGLE9BQU8sR0FBRyxTQUFILEdBQWUsRUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNHRCxTQURILE9BQ2VFLFFBRGYsQ0FERixFQUdPLEdBSFAsRUFJRTtBQUFHLFdBQVMsRUFBRyxhQUFZRCxPQUFPLEdBQUcsU0FBSCxHQUFlLEVBQUcsRUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUF3REUsU0FBeEQsQ0FKRixFQUtFO0FBQUcsV0FBUyxFQUFHLGtDQUFpQ0YsT0FBTyxHQUFHLFNBQUgsR0FBZSxFQUFHLEVBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDR0YsVUFBVSxJQUFJO0FBQUssT0FBSyxFQUFDLElBQVg7QUFBZ0IsUUFBTSxFQUFDLElBQXZCO0FBQTRCLEtBQUcsRUFBQywrRUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURqQixFQUVHQSxVQUZILENBTEYsQ0FERiIsImZpbGUiOiIuL2NvbXBvbmVudHMvVGFibGVSb3cuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoeyBjcmVkaXRDYXJkLCBmaXJzdE5hbWUsIGxvYWRpbmcsIGxhc3ROYW1lLCB0ZWxlcGhvbmUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXJvd1wiPlxuICAgIDxwIGNsYXNzTmFtZT17bG9hZGluZyA/ICdsb2FkaW5nJyA6ICcnfT5cbiAgICAgIHtmaXJzdE5hbWV9IHtsYXN0TmFtZX1cbiAgICA8L3A+eycgJ31cbiAgICA8cCBjbGFzc05hbWU9e2B0ZWxlcGhvbmUgJHtsb2FkaW5nID8gJ2xvYWRpbmcnIDogJyd9YH0+e3RlbGVwaG9uZX08L3A+XG4gICAgPHAgY2xhc3NOYW1lPXtgY3JlZGl0LWNhcmQgY3JlZGl0LWNhcmQtbnVtYmVyICR7bG9hZGluZyA/ICdsb2FkaW5nJyA6ICcnfWB9PlxuICAgICAge2NyZWRpdENhcmQgJiYgPGltZyB3aWR0aD1cIjQwXCIgaGVpZ2h0PVwiNDBcIiBzcmM9XCJodHRwczovL3d3dy5pY29ubmluamEuY29tL2ZpbGVzLzgwMS81MzcvMjA5L3BheW1lbnQtdmlzYS1tZXRob2QtY2FyZC1pY29uLnBuZ1wiIC8+fVxuICAgICAge2NyZWRpdENhcmR9XG4gICAgPC9wPlxuICA8L2Rpdj5cbilcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TableRow.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_TableRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TableRow */ \"./components/TableRow.js\");\nvar _jsxFileName = \"/Users/ryanzillhuw/Desktop/faunadb-demo/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => {\n  const {\n    0: data,\n    1: setData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    async function getData() {\n      const res = await fetch('/api');\n      const newData = await res.json();\n      setData(newData);\n      console.log(JSON.stringify(newData));\n    }\n\n    getData();\n  }, []);\n  return __jsx(\"main\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, \"Next.js, FaunaDB and NodeJS\")), __jsx(\"h1\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, \"Next.js, FaunaDB and Node.js\"), __jsx(\"hr\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"container-scroll\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, \"Customer Data\"), __jsx(\"div\", {\n    className: \"table\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, __jsx(\"h4\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }, \"name\"), __jsx(\"h4\", {\n    className: \"telephone\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, \"telephone\"), __jsx(\"h4\", {\n    className: \"credit-card\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, \"credit card\")), data.length > 0 ? data.map(d => __jsx(_components_TableRow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    key: d.data.telephone,\n    creditCard: d.data.creditCard.number,\n    firstName: d.data.firstName,\n    lastName: d.data.lastName,\n    telephone: d.data.telephone,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 15\n    }\n  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_TableRow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    loading: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 15\n    }\n  }), __jsx(_components_TableRow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    loading: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 15\n    }\n  }), __jsx(_components_TableRow__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    loading: true,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 15\n    }\n  })))));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImRhdGEiLCJzZXREYXRhIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXREYXRhIiwicmVzIiwiZmV0Y2giLCJuZXdEYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwibGVuZ3RoIiwibWFwIiwiZCIsInRlbGVwaG9uZSIsImNyZWRpdENhcmQiLCJudW1iZXIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUscUVBQU07QUFDbkIsUUFBTTtBQUFBLE9BQUNBLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsbUJBQWVDLE9BQWYsR0FBeUI7QUFDdkIsWUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxNQUFELENBQXZCO0FBQ0EsWUFBTUMsT0FBTyxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUF0QjtBQUNBUCxhQUFPLENBQUNNLE9BQUQsQ0FBUDtBQUNBRSxhQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBSSxDQUFDQyxTQUFMLENBQWVMLE9BQWYsQ0FBWjtBQUNEOztBQUNESCxXQUFPO0FBQ1IsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBSkYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVFO0FBQUssYUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQUksYUFBUyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQUdFO0FBQUksYUFBUyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixDQUZGLEVBT0dKLElBQUksQ0FBQ2EsTUFBTCxHQUFjLENBQWQsR0FDQ2IsSUFBSSxDQUFDYyxHQUFMLENBQVNDLENBQUMsSUFDUixNQUFDLDREQUFEO0FBQ0UsT0FBRyxFQUFFQSxDQUFDLENBQUNmLElBQUYsQ0FBT2dCLFNBRGQ7QUFFRSxjQUFVLEVBQUVELENBQUMsQ0FBQ2YsSUFBRixDQUFPaUIsVUFBUCxDQUFrQkMsTUFGaEM7QUFHRSxhQUFTLEVBQUVILENBQUMsQ0FBQ2YsSUFBRixDQUFPbUIsU0FIcEI7QUFJRSxZQUFRLEVBQUVKLENBQUMsQ0FBQ2YsSUFBRixDQUFPb0IsUUFKbkI7QUFLRSxhQUFTLEVBQUVMLENBQUMsQ0FBQ2YsSUFBRixDQUFPZ0IsU0FMcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREQsR0FXQyxtRUFDRSxNQUFDLDREQUFEO0FBQVUsV0FBTyxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDREQUFEO0FBQVUsV0FBTyxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLDREQUFEO0FBQVUsV0FBTyxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FsQkosQ0FERixDQU5GLENBREY7QUFvQ0QsQ0EvQ0QiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBUYWJsZVJvdyBmcm9tICcuLi9jb21wb25lbnRzL1RhYmxlUm93J1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaScpXG4gICAgICBjb25zdCBuZXdEYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICAgc2V0RGF0YShuZXdEYXRhKVxuICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkobmV3RGF0YSkpXG4gICAgfVxuICAgIGdldERhdGEoKVxuICB9LCBbXSlcbiAgcmV0dXJuIChcbiAgICA8bWFpbj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+TmV4dC5qcywgRmF1bmFEQiBhbmQgTm9kZUpTPC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoMT5OZXh0LmpzLCBGYXVuYURCIGFuZCBOb2RlLmpzPC9oMT5cbiAgICAgIDxociAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItc2Nyb2xsXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgyPkN1c3RvbWVyIERhdGE8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgIDxoND5uYW1lPC9oND5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZWxlcGhvbmVcIj50ZWxlcGhvbmU8L2g0PlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImNyZWRpdC1jYXJkXCI+Y3JlZGl0IGNhcmQ8L2g0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtkYXRhLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgICBkYXRhLm1hcChkID0+IChcbiAgICAgICAgICAgICAgPFRhYmxlUm93XG4gICAgICAgICAgICAgICAga2V5PXtkLmRhdGEudGVsZXBob25lfVxuICAgICAgICAgICAgICAgIGNyZWRpdENhcmQ9e2QuZGF0YS5jcmVkaXRDYXJkLm51bWJlcn1cbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU9e2QuZGF0YS5maXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgbGFzdE5hbWU9e2QuZGF0YS5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICB0ZWxlcGhvbmU9e2QuZGF0YS50ZWxlcGhvbmV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICA8VGFibGVSb3cgbG9hZGluZyAvPlxuICAgICAgICAgICAgICA8VGFibGVSb3cgbG9hZGluZyAvPlxuICAgICAgICAgICAgICA8VGFibGVSb3cgbG9hZGluZyAvPlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ryanzillhuw/Desktop/faunadb-demo/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });