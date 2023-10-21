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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_data_Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/data/Projects */ \"./public/data/Projects.js\");\n/* harmony import */ var _barrel_optimize_names_BsArrowUpRight_BsGithub_react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=BsArrowUpRight,BsGithub!=!react-icons/bs */ \"__barrel_optimize__?names=BsArrowUpRight,BsGithub!=!./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"./node_modules/@fortawesome/fontawesome-svg-core/index.mjs\");\n\n\n\n\n\nconst fadeInAnimationVariants = {\n    initial: {\n        opacity: 0,\n        y: 100\n    },\n    animate: (id)=>({\n            opacity: 1,\n            y: 0,\n            transition: {\n                delay: 0.1 * id,\n                type: \"spring\",\n                stiffness: 150\n            }\n        })\n};\nconst textVariants = {\n    textInitial: {\n        y: 100\n    },\n    textAnimate: {\n        y: 0,\n        transition: {\n            type: \"spring\",\n            stiffness: 200\n        }\n    }\n};\nconst Projects = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"projects\",\n        className: \"pt-10 pb-20 mt-26\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                variants: textVariants,\n                initial: \"textInitial\",\n                whileInView: \"textAnimate\",\n                viewport: {\n                    once: true\n                },\n                className: \"w-4/5 pt-4 m-auto text-sm font-normal tracking-widest l-20 text-stone-400\",\n                children: \" FEATURED PROJECTS -\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                lineNumber: 31,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                variants: textVariants,\n                initial: \"textInitial\",\n                whileInView: \"animate\",\n                viewport: {\n                    once: true\n                },\n                className: \"w-4/5 pt-4 m-auto text-4xl font-bold text-white\",\n                children: \" Stuff I've Worked on \\uD83D\\uDCBB\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                lineNumber: 39,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-4 m-auto mt-10 md:grid-cols-2 lg:grid-cols-3 md:w-4/5 lg:w-4/5\",\n                children: _public_data_Projects__WEBPACK_IMPORTED_MODULE_1__.Project.map((project)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        variants: fadeInAnimationVariants,\n                        initial: \"initial\",\n                        whileInView: \"animate\",\n                        viewport: {\n                            once: true\n                        },\n                        custom: project.id,\n                        whileHover: {\n                            scale: 0.95\n                        },\n                        className: \"\".concat(project.bgKey, \"\\n                        text-3xl\\n                        border-2\\n                        transition\\n                        ease-linear\\n                        duration-200\\n                        bg-[linear-gradient(to_top,#ffecd2,#fcb69f)]\\n                        border-black\\n                        hover:bg-[linear-gradient(to_top,#000,#000)]\\n                      hover:text-white\\n                      hover:border-white\\n                        m-auto min-w-full min-h-20\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid p-4 ml-auto text-2xl text-right justify-items-end\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsArrowUpRight_BsGithub_react_icons_bs__WEBPACK_IMPORTED_MODULE_4__.BsGithub, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 93\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pt-20 pb-10 pl-4 text-3xl font-bold text-left\",\n                                children: project.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex p-4 space-x-4 text-sm font-medium text-left\",\n                                children: project.skills.map((skill)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-xs uppercase\",\n                                        children: skill\n                                    }, project.id, false, {\n                                        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 29\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, project.id, true, {\n                        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                lineNumber: 47,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n        lineNumber: 30,\n        columnNumber: 7\n    }, undefined);\n};\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3NlY3Rpb25zL1Byb2plY3RzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF1RDtBQUNBO0FBQ2pCO0FBQ2tCO0FBRXhELE1BQU1LLDBCQUF3QjtJQUMxQkMsU0FBUTtRQUNOQyxTQUFRO1FBQ1JDLEdBQUU7SUFDSjtJQUNBQyxTQUFTLENBQUNDLEtBQVE7WUFDaEJILFNBQVE7WUFDUkMsR0FBRTtZQUNGRyxZQUFXO2dCQUFDQyxPQUFNLE1BQUlGO2dCQUFHRyxNQUFNO2dCQUFTQyxXQUFVO1lBQUc7UUFDdkQ7QUFDSjtBQUVBLE1BQU1DLGVBQWU7SUFDbkJDLGFBQVk7UUFDVlIsR0FBRTtJQUNKO0lBQ0FTLGFBQVk7UUFDVlQsR0FBRTtRQUNGRyxZQUFXO1lBQUNFLE1BQUs7WUFBU0MsV0FBVTtRQUFHO0lBQ3pDO0FBQ0Y7QUFFQSxNQUFNSSxXQUFXO0lBQ2YscUJBQ0ksOERBQUNDO1FBQUlULElBQUc7UUFBWVUsV0FBVTs7MEJBQzFCLDhEQUFDakIsaURBQU1BLENBQUNnQixHQUFHO2dCQUNURSxVQUFVTjtnQkFDVlQsU0FBUTtnQkFDUmdCLGFBQVk7Z0JBQ1pDLFVBQVU7b0JBQUNDLE1BQUs7Z0JBQUk7Z0JBQ3BCSixXQUFVOzBCQUNYOzs7Ozs7MEJBRUQsOERBQUNqQixpREFBTUEsQ0FBQ2dCLEdBQUc7Z0JBQ1RFLFVBQVVOO2dCQUNWVCxTQUFRO2dCQUNSZ0IsYUFBWTtnQkFDWkMsVUFBVTtvQkFBQ0MsTUFBSztnQkFBSTtnQkFDcEJKLFdBQVU7MEJBQ1g7Ozs7OzswQkFFRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBRVRwQiwwREFBT0EsQ0FBQ3lCLEdBQUcsQ0FBQyxDQUFDQztvQkFDWCxxQkFDRSw4REFBQ3ZCLGlEQUFNQSxDQUFDZ0IsR0FBRzt3QkFDVEUsVUFBVWhCO3dCQUNWQyxTQUFRO3dCQUNSZ0IsYUFBWTt3QkFDWkMsVUFBVTs0QkFBRUMsTUFBSzt3QkFBSzt3QkFDdEJHLFFBQVFELFFBQVFoQixFQUFFO3dCQUNsQmtCLFlBQVk7NEJBQUNDLE9BQU07d0JBQUk7d0JBQ3ZCVCxXQUNFLEdBQWlCLE9BQWRNLFFBQVFJLEtBQUssRUFBQzs7MENBY3JCLDhEQUFDWDtnQ0FBSUMsV0FBVTswQ0FBeUQsNEVBQUNsQixtR0FBUUE7Ozs7Ozs7Ozs7MENBQ2pGLDhEQUFDaUI7Z0NBQUlDLFdBQVU7MENBQWlETSxRQUFRSyxJQUFJOzs7Ozs7MENBQzVFLDhEQUFDWjtnQ0FBSUMsV0FBVTswQ0FFWE0sUUFBUU0sTUFBTSxDQUFDUCxHQUFHLENBQUMsQ0FBQ1E7b0NBQ2xCLHFCQUNFLDhEQUFDZDt3Q0FBSUMsV0FBVTtrREFBc0NhO3VDQUFiUCxRQUFRaEIsRUFBRTs7Ozs7Z0NBRXREOzs7Ozs7O3VCQVZLZ0IsUUFBUWhCLEVBQUU7Ozs7O2dCQWV2Qjs7Ozs7Ozs7Ozs7O0FBS2Q7S0EvRElRO0FBaUVKLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvc2VjdGlvbnMvUHJvamVjdHMuanN4PzkzNDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvZGF0YS9Qcm9qZWN0c1wiXHJcbmltcG9ydCB7IEJzQXJyb3dVcFJpZ2h0LEJzR2l0aHVifSBmcm9tICdyZWFjdC1pY29ucy9icydcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5pbXBvcnQgeyB0ZXh0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZVwiXHJcblxyXG5jb25zdCBmYWRlSW5BbmltYXRpb25WYXJpYW50cz17XHJcbiAgICBpbml0aWFsOntcclxuICAgICAgb3BhY2l0eTowLFxyXG4gICAgICB5OjEwMFxyXG4gICAgfSxcclxuICAgIGFuaW1hdGU6IChpZCkgPT4gKHtcclxuICAgICAgb3BhY2l0eToxLFxyXG4gICAgICB5OjAsXHJcbiAgICAgIHRyYW5zaXRpb246e2RlbGF5OjAuMSppZCx0eXBlOiAnc3ByaW5nJyxzdGlmZm5lc3M6MTUwfVxyXG4gICAgfSlcclxufSBcclxuXHJcbmNvbnN0IHRleHRWYXJpYW50cyA9IHtcclxuICB0ZXh0SW5pdGlhbDp7XHJcbiAgICB5OjEwMFxyXG4gIH0sXHJcbiAgdGV4dEFuaW1hdGU6e1xyXG4gICAgeTowLFxyXG4gICAgdHJhbnNpdGlvbjp7dHlwZTonc3ByaW5nJyxzdGlmZm5lc3M6MjAwfSxcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJwcm9qZWN0c1wiICBjbGFzc05hbWU9XCJwdC0xMCBwYi0yMCBtdC0yNlwiPlxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgdmFyaWFudHM9e3RleHRWYXJpYW50c30gXHJcbiAgICAgICAgICAgIGluaXRpYWw9XCJ0ZXh0SW5pdGlhbFwiXHJcbiAgICAgICAgICAgIHdoaWxlSW5WaWV3PVwidGV4dEFuaW1hdGVcIlxyXG4gICAgICAgICAgICB2aWV3cG9ydD17e29uY2U6dHJ1ZX19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNC81IHB0LTQgbS1hdXRvIHRleHQtc20gZm9udC1ub3JtYWwgdHJhY2tpbmctd2lkZXN0IGwtMjAgdGV4dC1zdG9uZS00MDBcIlxyXG4gICAgICAgICAgPiBGRUFUVVJFRCBQUk9KRUNUUyAtXHJcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICA8bW90aW9uLmRpdiBcclxuICAgICAgICAgICAgdmFyaWFudHM9e3RleHRWYXJpYW50c31cclxuICAgICAgICAgICAgaW5pdGlhbD1cInRleHRJbml0aWFsXCJcclxuICAgICAgICAgICAgd2hpbGVJblZpZXc9XCJhbmltYXRlXCJcclxuICAgICAgICAgICAgdmlld3BvcnQ9e3tvbmNlOnRydWV9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTQvNSBwdC00IG0tYXV0byB0ZXh0LTR4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiXHJcbiAgICAgICAgICA+IFN0dWZmIEkndmUgV29ya2VkIG9uIPCfkrtcclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBnYXAtNCBtLWF1dG8gbXQtMTAgbWQ6Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTMgbWQ6dy00LzUgbGc6dy00LzVcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUHJvamVjdC5tYXAoKHByb2plY3QpPT57XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtmYWRlSW5BbmltYXRpb25WYXJpYW50c31cclxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PVwiYW5pbWF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOnRydWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbT17cHJvamVjdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3tzY2FsZTowLjk1fX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke3Byb2plY3QuYmdLZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtM3hsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci0yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWFzZS1saW5lYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24tMjAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJnLVtsaW5lYXItZ3JhZGllbnQodG9fdG9wLCNmZmVjZDIsI2ZjYjY5ZildXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ibGFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3ZlcjpiZy1bbGluZWFyLWdyYWRpZW50KHRvX3RvcCwjMDAwLCMwMDApXVxyXG4gICAgICAgICAgICAgICAgICAgICAgaG92ZXI6dGV4dC13aGl0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgaG92ZXI6Ym9yZGVyLXdoaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG0tYXV0byBtaW4tdy1mdWxsIG1pbi1oLTIwYH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIHAtNCBtbC1hdXRvIHRleHQtMnhsIHRleHQtcmlnaHQganVzdGlmeS1pdGVtcy1lbmRcIj48QnNHaXRodWIgLz48L2Rpdj4gICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMjAgcGItMTAgcGwtNCB0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1sZWZ0XCI+e3Byb2plY3QubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcC00IHNwYWNlLXgtNCB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnNraWxscy5tYXAoKHNraWxsKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC14cyB1cHBlcmNhc2VcIiBrZXk9e3Byb2plY3QuaWR9Pntza2lsbH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBQcm9qZWN0cyJdLCJuYW1lcyI6WyJQcm9qZWN0IiwiQnNBcnJvd1VwUmlnaHQiLCJCc0dpdGh1YiIsIm1vdGlvbiIsInRleHQiLCJmYWRlSW5BbmltYXRpb25WYXJpYW50cyIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJpZCIsInRyYW5zaXRpb24iLCJkZWxheSIsInR5cGUiLCJzdGlmZm5lc3MiLCJ0ZXh0VmFyaWFudHMiLCJ0ZXh0SW5pdGlhbCIsInRleHRBbmltYXRlIiwiUHJvamVjdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJ2YXJpYW50cyIsIndoaWxlSW5WaWV3Iiwidmlld3BvcnQiLCJvbmNlIiwibWFwIiwicHJvamVjdCIsImN1c3RvbSIsIndoaWxlSG92ZXIiLCJzY2FsZSIsImJnS2V5IiwibmFtZSIsInNraWxscyIsInNraWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/sections/Projects.jsx\n"));

/***/ })

});