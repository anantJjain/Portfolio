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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_data_Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/data/Projects */ \"./public/data/Projects.js\");\n/* harmony import */ var _barrel_optimize_names_BsGithub_react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=BsGithub!=!react-icons/bs */ \"__barrel_optimize__?names=BsGithub!=!./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\n\nconst fadeInAnimationVariants = {\n    initial: {\n        opacity: 0,\n        y: 100\n    },\n    animate: (id)=>({\n            opacity: 1,\n            y: 0,\n            transition: {\n                delay: 0.1 * id,\n                type: \"spring\",\n                stiffness: 150\n            }\n        })\n};\nconst textVariants = {\n    textInitial: {\n        y: 100\n    },\n    textAnimate: {\n        y: 0,\n        transition: {\n            type: \"spring\",\n            stiffness: 200\n        }\n    }\n};\nconst Projects = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"projects\",\n        className: \"pt-10 pb-20 mt-26\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                variants: textVariants,\n                initial: \"textInitial\",\n                whileInView: \"textAnimate\",\n                viewport: {\n                    once: true\n                },\n                className: \"w-4/5 pt-4 m-auto text-sm font-normal tracking-widest l-20 text-stone-400\",\n                children: \" FEATURED PROJECTS -\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                lineNumber: 31,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                variants: textVariants,\n                initial: \"textInitial\",\n                whileInView: \"textAnimate\",\n                viewport: {\n                    once: true\n                },\n                className: \"w-4/5 pt-4 m-auto text-4xl font-bold text-white\",\n                children: \" Stuff I've Worked on \\uD83D\\uDCBB\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                lineNumber: 39,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-4 m-auto mt-10 md:grid-cols-2 lg:grid-cols-3 md:w-4/5 lg:w-4/5\",\n                children: _public_data_Projects__WEBPACK_IMPORTED_MODULE_1__.Project.map((project)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        variants: fadeInAnimationVariants,\n                        initial: \"initial\",\n                        whileInView: \"animate\",\n                        viewport: {\n                            once: true\n                        },\n                        custom: project.id,\n                        whileHover: {\n                            scale: 0.95\n                        },\n                        className: \"\".concat(project.bgKey, \"\\n                        text-3xl\\n                        border-2\\n                        transition\\n                        ease-linear\\n                        duration-200\\n                        bg-[linear-gradient(to_top,#ffecd2,#fcb69f)]\\n                        border-black\\n                        hover:bg-[linear-gradient(to_top,#000,#000)]\\n                      hover:text-white\\n                      hover:border-white\\n                        m-auto min-w-full min-h-20\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"grid p-4 ml-auto text-2xl text-right justify-items-end\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsGithub_react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsGithub, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 93\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pt-20 pb-10 pl-4 text-3xl font-bold text-left\",\n                                children: project.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                                lineNumber: 74,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex p-4 space-x-4 text-sm font-medium text-left\",\n                                children: project.skills.map((skill)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-xs uppercase\",\n                                        children: skill\n                                    }, project.id, false, {\n                                        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                                        lineNumber: 79,\n                                        columnNumber: 29\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, project.id, true, {\n                        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                lineNumber: 47,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n        lineNumber: 30,\n        columnNumber: 7\n    }, undefined);\n};\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3NlY3Rpb25zL1Byb2plY3RzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVEO0FBQ2Y7QUFDRjtBQUd0QyxNQUFNRywwQkFBd0I7SUFDMUJDLFNBQVE7UUFDTkMsU0FBUTtRQUNSQyxHQUFFO0lBQ0o7SUFDQUMsU0FBUyxDQUFDQyxLQUFRO1lBQ2hCSCxTQUFRO1lBQ1JDLEdBQUU7WUFDRkcsWUFBVztnQkFBQ0MsT0FBTSxNQUFJRjtnQkFBR0csTUFBTTtnQkFBU0MsV0FBVTtZQUFHO1FBQ3ZEO0FBQ0o7QUFFQSxNQUFNQyxlQUFlO0lBQ25CQyxhQUFZO1FBQ1ZSLEdBQUU7SUFDSjtJQUNBUyxhQUFZO1FBQ1ZULEdBQUU7UUFDRkcsWUFBVztZQUFDRSxNQUFLO1lBQVNDLFdBQVU7UUFBRztJQUN6QztBQUNGO0FBRUEsTUFBTUksV0FBVztJQUNmLHFCQUNJLDhEQUFDQztRQUFJVCxJQUFHO1FBQVlVLFdBQVU7OzBCQUMxQiw4REFBQ2hCLGlEQUFNQSxDQUFDZSxHQUFHO2dCQUNURSxVQUFVTjtnQkFDVlQsU0FBUTtnQkFDUmdCLGFBQVk7Z0JBQ1pDLFVBQVU7b0JBQUNDLE1BQUs7Z0JBQUk7Z0JBQ3BCSixXQUFVOzBCQUNYOzs7Ozs7MEJBRUQsOERBQUNoQixpREFBTUEsQ0FBQ2UsR0FBRztnQkFDVEUsVUFBVU47Z0JBQ1ZULFNBQVE7Z0JBQ1JnQixhQUFZO2dCQUNaQyxVQUFVO29CQUFDQyxNQUFLO2dCQUFJO2dCQUNwQkosV0FBVTswQkFDWDs7Ozs7OzBCQUVELDhEQUFDRDtnQkFBSUMsV0FBVTswQkFFVGxCLDBEQUFPQSxDQUFDdUIsR0FBRyxDQUFDLENBQUNDO29CQUNYLHFCQUNFLDhEQUFDdEIsaURBQU1BLENBQUNlLEdBQUc7d0JBQ1RFLFVBQVVoQjt3QkFDVkMsU0FBUTt3QkFDUmdCLGFBQVk7d0JBQ1pDLFVBQVU7NEJBQUVDLE1BQUs7d0JBQUs7d0JBQ3RCRyxRQUFRRCxRQUFRaEIsRUFBRTt3QkFDbEJrQixZQUFZOzRCQUFDQyxPQUFNO3dCQUFJO3dCQUN2QlQsV0FDRSxHQUFpQixPQUFkTSxRQUFRSSxLQUFLLEVBQUM7OzBDQWNyQiw4REFBQ1g7Z0NBQUlDLFdBQVU7MENBQXlELDRFQUFDakIsb0ZBQVFBOzs7Ozs7Ozs7OzBDQUNqRiw4REFBQ2dCO2dDQUFJQyxXQUFVOzBDQUFpRE0sUUFBUUssSUFBSTs7Ozs7OzBDQUM1RSw4REFBQ1o7Z0NBQUlDLFdBQVU7MENBRVhNLFFBQVFNLE1BQU0sQ0FBQ1AsR0FBRyxDQUFDLENBQUNRO29DQUNsQixxQkFDRSw4REFBQ2Q7d0NBQUlDLFdBQVU7a0RBQXNDYTt1Q0FBYlAsUUFBUWhCLEVBQUU7Ozs7O2dDQUV0RDs7Ozs7Ozt1QkFWS2dCLFFBQVFoQixFQUFFOzs7OztnQkFldkI7Ozs7Ozs7Ozs7OztBQUtkO0tBL0RJUTtBQWlFSiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL3NlY3Rpb25zL1Byb2plY3RzLmpzeD85MzQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2RhdGEvUHJvamVjdHNcIlxyXG5pbXBvcnQgeyBCc0dpdGh1Yn0gZnJvbSAncmVhY3QtaWNvbnMvYnMnXHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCJcclxuXHJcblxyXG5jb25zdCBmYWRlSW5BbmltYXRpb25WYXJpYW50cz17XHJcbiAgICBpbml0aWFsOntcclxuICAgICAgb3BhY2l0eTowLFxyXG4gICAgICB5OjEwMFxyXG4gICAgfSxcclxuICAgIGFuaW1hdGU6IChpZCkgPT4gKHtcclxuICAgICAgb3BhY2l0eToxLFxyXG4gICAgICB5OjAsXHJcbiAgICAgIHRyYW5zaXRpb246e2RlbGF5OjAuMSppZCx0eXBlOiAnc3ByaW5nJyxzdGlmZm5lc3M6MTUwfVxyXG4gICAgfSlcclxufSBcclxuXHJcbmNvbnN0IHRleHRWYXJpYW50cyA9IHtcclxuICB0ZXh0SW5pdGlhbDp7XHJcbiAgICB5OjEwMFxyXG4gIH0sXHJcbiAgdGV4dEFuaW1hdGU6e1xyXG4gICAgeTowLFxyXG4gICAgdHJhbnNpdGlvbjp7dHlwZTonc3ByaW5nJyxzdGlmZm5lc3M6MjAwfSxcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJwcm9qZWN0c1wiICBjbGFzc05hbWU9XCJwdC0xMCBwYi0yMCBtdC0yNlwiPlxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgdmFyaWFudHM9e3RleHRWYXJpYW50c30gXHJcbiAgICAgICAgICAgIGluaXRpYWw9XCJ0ZXh0SW5pdGlhbFwiXHJcbiAgICAgICAgICAgIHdoaWxlSW5WaWV3PVwidGV4dEFuaW1hdGVcIlxyXG4gICAgICAgICAgICB2aWV3cG9ydD17e29uY2U6dHJ1ZX19XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNC81IHB0LTQgbS1hdXRvIHRleHQtc20gZm9udC1ub3JtYWwgdHJhY2tpbmctd2lkZXN0IGwtMjAgdGV4dC1zdG9uZS00MDBcIlxyXG4gICAgICAgICAgPiBGRUFUVVJFRCBQUk9KRUNUUyAtXHJcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICA8bW90aW9uLmRpdiBcclxuICAgICAgICAgICAgdmFyaWFudHM9e3RleHRWYXJpYW50c31cclxuICAgICAgICAgICAgaW5pdGlhbD1cInRleHRJbml0aWFsXCJcclxuICAgICAgICAgICAgd2hpbGVJblZpZXc9XCJ0ZXh0QW5pbWF0ZVwiXHJcbiAgICAgICAgICAgIHZpZXdwb3J0PXt7b25jZTp0cnVlfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy00LzUgcHQtNCBtLWF1dG8gdGV4dC00eGwgZm9udC1ib2xkIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgPiBTdHVmZiBJJ3ZlIFdvcmtlZCBvbiDwn5K7XHJcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ2FwLTQgbS1hdXRvIG10LTEwIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIG1kOnctNC81IGxnOnctNC81XCI+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFByb2plY3QubWFwKChwcm9qZWN0KT0+e1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50cz17ZmFkZUluQW5pbWF0aW9uVmFyaWFudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aGlsZUluVmlldz1cImFuaW1hdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTp0cnVlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBjdXN0b209e3Byb2plY3QuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7c2NhbGU6MC45NX19XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtwcm9qZWN0LmJnS2V5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LTN4bFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVhc2UtbGluZWFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uLTIwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZy1bbGluZWFyLWdyYWRpZW50KHRvX3RvcCwjZmZlY2QyLCNmY2I2OWYpXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYmxhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6YmctW2xpbmVhci1ncmFkaWVudCh0b190b3AsIzAwMCwjMDAwKV1cclxuICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOnRleHQtd2hpdGVcclxuICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJvcmRlci13aGl0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtLWF1dG8gbWluLXctZnVsbCBtaW4taC0yMGB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2plY3QuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBwLTQgbWwtYXV0byB0ZXh0LTJ4bCB0ZXh0LXJpZ2h0IGp1c3RpZnktaXRlbXMtZW5kXCI+PEJzR2l0aHViIC8+PC9kaXY+ICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTIwIHBiLTEwIHBsLTQgdGV4dC0zeGwgZm9udC1ib2xkIHRleHQtbGVmdFwiPntwcm9qZWN0Lm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHAtNCBzcGFjZS14LTQgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5za2lsbHMubWFwKChza2lsbCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdXBwZXJjYXNlXCIga2V5PXtwcm9qZWN0LmlkfT57c2tpbGx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj4gIFxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgUHJvamVjdHMiXSwibmFtZXMiOlsiUHJvamVjdCIsIkJzR2l0aHViIiwibW90aW9uIiwiZmFkZUluQW5pbWF0aW9uVmFyaWFudHMiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJhbmltYXRlIiwiaWQiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ0eXBlIiwic3RpZmZuZXNzIiwidGV4dFZhcmlhbnRzIiwidGV4dEluaXRpYWwiLCJ0ZXh0QW5pbWF0ZSIsIlByb2plY3RzIiwiZGl2IiwiY2xhc3NOYW1lIiwidmFyaWFudHMiLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0Iiwib25jZSIsIm1hcCIsInByb2plY3QiLCJjdXN0b20iLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJiZ0tleSIsIm5hbWUiLCJza2lsbHMiLCJza2lsbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/sections/Projects.jsx\n"));

/***/ })

});