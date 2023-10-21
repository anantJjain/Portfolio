"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/sections/Projects.jsx":
/*!************************************************!*\
  !*** ./pages/components/sections/Projects.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_data_Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/data/Projects */ \"./public/data/Projects.js\");\n/* harmony import */ var _barrel_optimize_names_BsArrowUpRight_BsGithub_react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=BsArrowUpRight,BsGithub!=!react-icons/bs */ \"__barrel_optimize__?names=BsArrowUpRight,BsGithub!=!./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\n\nconst fadeInAnimationVariants = {\n    initial: {\n        opacity: 0,\n        y: 100\n    },\n    animate: (id)=>({\n            opacity: 1,\n            y: 0,\n            transition: {\n                delay: 0.1 * id,\n                type: \"spring\",\n                stiffness: 150\n            }\n        })\n};\nconst textVariants = {\n    initial: {\n        y: 100\n    },\n    animate: {\n        y: 0,\n        transition: {\n            type: \"spring\",\n            stiffness: 200\n        }\n    }\n};\nconst Projects = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"projects\",\n        className: \"pt-10 pb-20 mt-26\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                initial: \"initial\",\n                whileInView: {\n                    y: 0,\n                    transition: {\n                        type: \"spring\",\n                        stiffness: 200\n                    },\n                    viewport: {\n                        once: true\n                    }\n                },\n                className: \"w-4/5 pt-4 m-auto text-sm font-normal tracking-widest l-20 text-stone-400\",\n                children: \" FEATURED PROJECTS -\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                lineNumber: 30,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                initial: {\n                    y: 100\n                },\n                whileInView: {\n                    y: 0,\n                    transition: {\n                        type: \"spring\",\n                        stiffness: 200\n                    }\n                },\n                className: \"w-4/5 pt-4 m-auto text-4xl font-bold text-white\",\n                children: \" Stuff I've Worked on \\uD83D\\uDCBB\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                lineNumber: 40,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-4 m-auto mt-10 md:grid-cols-2 lg:grid-cols-3 md:w-4/5 lg:w-4/5\",\n                children: _public_data_Projects__WEBPACK_IMPORTED_MODULE_1__.Project.map((project)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        variants: fadeInAnimationVariants,\n                        initial: \"initial\",\n                        whileInView: \"animate\",\n                        viewport: {\n                            once: true\n                        },\n                        custom: project.id,\n                        whileHover: {\n                            scale: 0.95\n                        },\n                        className: \"\".concat(project.bgKey, \"\\n                        text-3xl\\n                        border-2\\n                        transition\\n                        ease-linear\\n                        duration-200\\n                        bg-[linear-gradient(to_top,#ffecd2,#fcb69f)]\\n                        border-black\\n                        hover:bg-[linear-gradient(to_top,#000,#000)]\\n                      hover:text-white\\n                      hover:border-white\\n                        m-auto min-w-full min-h-20\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid p-4 ml-auto text-2xl text-right justify-items-end\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsArrowUpRight_BsGithub_react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsGithub, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 93\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pt-20 pb-10 pl-4 text-3xl font-bold text-left\",\n                                children: project.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex p-4 space-x-4 text-sm font-medium text-left\",\n                                children: project.skills.map((skill)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-xs uppercase\",\n                                        children: skill\n                                    }, project.id, false, {\n                                        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 29\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, project.id, true, {\n                        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 21\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                lineNumber: 52,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n        lineNumber: 29,\n        columnNumber: 7\n    }, undefined);\n};\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3NlY3Rpb25zL1Byb2plY3RzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVEO0FBQ0E7QUFDakI7QUFFdEMsTUFBTUksMEJBQXdCO0lBQzFCQyxTQUFRO1FBQ05DLFNBQVE7UUFDUkMsR0FBRTtJQUNKO0lBQ0FDLFNBQVMsQ0FBQ0MsS0FBUTtZQUNoQkgsU0FBUTtZQUNSQyxHQUFFO1lBQ0ZHLFlBQVc7Z0JBQUNDLE9BQU0sTUFBSUY7Z0JBQUdHLE1BQU07Z0JBQVNDLFdBQVU7WUFBRztRQUN2RDtBQUNKO0FBRUEsTUFBTUMsZUFBZTtJQUNuQlQsU0FBUTtRQUNORSxHQUFFO0lBQ0o7SUFDQUMsU0FBUTtRQUNORCxHQUFFO1FBQ0ZHLFlBQVc7WUFBQ0UsTUFBSztZQUFTQyxXQUFVO1FBQUc7SUFDekM7QUFDRjtBQUVBLE1BQU1FLFdBQVc7SUFDZixxQkFDSSw4REFBQ0M7UUFBSVAsSUFBRztRQUFZUSxXQUFVOzswQkFDMUIsOERBQUNkLGlEQUFNQSxDQUFDYSxHQUFHO2dCQUNUWCxTQUFRO2dCQUNSYSxhQUFhO29CQUNYWCxHQUFFO29CQUNGRyxZQUFXO3dCQUFDRSxNQUFLO3dCQUFTQyxXQUFVO29CQUFHO29CQUN2Q00sVUFBUzt3QkFBQ0MsTUFBSztvQkFBSTtnQkFDckI7Z0JBQ0FILFdBQVU7MEJBQ1g7Ozs7OzswQkFFRCw4REFBQ2QsaURBQU1BLENBQUNhLEdBQUc7Z0JBQ1RYLFNBQVM7b0JBQ1BFLEdBQUU7Z0JBQ0o7Z0JBQ0FXLGFBQWE7b0JBQ1hYLEdBQUU7b0JBQ0ZHLFlBQVc7d0JBQUNFLE1BQUs7d0JBQVNDLFdBQVU7b0JBQUc7Z0JBRXpDO2dCQUNBSSxXQUFVOzBCQUNYOzs7Ozs7MEJBRUQsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUVUakIsMERBQU9BLENBQUNxQixHQUFHLENBQUMsQ0FBQ0M7b0JBQ1gscUJBQ0UsOERBQUNuQixpREFBTUEsQ0FBQ2EsR0FBRzt3QkFDVE8sVUFBVW5CO3dCQUNWQyxTQUFRO3dCQUNSYSxhQUFZO3dCQUNaQyxVQUFVOzRCQUFFQyxNQUFLO3dCQUFLO3dCQUN0QkksUUFBUUYsUUFBUWIsRUFBRTt3QkFDbEJnQixZQUFZOzRCQUFDQyxPQUFNO3dCQUFJO3dCQUN2QlQsV0FDRSxHQUFpQixPQUFkSyxRQUFRSyxLQUFLLEVBQUM7OzBDQWNyQiw4REFBQ1g7Z0NBQUlDLFdBQVU7MENBQXlELDRFQUFDZixtR0FBUUE7Ozs7Ozs7Ozs7MENBQ2pGLDhEQUFDYztnQ0FBSUMsV0FBVTswQ0FBaURLLFFBQVFNLElBQUk7Ozs7OzswQ0FDNUUsOERBQUNaO2dDQUFJQyxXQUFVOzBDQUVYSyxRQUFRTyxNQUFNLENBQUNSLEdBQUcsQ0FBQyxDQUFDUztvQ0FDbEIscUJBQ0UsOERBQUNkO3dDQUFJQyxXQUFVO2tEQUFzQ2E7dUNBQWJSLFFBQVFiLEVBQUU7Ozs7O2dDQUV0RDs7Ozs7Ozt1QkFWS2EsUUFBUWIsRUFBRTs7Ozs7Z0JBZXZCOzs7Ozs7Ozs7Ozs7QUFLZDtLQXJFSU07QUF1RUosK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9zZWN0aW9ucy9Qcm9qZWN0cy5qc3g/OTM0NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9kYXRhL1Byb2plY3RzXCJcclxuaW1wb3J0IHsgQnNBcnJvd1VwUmlnaHQsQnNHaXRodWJ9IGZyb20gJ3JlYWN0LWljb25zL2JzJ1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXHJcblxyXG5jb25zdCBmYWRlSW5BbmltYXRpb25WYXJpYW50cz17XHJcbiAgICBpbml0aWFsOntcclxuICAgICAgb3BhY2l0eTowLFxyXG4gICAgICB5OjEwMFxyXG4gICAgfSxcclxuICAgIGFuaW1hdGU6IChpZCkgPT4gKHtcclxuICAgICAgb3BhY2l0eToxLFxyXG4gICAgICB5OjAsXHJcbiAgICAgIHRyYW5zaXRpb246e2RlbGF5OjAuMSppZCx0eXBlOiAnc3ByaW5nJyxzdGlmZm5lc3M6MTUwfVxyXG4gICAgfSlcclxufSBcclxuXHJcbmNvbnN0IHRleHRWYXJpYW50cyA9IHtcclxuICBpbml0aWFsOntcclxuICAgIHk6MTAwXHJcbiAgfSxcclxuICBhbmltYXRlOntcclxuICAgIHk6MCxcclxuICAgIHRyYW5zaXRpb246e3R5cGU6J3NwcmluZycsc3RpZmZuZXNzOjIwMH0sXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwicHJvamVjdHNcIiAgY2xhc3NOYW1lPVwicHQtMTAgcGItMjAgbXQtMjZcIj5cclxuICAgICAgICAgIDxtb3Rpb24uZGl2IFxyXG4gICAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXHJcbiAgICAgICAgICAgIHdoaWxlSW5WaWV3PXt7XHJcbiAgICAgICAgICAgICAgeTowLFxyXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246e3R5cGU6J3NwcmluZycsc3RpZmZuZXNzOjIwMH0sXHJcbiAgICAgICAgICAgICAgdmlld3BvcnQ6e29uY2U6dHJ1ZX0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNC81IHB0LTQgbS1hdXRvIHRleHQtc20gZm9udC1ub3JtYWwgdHJhY2tpbmctd2lkZXN0IGwtMjAgdGV4dC1zdG9uZS00MDBcIlxyXG4gICAgICAgICAgPiBGRUFUVVJFRCBQUk9KRUNUUyAtXHJcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICA8bW90aW9uLmRpdiBcclxuICAgICAgICAgICAgaW5pdGlhbD17e1xyXG4gICAgICAgICAgICAgIHk6MTAwLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB3aGlsZUluVmlldz17e1xyXG4gICAgICAgICAgICAgIHk6MCxcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOnt0eXBlOidzcHJpbmcnLHN0aWZmbmVzczoyMDB9LFxyXG4gICAgICAgICAgICAgIC8vIHZpZXdwb3J0PXt7b25jZTp0cnVlfX0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNC81IHB0LTQgbS1hdXRvIHRleHQtNHhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgID4gU3R1ZmYgSSd2ZSBXb3JrZWQgb24g8J+Su1xyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC00IG0tYXV0byBtdC0xMCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBtZDp3LTQvNSBsZzp3LTQvNVwiPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBQcm9qZWN0Lm1hcCgocHJvamVjdCk9PntcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudHM9e2ZhZGVJbkFuaW1hdGlvblZhcmlhbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgd2hpbGVJblZpZXc9XCJhbmltYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6dHJ1ZSB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY3VzdG9tPXtwcm9qZWN0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgd2hpbGVIb3Zlcj17e3NjYWxlOjAuOTV9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7cHJvamVjdC5iZ0tleX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC0zeGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLTJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNlLWxpbmVhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbi0yMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmctW2xpbmVhci1ncmFkaWVudCh0b190b3AsI2ZmZWNkMiwjZmNiNjlmKV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJsYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLVtsaW5lYXItZ3JhZGllbnQodG9fdG9wLCMwMDAsIzAwMCldXHJcbiAgICAgICAgICAgICAgICAgICAgICBob3Zlcjp0ZXh0LXdoaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBob3Zlcjpib3JkZXItd2hpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbS1hdXRvIG1pbi13LWZ1bGwgbWluLWgtMjBgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgcC00IG1sLWF1dG8gdGV4dC0yeGwgdGV4dC1yaWdodCBqdXN0aWZ5LWl0ZW1zLWVuZFwiPjxCc0dpdGh1YiAvPjwvZGl2PiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC0yMCBwYi0xMCBwbC00IHRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWxlZnRcIj57cHJvamVjdC5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBwLTQgc3BhY2UteC00IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3Quc2tpbGxzLm1hcCgoc2tpbGwpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXhzIHVwcGVyY2FzZVwiIGtleT17cHJvamVjdC5pZH0+e3NraWxsfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IFByb2plY3RzIl0sIm5hbWVzIjpbIlByb2plY3QiLCJCc0Fycm93VXBSaWdodCIsIkJzR2l0aHViIiwibW90aW9uIiwiZmFkZUluQW5pbWF0aW9uVmFyaWFudHMiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwiaWQiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ0eXBlIiwic3RpZmZuZXNzIiwidGV4dFZhcmlhbnRzIiwiUHJvamVjdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0Iiwib25jZSIsIm1hcCIsInByb2plY3QiLCJ2YXJpYW50cyIsImN1c3RvbSIsIndoaWxlSG92ZXIiLCJzY2FsZSIsImJnS2V5IiwibmFtZSIsInNraWxscyIsInNraWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/sections/Projects.jsx\n"));

/***/ })

});