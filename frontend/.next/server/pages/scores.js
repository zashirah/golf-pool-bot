"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/scores";
exports.ids = ["pages/scores"];
exports.modules = {

/***/ "./pages/scores.js":
/*!*************************!*\
  !*** ./pages/scores.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst csv = __webpack_require__(/*! csv-parser */ \"csv-parser\");\nconst fs = __webpack_require__(/*! fs */ \"fs\");\nfunction Scores({ scores  }) {\n    const tableHeaders = Object.keys(scores[0]); //pull table header names from first result keys\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Raw Scores\"\n            }, void 0, false, {\n                fileName: \"C:\\\\haydenCode\\\\golf-pool-bot\\\\frontend\\\\pages\\\\scores.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: tableHeaders.map((header)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: header\n                        }, void 0, false, {\n                            fileName: \"C:\\\\haydenCode\\\\golf-pool-bot\\\\frontend\\\\pages\\\\scores.js\",\n                            lineNumber: 12,\n                            columnNumber: 20\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\haydenCode\\\\golf-pool-bot\\\\frontend\\\\pages\\\\scores.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\haydenCode\\\\golf-pool-bot\\\\frontend\\\\pages\\\\scores.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\haydenCode\\\\golf-pool-bot\\\\frontend\\\\pages\\\\scores.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\nasync function getServerSideProps(context) {\n    const scores = [];\n    const stream = fs.createReadStream(\"Valspar_Championship.csv\");\n    await new Promise((resolve, reject)=>{\n        stream.pipe(csv()).on(\"data\", (data)=>scores.push(data)\n        ).on(\"end\", ()=>{\n            resolve();\n        });\n    });\n    return {\n        props: {\n            scores\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scores);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zY29yZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQUEsTUFBTUEsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLDhCQUFZLENBQUM7QUFDakMsTUFBTUMsRUFBRSxHQUFHRCxtQkFBTyxDQUFDLGNBQUksQ0FBQztBQUV4QixTQUFTRSxNQUFNLENBQUMsRUFBRUMsTUFBTSxHQUFFLEVBQUU7SUFDMUIsTUFBTUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQ0gsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsZ0RBQWdEO0lBQzdGLHFCQUNFLDhEQUFDSSxNQUFJOzswQkFDSCw4REFBQ0MsSUFBRTswQkFBQyxZQUFVOzs7OztvQkFBSzswQkFDbkIsOERBQUNDLE9BQUs7MEJBQ0osNEVBQUNDLElBQUU7OEJBQ0FOLFlBQVksQ0FBQ08sR0FBRyxDQUFDLENBQUNDLE1BQU0sR0FBSzt3QkFDNUIscUJBQU8sOERBQUNDLElBQUU7c0NBQUVELE1BQU07Ozs7O2dDQUFNLENBQUM7cUJBQzFCLENBQUM7Ozs7O3dCQUNDOzs7OztvQkFDQzs7Ozs7O1lBQ0gsQ0FDUDtDQUNIO0FBRU0sZUFBZUUsa0JBQWtCLENBQUNDLE9BQU8sRUFBRTtJQUNoRCxNQUFNWixNQUFNLEdBQUcsRUFBRTtJQUNqQixNQUFNYSxNQUFNLEdBQUdmLEVBQUUsQ0FBQ2dCLGdCQUFnQixDQUFDLDBCQUEwQixDQUFDO0lBRTlELE1BQU0sSUFBSUMsT0FBTyxDQUFDLENBQUNDLE9BQU8sRUFBRUMsTUFBTSxHQUFLO1FBQ3JDSixNQUFNLENBQ0hLLElBQUksQ0FBQ3RCLEdBQUcsRUFBRSxDQUFDLENBQ1h1QixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUNDLElBQUksR0FBS3BCLE1BQU0sQ0FBQ3FCLElBQUksQ0FBQ0QsSUFBSSxDQUFDO1FBQUEsQ0FBQyxDQUN2Q0QsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFNO1lBQ2ZILE9BQU8sRUFBRSxDQUFDO1NBQ1gsQ0FBQyxDQUFDO0tBQ04sQ0FBQyxDQUFDO0lBRUgsT0FBTztRQUNMTSxLQUFLLEVBQUU7WUFBRXRCLE1BQU07U0FBRTtLQUNsQixDQUFDO0NBQ0g7QUFFRCxpRUFBZUQsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29sZi1wb29sLWJvdC8uL3BhZ2VzL3Njb3Jlcy5qcz83NjA1Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNzdiA9IHJlcXVpcmUoXCJjc3YtcGFyc2VyXCIpO1xyXG5jb25zdCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcclxuXHJcbmZ1bmN0aW9uIFNjb3Jlcyh7IHNjb3JlcyB9KSB7XHJcbiAgY29uc3QgdGFibGVIZWFkZXJzID0gT2JqZWN0LmtleXMoc2NvcmVzWzBdKTsgLy9wdWxsIHRhYmxlIGhlYWRlciBuYW1lcyBmcm9tIGZpcnN0IHJlc3VsdCBrZXlzXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluPlxyXG4gICAgICA8aDE+UmF3IFNjb3JlczwvaDE+XHJcbiAgICAgIDx0YWJsZT5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICB7dGFibGVIZWFkZXJzLm1hcCgoaGVhZGVyKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8dGg+e2hlYWRlcn08L3RoPjtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcbiAgY29uc3Qgc2NvcmVzID0gW107XHJcbiAgY29uc3Qgc3RyZWFtID0gZnMuY3JlYXRlUmVhZFN0cmVhbShcIlZhbHNwYXJfQ2hhbXBpb25zaGlwLmNzdlwiKTtcclxuXHJcbiAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgc3RyZWFtXHJcbiAgICAgIC5waXBlKGNzdigpKVxyXG4gICAgICAub24oXCJkYXRhXCIsIChkYXRhKSA9PiBzY29yZXMucHVzaChkYXRhKSlcclxuICAgICAgLm9uKFwiZW5kXCIsICgpID0+IHtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgc2NvcmVzIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjb3JlcztcclxuIl0sIm5hbWVzIjpbImNzdiIsInJlcXVpcmUiLCJmcyIsIlNjb3JlcyIsInNjb3JlcyIsInRhYmxlSGVhZGVycyIsIk9iamVjdCIsImtleXMiLCJtYWluIiwiaDEiLCJ0YWJsZSIsInRyIiwibWFwIiwiaGVhZGVyIiwidGgiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0Iiwic3RyZWFtIiwiY3JlYXRlUmVhZFN0cmVhbSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicGlwZSIsIm9uIiwiZGF0YSIsInB1c2giLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/scores.js\n");

/***/ }),

/***/ "csv-parser":
/*!*****************************!*\
  !*** external "csv-parser" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("csv-parser");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/scores.js"));
module.exports = __webpack_exports__;

})();