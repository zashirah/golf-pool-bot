"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/scores",{

/***/ "./pages/scores.js":
/*!*************************!*\
  !*** ./pages/scores.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Scores(param) {\n    var scores = param.scores;\n    var tableHeaders = Object.keys(scores[0]); //pull table header names from first result keys\n    console.log(tableHeaders);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Raw Scores\"\n            }, void 0, false, {\n                fileName: \"C:\\\\haydenCode\\\\golf-pool-bot\\\\frontend\\\\pages\\\\scores.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"Golfer\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\haydenCode\\\\golf-pool-bot\\\\frontend\\\\pages\\\\scores.js\",\n                            lineNumber: 12,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"Round 1\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\haydenCode\\\\golf-pool-bot\\\\frontend\\\\pages\\\\scores.js\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"Round 2\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\haydenCode\\\\golf-pool-bot\\\\frontend\\\\pages\\\\scores.js\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                            children: \"Round 3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\haydenCode\\\\golf-pool-bot\\\\frontend\\\\pages\\\\scores.js\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\haydenCode\\\\golf-pool-bot\\\\frontend\\\\pages\\\\scores.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\haydenCode\\\\golf-pool-bot\\\\frontend\\\\pages\\\\scores.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\haydenCode\\\\golf-pool-bot\\\\frontend\\\\pages\\\\scores.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = Scores;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Scores);\nvar _c;\n$RefreshReg$(_c, \"Scores\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zY29yZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFHQSxTQUFTQSxNQUFNLENBQUMsS0FBVSxFQUFFO1FBQVosTUFBUSxHQUFSLEtBQVUsQ0FBUkMsTUFBTTtJQUN0QixJQUFNQyxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDSCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxnREFBZ0Q7SUFDN0ZJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixZQUFZLENBQUMsQ0FBQztJQUMxQixxQkFDRSw4REFBQ0ssTUFBSTs7MEJBQ0gsOERBQUNDLElBQUU7MEJBQUMsWUFBVTs7Ozs7b0JBQUs7MEJBQ25CLDhEQUFDQyxPQUFLOzBCQUNKLDRFQUFDQyxJQUFFOztzQ0FDRCw4REFBQ0MsSUFBRTtzQ0FBQyxRQUFNOzs7OztnQ0FBSztzQ0FDZiw4REFBQ0EsSUFBRTtzQ0FBQyxTQUFPOzs7OztnQ0FBSztzQ0FDaEIsOERBQUNBLElBQUU7c0NBQUMsU0FBTzs7Ozs7Z0NBQUs7c0NBQ2hCLDhEQUFDQSxJQUFFO3NDQUFDLFNBQU87Ozs7O2dDQUFLOzs7Ozs7d0JBQ2I7Ozs7O29CQUNDOzs7Ozs7WUFDSCxDQUNQO0NBQ0g7QUFoQlFYLEtBQUFBLE1BQU07O0FBb0NmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2NvcmVzLmpzPzc2MDUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3N2ID0gcmVxdWlyZShcImNzdi1wYXJzZXJcIik7XHJcbmNvbnN0IGZzID0gcmVxdWlyZShcImZzXCIpO1xyXG5cclxuZnVuY3Rpb24gU2NvcmVzKHsgc2NvcmVzIH0pIHtcclxuICBjb25zdCB0YWJsZUhlYWRlcnMgPSBPYmplY3Qua2V5cyhzY29yZXNbMF0pOyAvL3B1bGwgdGFibGUgaGVhZGVyIG5hbWVzIGZyb20gZmlyc3QgcmVzdWx0IGtleXNcclxuICBjb25zb2xlLmxvZyh0YWJsZUhlYWRlcnMpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbj5cclxuICAgICAgPGgxPlJhdyBTY29yZXM8L2gxPlxyXG4gICAgICA8dGFibGU+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRoPkdvbGZlcjwvdGg+XHJcbiAgICAgICAgICA8dGg+Um91bmQgMTwvdGg+XHJcbiAgICAgICAgICA8dGg+Um91bmQgMjwvdGg+XHJcbiAgICAgICAgICA8dGg+Um91bmQgMzwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuICBjb25zdCBzY29yZXMgPSBbXTtcclxuICBjb25zdCBzdHJlYW0gPSBmcy5jcmVhdGVSZWFkU3RyZWFtKFwiVmFsc3Bhcl9DaGFtcGlvbnNoaXAuY3N2XCIpO1xyXG5cclxuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBzdHJlYW1cclxuICAgICAgLnBpcGUoY3N2KCkpXHJcbiAgICAgIC5vbihcImRhdGFcIiwgKGRhdGEpID0+IHNjb3Jlcy5wdXNoKGRhdGEpKVxyXG4gICAgICAub24oXCJlbmRcIiwgKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBzY29yZXMgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2NvcmVzO1xyXG4iXSwibmFtZXMiOlsiU2NvcmVzIiwic2NvcmVzIiwidGFibGVIZWFkZXJzIiwiT2JqZWN0Iiwia2V5cyIsImNvbnNvbGUiLCJsb2ciLCJtYWluIiwiaDEiLCJ0YWJsZSIsInRyIiwidGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/scores.js\n");

/***/ })

});