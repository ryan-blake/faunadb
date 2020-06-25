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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/index.js":
/*!****************************!*\
  !*** ./pages/api/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nconst faunadb = __webpack_require__(/*! faunadb */ \"faunadb\"); // your secret hash\n\n\nconst secret = process.env.FAUNADB_SECRET_KEY;\nconst q = faunadb.query;\nconst client = new faunadb.Client({\n  secret\n});\n\nmodule.exports = async (req, res) => {\n  try {\n    const dbs = await client.query(q.Map( // iterate each item in result\n    q.Paginate( // make paginatable\n    q.Match( // query index\n    q.Index('all_customers') // specify source\n    )), ref => q.Get(ref) // lookup each result by its reference\n    )); // ok\n\n    res.status(200).json(dbs.data);\n  } catch (e) {\n    // something went wrong\n    res.status(500).json({\n      error: e.message\n    });\n  }\n};\n\nconst editNote = (noteId, newData) => client.query(q.Update(q.Ref(q.Collection('notes'), noteId), {\n  data: {\n    firstName: newData.split(\" \")[0],\n    lastName: newData.split(\" \")[1]\n  }\n})).then(ret => console.log(ret)).catch(err => console.warn(err));\n\nvar _default = editNote;\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvaW5kZXguanM/YTM4YyJdLCJuYW1lcyI6WyJmYXVuYWRiIiwicmVxdWlyZSIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQURCX1NFQ1JFVF9LRVkiLCJxIiwicXVlcnkiLCJjbGllbnQiLCJDbGllbnQiLCJtb2R1bGUiLCJleHBvcnRzIiwicmVxIiwicmVzIiwiZGJzIiwiTWFwIiwiUGFnaW5hdGUiLCJNYXRjaCIsIkluZGV4IiwicmVmIiwiR2V0Iiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJlIiwiZXJyb3IiLCJtZXNzYWdlIiwiZWRpdE5vdGUiLCJub3RlSWQiLCJuZXdEYXRhIiwiVXBkYXRlIiwiUmVmIiwiQ29sbGVjdGlvbiIsImZpcnN0TmFtZSIsInNwbGl0IiwibGFzdE5hbWUiLCJ0aGVuIiwicmV0IiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwid2FybiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU1BLE9BQU8sR0FBR0MsbUJBQU8sQ0FBQyx3QkFBRCxDQUF2QixDLENBRUE7OztBQUNBLE1BQU1DLE1BQU0sR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGtCQUEzQjtBQUNBLE1BQU1DLENBQUMsR0FBR04sT0FBTyxDQUFDTyxLQUFsQjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFJUixPQUFPLENBQUNTLE1BQVosQ0FBbUI7QUFBRVA7QUFBRixDQUFuQixDQUFmOztBQUVBUSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsT0FBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ25DLE1BQUk7QUFDRixVQUFNQyxHQUFHLEdBQUcsTUFBTU4sTUFBTSxDQUFDRCxLQUFQLENBQ2hCRCxDQUFDLENBQUNTLEdBQUYsRUFDRTtBQUNBVCxLQUFDLENBQUNVLFFBQUYsRUFDRTtBQUNBVixLQUFDLENBQUNXLEtBQUYsRUFDRTtBQUNBWCxLQUFDLENBQUNZLEtBQUYsQ0FBUSxlQUFSLENBRkYsQ0FFMkI7QUFGM0IsS0FGRixDQUZGLEVBU0VDLEdBQUcsSUFBSWIsQ0FBQyxDQUFDYyxHQUFGLENBQU1ELEdBQU4sQ0FUVCxDQVNvQjtBQVRwQixLQURnQixDQUFsQixDQURFLENBY0Y7O0FBQ0FOLE9BQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCUixHQUFHLENBQUNTLElBQXpCO0FBQ0QsR0FoQkQsQ0FnQkUsT0FBT0MsQ0FBUCxFQUFVO0FBQ1Y7QUFDQVgsT0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUcsV0FBSyxFQUFFRCxDQUFDLENBQUNFO0FBQVgsS0FBckI7QUFDRDtBQUNGLENBckJEOztBQXVCQSxNQUFNQyxRQUFRLEdBQUcsQ0FBQ0MsTUFBRCxFQUFTQyxPQUFULEtBQXFCckIsTUFBTSxDQUFDRCxLQUFQLENBQ3BDRCxDQUFDLENBQUN3QixNQUFGLENBQ0V4QixDQUFDLENBQUN5QixHQUFGLENBQU16QixDQUFDLENBQUMwQixVQUFGLENBQWEsT0FBYixDQUFOLEVBQTZCSixNQUE3QixDQURGLEVBRUU7QUFBRUwsTUFBSSxFQUFFO0FBQUVVLGFBQVMsRUFBRUosT0FBTyxDQUFDSyxLQUFSLENBQWMsR0FBZCxFQUFtQixDQUFuQixDQUFiO0FBQW9DQyxZQUFRLEVBQUVOLE9BQU8sQ0FBQ0ssS0FBUixDQUFjLEdBQWQsRUFBbUIsQ0FBbkI7QUFBOUM7QUFBUixDQUZGLENBRG9DLEVBTXJDRSxJQU5xQyxDQU0vQkMsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQU51QixFQU9yQ0csS0FQcUMsQ0FPL0JDLEdBQUcsSUFBSUgsT0FBTyxDQUFDSSxJQUFSLENBQWFELEdBQWIsQ0FQd0IsQ0FBdEM7O2VBU2VkLFEiLCJmaWxlIjoiLi9wYWdlcy9hcGkvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmYXVuYWRiID0gcmVxdWlyZSgnZmF1bmFkYicpXG5cbi8vIHlvdXIgc2VjcmV0IGhhc2hcbmNvbnN0IHNlY3JldCA9IHByb2Nlc3MuZW52LkZBVU5BREJfU0VDUkVUX0tFWVxuY29uc3QgcSA9IGZhdW5hZGIucXVlcnlcbmNvbnN0IGNsaWVudCA9IG5ldyBmYXVuYWRiLkNsaWVudCh7IHNlY3JldCB9KVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGRicyA9IGF3YWl0IGNsaWVudC5xdWVyeShcbiAgICAgIHEuTWFwKFxuICAgICAgICAvLyBpdGVyYXRlIGVhY2ggaXRlbSBpbiByZXN1bHRcbiAgICAgICAgcS5QYWdpbmF0ZShcbiAgICAgICAgICAvLyBtYWtlIHBhZ2luYXRhYmxlXG4gICAgICAgICAgcS5NYXRjaChcbiAgICAgICAgICAgIC8vIHF1ZXJ5IGluZGV4XG4gICAgICAgICAgICBxLkluZGV4KCdhbGxfY3VzdG9tZXJzJykgLy8gc3BlY2lmeSBzb3VyY2VcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIHJlZiA9PiBxLkdldChyZWYpIC8vIGxvb2t1cCBlYWNoIHJlc3VsdCBieSBpdHMgcmVmZXJlbmNlXG4gICAgICApXG4gICAgKVxuICAgIC8vIG9rXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oZGJzLmRhdGEpXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGUubWVzc2FnZSB9KVxuICB9XG59XG5cbmNvbnN0IGVkaXROb3RlID0gKG5vdGVJZCwgbmV3RGF0YSkgPT4gY2xpZW50LnF1ZXJ5KFxuICBxLlVwZGF0ZShcbiAgICBxLlJlZihxLkNvbGxlY3Rpb24oJ25vdGVzJyksIG5vdGVJZCksXG4gICAgeyBkYXRhOiB7IGZpcnN0TmFtZTogbmV3RGF0YS5zcGxpdChcIiBcIilbMF0sIGxhc3ROYW1lOiBuZXdEYXRhLnNwbGl0KFwiIFwiKVsxXSB9IH0sXG4gIClcbilcbi50aGVuKChyZXQpID0+IGNvbnNvbGUubG9nKHJldCkpXG4uY2F0Y2goZXJyID0+IGNvbnNvbGUud2FybihlcnIpKVxuXG5leHBvcnQgZGVmYXVsdCBlZGl0Tm90ZVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/index.js\n");

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./pages/api/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ryanzillhuw/Desktop/faunadb-demo/pages/api/index.js */"./pages/api/index.js");


/***/ }),

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"faunadb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYXVuYWRiXCI/OWIwYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmYXVuYWRiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmF1bmFkYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///faunadb\n");

/***/ })

/******/ });