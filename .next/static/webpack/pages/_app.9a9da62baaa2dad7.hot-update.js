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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/Footer */ \"./pages/components/layout/Footer.jsx\");\n/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/Header */ \"./pages/components/layout/Header.jsx\");\n/* harmony import */ var _components_layout_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/Navbar */ \"./pages/components/layout/Navbar.jsx\");\n/* harmony import */ var _components_layout_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/layout/Loader */ \"./pages/components/layout/Loader.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst loaderVariants = {\n    initial: {\n        height: 800\n    },\n    animate: (id)=>({\n            height: 0,\n            y: -200,\n            transition: {\n                delay: 0.3 * id,\n                type: \"easeInOut\",\n                stiffness: 50,\n                duration: 0.3\n            }\n        })\n};\nconst MyApp = (param)=>{\n    let { Component, pageProps } = param;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>setLoading(false), 8000);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n            children: \"Anant Jain | Portfolio \"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined), !loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                initial: {\n                    backgroundColor: \"#60a5fa\",\n                    opacity: 0.8\n                },\n                whileInView: {\n                    backgroundColor: \"#000\",\n                    opacity: 1\n                },\n                transition: {\n                    type: \"tween\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined),\n            isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    menuState: isOpen,\n                    menuMethod: setOpen,\n                    className: \"border-2 border-red-500\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: isOpen ? \"bg-blue-400\" : \"bg-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                variants: loaderVariants,\n                                initial: \"initial\",\n                                animate: \"animate\",\n                                className: \"bg-blue-400\",\n                                custom: 5\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                variants: loaderVariants,\n                                initial: \"initial\",\n                                animate: \"animate\",\n                                className: \"bg-blue-400\",\n                                custom: 4\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                variants: loaderVariants,\n                                initial: \"initial\",\n                                animate: \"animate\",\n                                className: \"bg-blue-400\",\n                                custom: 3\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                variants: loaderVariants,\n                                initial: \"initial\",\n                                animate: \"animate\",\n                                className: \"bg-blue-400\",\n                                custom: 2\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                variants: loaderVariants,\n                                initial: \"initial\",\n                                animate: \"animate\",\n                                className: \"bg-blue-400\",\n                                custom: 1\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                lineNumber: 47,\n                columnNumber: 15\n            }, undefined)\n        ]\n    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Loader__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n            lineNumber: 99,\n            columnNumber: 11\n        }, undefined)\n    }, void 0, false);\n};\n_s(MyApp, \"R0cAVWJwJiCAfBOv7eDm+5Pcdj8=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ2Q7QUFDVTtBQUNSO0FBQ2lCO0FBQ0E7QUFDQTtBQUNBO0FBRS9DLE1BQU1RLGlCQUFnQjtJQUNwQkMsU0FBUTtRQUNKQyxRQUFPO0lBQ1g7SUFDQUMsU0FBUSxDQUFDQyxLQUFRO1lBQ2JGLFFBQU87WUFDUEcsR0FBRSxDQUFDO1lBQ0hDLFlBQVc7Z0JBQUVDLE9BQU0sTUFBSUg7Z0JBQUdJLE1BQU07Z0JBQVlDLFdBQVU7Z0JBQUdDLFVBQVM7WUFBRztRQUN6RTtBQUNGO0FBRUEsTUFBTUMsUUFBUTtRQUFDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFOztJQUNyQyxNQUFNLENBQUVDLFNBQVFDLFdBQVksR0FBR3ZCLCtDQUFRQSxDQUFDO0lBQ3hDLE1BQU0sQ0FBRXdCLFFBQU9DLFFBQVMsR0FBR3pCLCtDQUFRQSxDQUFDO0lBRXBDQyxnREFBU0EsQ0FBQztRQUNSeUIsV0FBVyxJQUFNSCxXQUFXLFFBQU87SUFDckM7SUFFQSxxQkFDRSw4REFBQ3JCLGtEQUFJQTtrQkFDSCw0RUFBQ3lCO3NCQUFNOzs7Ozs7Ozs7O21CQUVULENBQUNMLHdCQUNHOzswQkFDQSw4REFBQ25CLGlEQUFNQSxDQUFDeUIsR0FBRztnQkFDVG5CLFNBQVM7b0JBQUNvQixpQkFBZ0I7b0JBQVVDLFNBQVE7Z0JBQUc7Z0JBQy9DQyxhQUFhO29CQUFDRixpQkFBZ0I7b0JBQU9DLFNBQVE7Z0JBQUM7Z0JBQzlDaEIsWUFBWTtvQkFBQ0UsTUFBSztnQkFBTzs7Ozs7O1lBTXZCUSx1QkFDRTswQkFBRSw0RUFBQ2xCLGlFQUFNQTtvQkFBQzBCLFdBQVdSO29CQUFRUyxZQUFZUjtvQkFBU1MsV0FBVTs7Ozs7OzhDQUU1RCw4REFBQ047Z0JBQUlNLFdBQVdWLFNBQU8sZ0JBQWM7O2tDQUNuQyw4REFBQ0k7d0JBQUlNLFdBQVU7OzBDQUNmLDhEQUFDL0IsaURBQU1BLENBQUN5QixHQUFHO2dDQUNQTyxVQUFVM0I7Z0NBQ1ZDLFNBQVE7Z0NBQ1JFLFNBQVE7Z0NBQ1J1QixXQUFVO2dDQUNWRSxRQUFROzs7Ozs7MENBR1osOERBQUNqQyxpREFBTUEsQ0FBQ3lCLEdBQUc7Z0NBQ1BPLFVBQVUzQjtnQ0FDVkMsU0FBUTtnQ0FDUkUsU0FBUTtnQ0FDUnVCLFdBQVU7Z0NBQ1ZFLFFBQVE7Ozs7OzswQ0FHWiw4REFBQ2pDLGlEQUFNQSxDQUFDeUIsR0FBRztnQ0FDUE8sVUFBVTNCO2dDQUNWQyxTQUFRO2dDQUNSRSxTQUFRO2dDQUNSdUIsV0FBVTtnQ0FDVkUsUUFBUTs7Ozs7OzBDQUlaLDhEQUFDakMsaURBQU1BLENBQUN5QixHQUFHO2dDQUNQTyxVQUFVM0I7Z0NBQ1ZDLFNBQVE7Z0NBQ1JFLFNBQVE7Z0NBQ1J1QixXQUFVO2dDQUNWRSxRQUFROzs7Ozs7MENBSVosOERBQUNqQyxpREFBTUEsQ0FBQ3lCLEdBQUc7Z0NBQ1BPLFVBQVUzQjtnQ0FDVkMsU0FBUTtnQ0FDUkUsU0FBUTtnQ0FDUnVCLFdBQVU7Z0NBQ1ZFLFFBQVE7Ozs7Ozs7Ozs7OztrQ0FJWiw4REFBQ2hCO3dCQUFXLEdBQUdDLFNBQVM7Ozs7OztrQ0FDeEIsOERBQUNqQixpRUFBTUE7Ozs7Ozs7Ozs7OztxQ0FLZjtrQkFDRSw0RUFBQ0csaUVBQU1BOzs7Ozs7QUFFZDtHQWhGR1k7S0FBQUE7QUFrRkosK0RBQWVBLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qc3g/NGNiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSx1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9Gb290ZXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyJ1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L05hdmJhcidcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9Mb2FkZXInXG5cbmNvbnN0IGxvYWRlclZhcmlhbnRzID17XG4gIGluaXRpYWw6e1xuICAgICAgaGVpZ2h0OjgwMCxcbiAgfSxcbiAgYW5pbWF0ZTooaWQpID0+ICh7XG4gICAgICBoZWlnaHQ6MCxcbiAgICAgIHk6LTIwMCxcbiAgICAgIHRyYW5zaXRpb246eyBkZWxheTowLjMqaWQsdHlwZTogJ2Vhc2VJbk91dCcsc3RpZmZuZXNzOjUwLGR1cmF0aW9uOjAuM30sXG4gIH0pLFxufVxuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgY29uc3QgWyBsb2FkaW5nLHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKHRydWUpXG4gIGNvbnN0IFsgaXNPcGVuLHNldE9wZW4gXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKSw4MDAwKVxuICB9KVxuICBcbiAgcmV0dXJuKFxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkFuYW50IEphaW4gfCBQb3J0Zm9saW8gPC90aXRsZT5cbiAgICA8L0hlYWQ+LFxuICAgICFsb2FkaW5nID9cbiAgICAgICAgPD5cbiAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgaW5pdGlhbD17e2JhY2tncm91bmRDb2xvcjonIzYwYTVmYScsb3BhY2l0eTowLjh9fVxuICAgICAgICAgIHdoaWxlSW5WaWV3PXt7YmFja2dyb3VuZENvbG9yOicjMDAwJyxvcGFjaXR5OjF9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3t0eXBlOid0d2Vlbid9fVxuICAgICAgICAgIC8vIGNsYXNzTmFtZT0nYm9yZGVyLTIgYm9yZGVyLXJlZC01MDAnXG4gICAgICAgID5cbiAgICAgICAgICB7LyogPEhlYWRlciBtZW51U3RhdGU9e2lzT3Blbn0gbWVudU1ldGhvZD17c2V0T3Blbn0gY2xhc3NOYW1lPXtpc09wZW4/J2JnLWJsYWNrJzonYmctYmx1ZS00MDAnfS8+ICovfVxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAge1xuICAgICAgICAgICAgaXNPcGVuID9cbiAgICAgICAgICAgICAgPD48TmF2YmFyIG1lbnVTdGF0ZT17aXNPcGVufSBtZW51TWV0aG9kPXtzZXRPcGVufSBjbGFzc05hbWU9J2JvcmRlci0yIGJvcmRlci1yZWQtNTAwJy8+PC8+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc09wZW4/J2JnLWJsdWUtNDAwJzonYmctYmxhY2snfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JpZCBncmlkLWNvbHMtNSc+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtsb2FkZXJWYXJpYW50c31cbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctYmx1ZS00MDAnXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbT17NX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17bG9hZGVyVmFyaWFudHN9XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWJsdWUtNDAwJ1xuICAgICAgICAgICAgICAgICAgICBjdXN0b209ezR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e2xvYWRlclZhcmlhbnRzfVxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ibHVlLTQwMCdcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tPXszfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtsb2FkZXJWYXJpYW50c31cbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctYmx1ZS00MDAnXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbT17Mn1cbiAgICAgICAgICAgICAgICA+ICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtsb2FkZXJWYXJpYW50c31cbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctYmx1ZS00MDAnXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbT17MX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PiAgXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgICA8Lz5cbiAgICAgICAgOlxuICAgICAgICA8PlxuICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgPC8+XG4gICl9XG5cbiAgZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkIiwibW90aW9uIiwiRm9vdGVyIiwiSGVhZGVyIiwiTmF2YmFyIiwiTG9hZGVyIiwibG9hZGVyVmFyaWFudHMiLCJpbml0aWFsIiwiaGVpZ2h0IiwiYW5pbWF0ZSIsImlkIiwieSIsInRyYW5zaXRpb24iLCJkZWxheSIsInR5cGUiLCJzdGlmZm5lc3MiLCJkdXJhdGlvbiIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJpc09wZW4iLCJzZXRPcGVuIiwic2V0VGltZW91dCIsInRpdGxlIiwiZGl2IiwiYmFja2dyb3VuZENvbG9yIiwib3BhY2l0eSIsIndoaWxlSW5WaWV3IiwibWVudVN0YXRlIiwibWVudU1ldGhvZCIsImNsYXNzTmFtZSIsInZhcmlhbnRzIiwiY3VzdG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n"));

/***/ })

});