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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/Footer */ \"./pages/components/layout/Footer.jsx\");\n/* harmony import */ var _components_layout_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/Header */ \"./pages/components/layout/Header.jsx\");\n/* harmony import */ var _components_layout_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/Navbar */ \"./pages/components/layout/Navbar.jsx\");\n/* harmony import */ var _components_layout_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/layout/Loader */ \"./pages/components/layout/Loader.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst loaderVariants = {\n    initial: {\n        height: 800\n    },\n    animate: (id)=>({\n            height: 0,\n            y: -200,\n            transition: {\n                delay: 0.3 * id,\n                type: \"easeInOut\",\n                stiffness: 50,\n                duration: 0.3\n            }\n        })\n};\nconst MyApp = (param)=>{\n    let { Component, pageProps } = param;\n    _s();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [isOpen, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setTimeout(()=>setLoading(false), 8000);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n            children: \"Anant Jain | Portfolio \"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined), !loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-5\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    menuState: isOpen,\n                    menuMethod: setOpen,\n                    className: isOpen ? \"bg-black\" : \"bg-blue-400\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                lineNumber: 35,\n                columnNumber: 9\n            }, undefined),\n            isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    menuState: isOpen,\n                    menuMethod: setOpen,\n                    className: \"border-2 border-red-500\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: isOpen ? \"bg-blue-400\" : \"bg-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                variants: loaderVariants,\n                                initial: \"initial\",\n                                animate: \"animate\",\n                                className: \"bg-blue-400\",\n                                custom: 5\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                variants: loaderVariants,\n                                initial: \"initial\",\n                                animate: \"animate\",\n                                className: \"bg-blue-400\",\n                                custom: 4\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                variants: loaderVariants,\n                                initial: \"initial\",\n                                animate: \"animate\",\n                                className: \"bg-blue-400\",\n                                custom: 3\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                variants: loaderVariants,\n                                initial: \"initial\",\n                                animate: \"animate\",\n                                className: \"bg-blue-400\",\n                                custom: 2\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.div, {\n                                variants: loaderVariants,\n                                initial: \"initial\",\n                                animate: \"animate\",\n                                className: \"bg-blue-400\",\n                                custom: 1\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                        lineNumber: 88,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n                lineNumber: 42,\n                columnNumber: 15\n            }, undefined)\n        ]\n    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_Loader__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\_app.jsx\",\n            lineNumber: 94,\n            columnNumber: 11\n        }, undefined)\n    }, void 0, false);\n};\n_s(MyApp, \"R0cAVWJwJiCAfBOv7eDm+5Pcdj8=\");\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ2Q7QUFDVTtBQUNSO0FBQ2lCO0FBQ0E7QUFDQTtBQUNBO0FBRS9DLE1BQU1RLGlCQUFnQjtJQUNwQkMsU0FBUTtRQUNKQyxRQUFPO0lBQ1g7SUFDQUMsU0FBUSxDQUFDQyxLQUFRO1lBQ2JGLFFBQU87WUFDUEcsR0FBRSxDQUFDO1lBQ0hDLFlBQVc7Z0JBQUVDLE9BQU0sTUFBSUg7Z0JBQUdJLE1BQU07Z0JBQVlDLFdBQVU7Z0JBQUdDLFVBQVM7WUFBRztRQUN6RTtBQUNGO0FBRUEsTUFBTUMsUUFBUTtRQUFDLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFOztJQUNyQyxNQUFNLENBQUVDLFNBQVFDLFdBQVksR0FBR3ZCLCtDQUFRQSxDQUFDO0lBQ3hDLE1BQU0sQ0FBRXdCLFFBQU9DLFFBQVMsR0FBR3pCLCtDQUFRQSxDQUFDO0lBRXBDQyxnREFBU0EsQ0FBQztRQUNSeUIsV0FBVyxJQUFNSCxXQUFXLFFBQU87SUFDckM7SUFFQSxxQkFDRSw4REFBQ3JCLGtEQUFJQTtrQkFDSCw0RUFBQ3lCO3NCQUFNOzs7Ozs7Ozs7O21CQUVULENBQUNMLHdCQUNHOzswQkFDQSw4REFBQ007Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUN4QixpRUFBTUE7b0JBQUN5QixXQUFXTjtvQkFBUU8sWUFBWU47b0JBQVNJLFdBQVdMLFNBQU8sYUFBVzs7Ozs7Ozs7Ozs7WUFHM0VBLHVCQUNFOzBCQUFFLDRFQUFDbEIsaUVBQU1BO29CQUFDd0IsV0FBV047b0JBQVFPLFlBQVlOO29CQUFTSSxXQUFVOzs7Ozs7OENBRTVELDhEQUFDRDtnQkFBSUMsV0FBV0wsU0FBTyxnQkFBYzs7a0NBQ25DLDhEQUFDSTt3QkFBSUMsV0FBVTs7MENBQ2YsOERBQUMxQixpREFBTUEsQ0FBQ3lCLEdBQUc7Z0NBQ1BJLFVBQVV4QjtnQ0FDVkMsU0FBUTtnQ0FDUkUsU0FBUTtnQ0FDUmtCLFdBQVU7Z0NBQ1ZJLFFBQVE7Ozs7OzswQ0FHWiw4REFBQzlCLGlEQUFNQSxDQUFDeUIsR0FBRztnQ0FDUEksVUFBVXhCO2dDQUNWQyxTQUFRO2dDQUNSRSxTQUFRO2dDQUNSa0IsV0FBVTtnQ0FDVkksUUFBUTs7Ozs7OzBDQUdaLDhEQUFDOUIsaURBQU1BLENBQUN5QixHQUFHO2dDQUNQSSxVQUFVeEI7Z0NBQ1ZDLFNBQVE7Z0NBQ1JFLFNBQVE7Z0NBQ1JrQixXQUFVO2dDQUNWSSxRQUFROzs7Ozs7MENBSVosOERBQUM5QixpREFBTUEsQ0FBQ3lCLEdBQUc7Z0NBQ1BJLFVBQVV4QjtnQ0FDVkMsU0FBUTtnQ0FDUkUsU0FBUTtnQ0FDUmtCLFdBQVU7Z0NBQ1ZJLFFBQVE7Ozs7OzswQ0FJWiw4REFBQzlCLGlEQUFNQSxDQUFDeUIsR0FBRztnQ0FDUEksVUFBVXhCO2dDQUNWQyxTQUFRO2dDQUNSRSxTQUFRO2dDQUNSa0IsV0FBVTtnQ0FDVkksUUFBUTs7Ozs7Ozs7Ozs7O2tDQUlaLDhEQUFDYjt3QkFBVyxHQUFHQyxTQUFTOzs7Ozs7a0NBQ3hCLDhEQUFDakIsaUVBQU1BOzs7Ozs7Ozs7Ozs7cUNBS2Y7a0JBQ0UsNEVBQUNHLGlFQUFNQTs7Ozs7O0FBRWQ7R0EzRUdZO0tBQUFBO0FBNkVKLCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanN4PzRjYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyJ1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlcidcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9OYXZiYXInXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvTG9hZGVyJ1xuXG5jb25zdCBsb2FkZXJWYXJpYW50cyA9e1xuICBpbml0aWFsOntcbiAgICAgIGhlaWdodDo4MDAsXG4gIH0sXG4gIGFuaW1hdGU6KGlkKSA9PiAoe1xuICAgICAgaGVpZ2h0OjAsXG4gICAgICB5Oi0yMDAsXG4gICAgICB0cmFuc2l0aW9uOnsgZGVsYXk6MC4zKmlkLHR5cGU6ICdlYXNlSW5PdXQnLHN0aWZmbmVzczo1MCxkdXJhdGlvbjowLjN9LFxuICB9KSxcbn1cblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIGNvbnN0IFsgbG9hZGluZyxzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBbIGlzT3BlbixzZXRPcGVuIF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0TG9hZGluZyhmYWxzZSksODAwMClcbiAgfSlcbiAgXG4gIHJldHVybihcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5BbmFudCBKYWluIHwgUG9ydGZvbGlvIDwvdGl0bGU+XG4gICAgPC9IZWFkPixcbiAgICAhbG9hZGluZyA/XG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd6LTUnPlxuICAgICAgICAgIDxIZWFkZXIgbWVudVN0YXRlPXtpc09wZW59IG1lbnVNZXRob2Q9e3NldE9wZW59IGNsYXNzTmFtZT17aXNPcGVuPydiZy1ibGFjayc6J2JnLWJsdWUtNDAwJ30vPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBpc09wZW4gP1xuICAgICAgICAgICAgICA8PjxOYXZiYXIgbWVudVN0YXRlPXtpc09wZW59IG1lbnVNZXRob2Q9e3NldE9wZW59IGNsYXNzTmFtZT0nYm9yZGVyLTIgYm9yZGVyLXJlZC01MDAnLz48Lz5cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2lzT3Blbj8nYmctYmx1ZS00MDAnOidiZy1ibGFjayd9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmlkIGdyaWQtY29scy01Jz5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e2xvYWRlclZhcmlhbnRzfVxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ibHVlLTQwMCdcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tPXs1fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtsb2FkZXJWYXJpYW50c31cbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctYmx1ZS00MDAnXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbT17NH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17bG9hZGVyVmFyaWFudHN9XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLWJsdWUtNDAwJ1xuICAgICAgICAgICAgICAgICAgICBjdXN0b209ezN9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e2xvYWRlclZhcmlhbnRzfVxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ibHVlLTQwMCdcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tPXsyfVxuICAgICAgICAgICAgICAgID4gIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e2xvYWRlclZhcmlhbnRzfVxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9XCJhbmltYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1ibHVlLTQwMCdcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tPXsxfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICBcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvPlxuICAgICAgICA6XG4gICAgICAgIDw+XG4gICAgICAgICAgPExvYWRlciAvPlxuICAgICAgICA8Lz5cbiAgKX1cblxuICBleHBvcnQgZGVmYXVsdCBNeUFwcCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlYWQiLCJtb3Rpb24iLCJGb290ZXIiLCJIZWFkZXIiLCJOYXZiYXIiLCJMb2FkZXIiLCJsb2FkZXJWYXJpYW50cyIsImluaXRpYWwiLCJoZWlnaHQiLCJhbmltYXRlIiwiaWQiLCJ5IiwidHJhbnNpdGlvbiIsImRlbGF5IiwidHlwZSIsInN0aWZmbmVzcyIsImR1cmF0aW9uIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImlzT3BlbiIsInNldE9wZW4iLCJzZXRUaW1lb3V0IiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJtZW51U3RhdGUiLCJtZW51TWV0aG9kIiwidmFyaWFudHMiLCJjdXN0b20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.jsx\n"));

/***/ })

});