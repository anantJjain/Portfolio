"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.jsx":
/*!************************!*\
  !*** ./pages/_app.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/Footer */ \"./pages/components/layout/Footer.jsx\");\n/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/Header */ \"./pages/components/layout/Header.jsx\");\n/* harmony import */ var _components_layout_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/Navbar */ \"./pages/components/layout/Navbar.jsx\");\n/* harmony import */ var _components_layout_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/layout/Loader */ \"./pages/components/layout/Loader.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst loaderVariants = {\n    initial: {\n        height: 800\n    },\n    animate: (id)=>({\n            height: 0,\n            transition: {\n                delay: 0.3 * id,\n                type: \"tween\",\n                stiffness: 150\n            }\n        })\n};\nconst MyApp = (param)=>{\n    let { Component, pageProps } = param;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [headerBg, setHeaderBg] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>setLoading(false), 8000);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n            children: \"Anant Jain | Portfolio \"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined), !loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                menuState: isOpen,\n                menuMethod: setOpen,\n                className: isOpen ? \"bg-black\" : \"bg-blue-400\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                lineNumber: 35,\n                columnNumber: 11\n            }, undefined),\n            isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    menuState: isOpen,\n                    menuMethod: setOpen,\n                    className: \"border-2 border-red-500\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: isOpen ? \"bg-blue-400\" : \"bg-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-5 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                variants: loaderVariants,\n                                initial: \"initial\",\n                                animate: \"animate\",\n                                className: \"bg-blue-400\",\n                                custom: 5,\n                                children: \"1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                variants: loaderVariants,\n                                initial: \"initial\",\n                                animate: \"animate\",\n                                className: \"bg-blue-400\",\n                                custom: 4,\n                                children: \"2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                variants: loaderVariants,\n                                initial: \"initial\",\n                                animate: \"animate\",\n                                className: \"bg-blue-400\",\n                                custom: 3\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                variants: loaderVariants,\n                                initial: \"initial\",\n                                animate: \"animate\",\n                                className: \"bg-blue-400\",\n                                custom: 2\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                variants: loaderVariants,\n                                initial: \"initial\",\n                                animate: \"animate\",\n                                className: \"bg-blue-400\",\n                                custom: 1\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                lineNumber: 40,\n                columnNumber: 15\n            }, undefined)\n        ]\n    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Loader__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n            lineNumber: 94,\n            columnNumber: 11\n        }, undefined)\n    }, void 0, false);\n};\n_s(MyApp, \"lu4prvCSZKMJfe01r+qW30BtOek=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ2Q7QUFDVTtBQUNSO0FBQ2lCO0FBQ0E7QUFDQTtBQUNBO0FBRS9DLE1BQU1RLGlCQUFnQjtJQUNwQkMsU0FBUTtRQUNKQyxRQUFPO0lBQ1g7SUFDQUMsU0FBUSxDQUFDQyxLQUFRO1lBQ2JGLFFBQU87WUFDUEcsWUFBVztnQkFBRUMsT0FBTSxNQUFJRjtnQkFBR0csTUFBTTtnQkFBUUMsV0FBVTtZQUFJO1FBQzFEO0FBQ0Y7QUFFQSxNQUFNQyxRQUFRO1FBQUMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7O0lBQ3JDLE1BQU0sQ0FBRUMsU0FBUUMsV0FBWSxHQUFHckIsK0NBQVFBLENBQUM7SUFDeEMsTUFBTSxDQUFFc0IsUUFBT0MsUUFBUyxHQUFHdkIsK0NBQVFBLENBQUM7SUFFcEMsTUFBTSxDQUFDd0IsVUFBU0MsWUFBWSxHQUFHekIsK0NBQVFBLENBQUM7SUFDeENDLGdEQUFTQSxDQUFDO1FBQ1J5QixXQUFXLElBQU1MLFdBQVcsUUFBTztJQUNyQztJQUVBLHFCQUNFLDhEQUFDbkIsa0RBQUlBO2tCQUNILDRFQUFDeUI7c0JBQU07Ozs7Ozs7Ozs7bUJBRVQsQ0FBQ1Asd0JBQ0c7OzBCQUNFLDhEQUFDZixpRUFBTUE7Z0JBQUN1QixXQUFXTjtnQkFBUU8sWUFBWU47Z0JBQVNPLFdBQVdSLFNBQU8sYUFBVzs7Ozs7O1lBRTNFQSx1QkFDRTswQkFBRSw0RUFBQ2hCLGlFQUFNQTtvQkFBQ3NCLFdBQVdOO29CQUFRTyxZQUFZTjtvQkFBU08sV0FBVTs7Ozs7OzhDQUU1RCw4REFBQ0M7Z0JBQUlELFdBQVdSLFNBQU8sZ0JBQWM7O2tDQUNuQyw4REFBQ1M7d0JBQUlELFdBQVU7OzBDQUNmLDhEQUFDM0IsaURBQU1BLENBQUM0QixHQUFHO2dDQUNQQyxVQUFVeEI7Z0NBQ1ZDLFNBQVE7Z0NBQ1JFLFNBQVE7Z0NBQ1JtQixXQUFVO2dDQUNWRyxRQUFROzBDQUNYOzs7Ozs7MENBR0QsOERBQUM5QixpREFBTUEsQ0FBQzRCLEdBQUc7Z0NBQ1BDLFVBQVV4QjtnQ0FDVkMsU0FBUTtnQ0FDUkUsU0FBUTtnQ0FDUm1CLFdBQVU7Z0NBQ1ZHLFFBQVE7MENBQ1g7Ozs7OzswQ0FHRCw4REFBQzlCLGlEQUFNQSxDQUFDNEIsR0FBRztnQ0FDUEMsVUFBVXhCO2dDQUNWQyxTQUFRO2dDQUNSRSxTQUFRO2dDQUNSbUIsV0FBVTtnQ0FDVkcsUUFBUTs7Ozs7OzBDQUlaLDhEQUFDOUIsaURBQU1BLENBQUM0QixHQUFHO2dDQUNQQyxVQUFVeEI7Z0NBQ1ZDLFNBQVE7Z0NBQ1JFLFNBQVE7Z0NBQ1JtQixXQUFVO2dDQUNWRyxRQUFROzs7Ozs7MENBSVosOERBQUM5QixpREFBTUEsQ0FBQzRCLEdBQUc7Z0NBQ1BDLFVBQVV4QjtnQ0FDVkMsU0FBUTtnQ0FDUkUsU0FBUTtnQ0FDUm1CLFdBQVU7Z0NBQ1ZHLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FJWiw4REFBQ2Y7d0JBQVcsR0FBR0MsU0FBUzs7Ozs7O2tDQUN4Qiw4REFBQ2YsaUVBQU1BOzs7Ozs7Ozs7Ozs7cUNBS2Y7a0JBQ0UsNEVBQUNHLGlFQUFNQTs7Ozs7O0FBRWQ7R0E1RUdVO0tBQUFBO0FBOEVKLCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanN4PzRjYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlcidcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9OYXZiYXInXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvTG9hZGVyJ1xuXG5jb25zdCBsb2FkZXJWYXJpYW50cyA9e1xuICBpbml0aWFsOntcbiAgICAgIGhlaWdodDo4MDAsXG4gIH0sXG4gIGFuaW1hdGU6KGlkKSA9PiAoe1xuICAgICAgaGVpZ2h0OjAsXG4gICAgICB0cmFuc2l0aW9uOnsgZGVsYXk6MC4zKmlkLHR5cGU6ICd0d2Vlbicsc3RpZmZuZXNzOjE1MCB9XG4gIH0pLFxufVxuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3QgWyBsb2FkaW5nLHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFsgaXNPcGVuLHNldE9wZW4gXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBcbiAgY29uc3QgW2hlYWRlckJnLHNldEhlYWRlckJnXSA9IHVzZVN0YXRlKGZhbHNlKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSksODAwMClcbiAgfSlcbiAgXG4gIHJldHVybihcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5BbmFudCBKYWluIHwgUG9ydGZvbGlvIDwvdGl0bGU+XG4gICAgPC9IZWFkPixcbiAgICAhbG9hZGluZyA/XG4gICAgICAgIDw+XG4gICAgICAgICAgPEhlYWRlciBtZW51U3RhdGU9e2lzT3Blbn0gbWVudU1ldGhvZD17c2V0T3Blbn0gY2xhc3NOYW1lPXtpc09wZW4/J2JnLWJsYWNrJzonYmctYmx1ZS00MDAnfS8+XG4gICAgICAgICAge1xuICAgICAgICAgICAgaXNPcGVuID9cbiAgICAgICAgICAgICAgPD48TmF2YmFyIG1lbnVTdGF0ZT17aXNPcGVufSBtZW51TWV0aG9kPXtzZXRPcGVufSBjbGFzc05hbWU9J2JvcmRlci0yIGJvcmRlci1yZWQtNTAwJy8+PC8+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc09wZW4/J2JnLWJsdWUtNDAwJzonYmctYmxhY2snfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtNSAnPlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17bG9hZGVyVmFyaWFudHN9XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWJsdWUtNDAwJ1xuICAgICAgICAgICAgICAgICAgICBjdXN0b209ezV9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e2xvYWRlclZhcmlhbnRzfVxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ibHVlLTQwMCdcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tPXs0fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtsb2FkZXJWYXJpYW50c31cbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctYmx1ZS00MDAnXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbT17M31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17bG9hZGVyVmFyaWFudHN9XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWJsdWUtNDAwJ1xuICAgICAgICAgICAgICAgICAgICBjdXN0b209ezJ9XG4gICAgICAgICAgICAgICAgPiAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17bG9hZGVyVmFyaWFudHN9XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWJsdWUtNDAwJ1xuICAgICAgICAgICAgICAgICAgICBjdXN0b209ezF9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gIFxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC8+XG4gICAgICAgIDpcbiAgICAgICAgPD5cbiAgICAgICAgICA8TG9hZGVyIC8+XG4gICAgICAgIDwvPlxuICApfVxuXG4gIGV4cG9ydCBkZWZhdWx0IE15QXBwIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSGVhZCIsIm1vdGlvbiIsIkZvb3RlciIsIkhlYWRlciIsIk5hdmJhciIsIkxvYWRlciIsImxvYWRlclZhcmlhbnRzIiwiaW5pdGlhbCIsImhlaWdodCIsImFuaW1hdGUiLCJpZCIsInRyYW5zaXRpb24iLCJkZWxheSIsInR5cGUiLCJzdGlmZm5lc3MiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiaXNPcGVuIiwic2V0T3BlbiIsImhlYWRlckJnIiwic2V0SGVhZGVyQmciLCJzZXRUaW1lb3V0IiwidGl0bGUiLCJtZW51U3RhdGUiLCJtZW51TWV0aG9kIiwiY2xhc3NOYW1lIiwiZGl2IiwidmFyaWFudHMiLCJjdXN0b20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n"));

/***/ })

});