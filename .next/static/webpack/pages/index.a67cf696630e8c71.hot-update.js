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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_data_Projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../public/data/Projects */ \"./public/data/Projects.js\");\n/* harmony import */ var _barrel_optimize_names_BsGithub_react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=BsGithub!=!react-icons/bs */ \"__barrel_optimize__?names=BsGithub!=!./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\n\nconst fadeInAnimationVariants = {\n    initial: {\n        opacity: 0,\n        y: 100\n    },\n    animate: (id)=>({\n            opacity: 1,\n            y: 0,\n            transition: {\n                delay: 0.1 * id,\n                type: \"spring\",\n                stiffness: 150\n            }\n        })\n};\nconst textVariants = {\n    textInitial: {\n        y: 100\n    },\n    textAnimate: {\n        y: 0,\n        transition: {\n            type: \"spring\",\n            stiffness: 200\n        }\n    }\n};\nconst Projects = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"projects\",\n        className: \"pt-10 pb-20 mt-26\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                variants: textVariants,\n                initial: \"textInitial\",\n                whileInView: \"textAnimate\",\n                viewport: {\n                    once: true\n                },\n                className: \"w-full m-auto text-sm font-normal tracking-widest sm3:w-4/5 sm1:w-full sm1:text-center sm3:text-left text-stone-400 sm1:mt-8\",\n                children: \" FEATURED PROJECTS -\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                lineNumber: 31,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                variants: textVariants,\n                initial: \"textInitial\",\n                whileInView: \"textAnimate\",\n                viewport: {\n                    once: true\n                },\n                className: \"w-full pt-4 m-auto text-4xl font-bold text-white sm1:text-center sm1:w-full sm3:w-4/5 sm3:text-left sm3:flex sm1:text-2xl sm3:text-2xl md:text-3xl lg:text-4xl\",\n                children: \" Stuff I've Worked on \\uD83D\\uDCBB\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                lineNumber: 39,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid gap-4 m-auto mt-10 md:grid-cols-2 lg:grid-cols-3 sm1:w-4/5\",\n                children: _public_data_Projects__WEBPACK_IMPORTED_MODULE_1__.Project.map((project)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        variants: fadeInAnimationVariants,\n                        initial: \"initial\",\n                        whileInView: \"animate\",\n                        viewport: {\n                            once: true\n                        },\n                        custom: project.id,\n                        whileHover: {\n                            scale: 0.95\n                        },\n                        className: \"\".concat(project.bgKey, \"\\n                        sm1:text-2xl\\n                        md:text-3xl\\n                        projectTiles\\n                        border-2\\n                        transition\\n                        ease-linear\\n                        duration-200\\n                        bg-[linear-gradient(to_top,#ffecd2,#fcb69f)]\\n                        border-black\\n                        hover:bg-[linear-gradient(to_top,#000,#000)]\\n                      hover:text-white\\n                      hover:border-white\\n                        m-auto \\n                        min-w-full \\n                        sm3:min-h-20\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: project.url,\n                                target: \"_blank\",\n                                className: \"grid p-4 ml-auto text-2xl text-right justify-items-end\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BsGithub_react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsGithub, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                                    lineNumber: 83,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 23\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pt-20 pb-10 pl-4 text-3xl font-bold text-left\",\n                                children: project.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 23\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex p-4 space-x-4 text-sm font-medium text-left\",\n                                children: project.skills.map((skill)=>{\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-xs uppercase\",\n                                        children: skill\n                                    }, project.id, false, {\n                                        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                                        lineNumber: 90,\n                                        columnNumber: 31\n                                    }, undefined);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 23\n                            }, undefined)\n                        ]\n                    }, project.id, true, {\n                        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 21\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n                lineNumber: 47,\n                columnNumber: 11\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\HP PAVILION\\\\Desktop\\\\portfolio-next\\\\pages\\\\components\\\\sections\\\\Projects.jsx\",\n        lineNumber: 30,\n        columnNumber: 7\n    }, undefined);\n};\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL3NlY3Rpb25zL1Byb2plY3RzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXVEO0FBQ2Y7QUFDRjtBQUd0QyxNQUFNRywwQkFBd0I7SUFDMUJDLFNBQVE7UUFDTkMsU0FBUTtRQUNSQyxHQUFFO0lBQ0o7SUFDQUMsU0FBUyxDQUFDQyxLQUFRO1lBQ2hCSCxTQUFRO1lBQ1JDLEdBQUU7WUFDRkcsWUFBVztnQkFBQ0MsT0FBTSxNQUFJRjtnQkFBR0csTUFBTTtnQkFBU0MsV0FBVTtZQUFHO1FBQ3ZEO0FBQ0o7QUFFQSxNQUFNQyxlQUFlO0lBQ25CQyxhQUFZO1FBQ1ZSLEdBQUU7SUFDSjtJQUNBUyxhQUFZO1FBQ1ZULEdBQUU7UUFDRkcsWUFBVztZQUFDRSxNQUFLO1lBQVNDLFdBQVU7UUFBRztJQUN6QztBQUNGO0FBRUEsTUFBTUksV0FBVztJQUNmLHFCQUNJLDhEQUFDQztRQUFJVCxJQUFHO1FBQVlVLFdBQVU7OzBCQUMxQiw4REFBQ2hCLGlEQUFNQSxDQUFDZSxHQUFHO2dCQUNURSxVQUFVTjtnQkFDVlQsU0FBUTtnQkFDUmdCLGFBQVk7Z0JBQ1pDLFVBQVU7b0JBQUNDLE1BQUs7Z0JBQUk7Z0JBQ3BCSixXQUFVOzBCQUNYOzs7Ozs7MEJBRUQsOERBQUNoQixpREFBTUEsQ0FBQ2UsR0FBRztnQkFDVEUsVUFBVU47Z0JBQ1ZULFNBQVE7Z0JBQ1JnQixhQUFZO2dCQUNaQyxVQUFVO29CQUFDQyxNQUFLO2dCQUFJO2dCQUNwQkosV0FBVTswQkFDWDs7Ozs7OzBCQUVELDhEQUFDRDtnQkFBSUMsV0FBVTswQkFFVGxCLDBEQUFPQSxDQUFDdUIsR0FBRyxDQUFDLENBQUNDO29CQUNYLHFCQUNFLDhEQUFDdEIsaURBQU1BLENBQUNlLEdBQUc7d0JBQ1RFLFVBQVVoQjt3QkFDVkMsU0FBUTt3QkFDUmdCLGFBQVk7d0JBQ1pDLFVBQVU7NEJBQUVDLE1BQUs7d0JBQUs7d0JBQ3RCRyxRQUFRRCxRQUFRaEIsRUFBRTt3QkFDbEJrQixZQUFZOzRCQUFDQyxPQUFNO3dCQUFJO3dCQUN2QlQsV0FDRSxHQUFpQixPQUFkTSxRQUFRSSxLQUFLLEVBQUM7OzBDQW1CbkIsOERBQUNDO2dDQUNDQyxNQUFNTixRQUFRTyxHQUFHO2dDQUNqQkMsUUFBTztnQ0FDUGQsV0FBVTswQ0FFViw0RUFBQ2pCLG9GQUFRQTs7Ozs7Ozs7OzswQ0FFWCw4REFBQ2dCO2dDQUFJQyxXQUFVOzBDQUFpRE0sUUFBUVMsSUFBSTs7Ozs7OzBDQUM1RSw4REFBQ2hCO2dDQUFJQyxXQUFVOzBDQUVYTSxRQUFRVSxNQUFNLENBQUNYLEdBQUcsQ0FBQyxDQUFDWTtvQ0FDbEIscUJBQ0UsOERBQUNsQjt3Q0FBSUMsV0FBVTtrREFBc0NpQjt1Q0FBYlgsUUFBUWhCLEVBQUU7Ozs7O2dDQUV0RDs7Ozs7Ozt1QkFoQkdnQixRQUFRaEIsRUFBRTs7Ozs7Z0JBcUJ2Qjs7Ozs7Ozs7Ozs7O0FBS2Q7S0ExRUlRO0FBNEVKLCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvc2VjdGlvbnMvUHJvamVjdHMuanN4PzkzNDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvZGF0YS9Qcm9qZWN0c1wiXHJcbmltcG9ydCB7IEJzR2l0aHVifSBmcm9tICdyZWFjdC1pY29ucy9icydcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxyXG5cclxuXHJcbmNvbnN0IGZhZGVJbkFuaW1hdGlvblZhcmlhbnRzPXtcclxuICAgIGluaXRpYWw6e1xyXG4gICAgICBvcGFjaXR5OjAsXHJcbiAgICAgIHk6MTAwXHJcbiAgICB9LFxyXG4gICAgYW5pbWF0ZTogKGlkKSA9PiAoe1xyXG4gICAgICBvcGFjaXR5OjEsXHJcbiAgICAgIHk6MCxcclxuICAgICAgdHJhbnNpdGlvbjp7ZGVsYXk6MC4xKmlkLHR5cGU6ICdzcHJpbmcnLHN0aWZmbmVzczoxNTB9XHJcbiAgICB9KVxyXG59IFxyXG5cclxuY29uc3QgdGV4dFZhcmlhbnRzID0ge1xyXG4gIHRleHRJbml0aWFsOntcclxuICAgIHk6MTAwXHJcbiAgfSxcclxuICB0ZXh0QW5pbWF0ZTp7XHJcbiAgICB5OjAsXHJcbiAgICB0cmFuc2l0aW9uOnt0eXBlOidzcHJpbmcnLHN0aWZmbmVzczoyMDB9LFxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgUHJvamVjdHMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPGRpdiBpZD1cInByb2plY3RzXCIgIGNsYXNzTmFtZT1cInB0LTEwIHBiLTIwIG10LTI2XCI+XHJcbiAgICAgICAgICA8bW90aW9uLmRpdlxyXG4gICAgICAgICAgICB2YXJpYW50cz17dGV4dFZhcmlhbnRzfSBcclxuICAgICAgICAgICAgaW5pdGlhbD1cInRleHRJbml0aWFsXCJcclxuICAgICAgICAgICAgd2hpbGVJblZpZXc9XCJ0ZXh0QW5pbWF0ZVwiXHJcbiAgICAgICAgICAgIHZpZXdwb3J0PXt7b25jZTp0cnVlfX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIG0tYXV0byB0ZXh0LXNtIGZvbnQtbm9ybWFsIHRyYWNraW5nLXdpZGVzdCBzbTM6dy00LzUgc20xOnctZnVsbCBzbTE6dGV4dC1jZW50ZXIgc20zOnRleHQtbGVmdCB0ZXh0LXN0b25lLTQwMCBzbTE6bXQtOFwiXHJcbiAgICAgICAgICA+IEZFQVRVUkVEIFBST0pFQ1RTIC1cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICAgIDxtb3Rpb24uZGl2IFxyXG4gICAgICAgICAgICB2YXJpYW50cz17dGV4dFZhcmlhbnRzfVxyXG4gICAgICAgICAgICBpbml0aWFsPVwidGV4dEluaXRpYWxcIlxyXG4gICAgICAgICAgICB3aGlsZUluVmlldz1cInRleHRBbmltYXRlXCJcclxuICAgICAgICAgICAgdmlld3BvcnQ9e3tvbmNlOnRydWV9fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHQtNCBtLWF1dG8gdGV4dC00eGwgZm9udC1ib2xkIHRleHQtd2hpdGUgc20xOnRleHQtY2VudGVyIHNtMTp3LWZ1bGwgc20zOnctNC81IHNtMzp0ZXh0LWxlZnQgc20zOmZsZXggc20xOnRleHQtMnhsIHNtMzp0ZXh0LTJ4bCBtZDp0ZXh0LTN4bCBsZzp0ZXh0LTR4bFwiXHJcbiAgICAgICAgICA+IFN0dWZmIEkmYXBvczt2ZSBXb3JrZWQgb24g8J+Su1xyXG4gICAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdhcC00IG0tYXV0byBtdC0xMCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMyBzbTE6dy00LzVcIj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgUHJvamVjdC5tYXAoKHByb2plY3QpPT57XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRzPXtmYWRlSW5BbmltYXRpb25WYXJpYW50c31cclxuICAgICAgICAgICAgICAgICAgICAgIGluaXRpYWw9XCJpbml0aWFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PVwiYW5pbWF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydD17eyBvbmNlOnRydWUgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbT17cHJvamVjdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3tzY2FsZTowLjk1fX1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke3Byb2plY3QuYmdLZXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNtMTp0ZXh0LTJ4bFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZDp0ZXh0LTN4bFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGlsZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLTJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlYXNlLWxpbmVhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbi0yMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmctW2xpbmVhci1ncmFkaWVudCh0b190b3AsI2ZmZWNkMiwjZmNiNjlmKV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJsYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLVtsaW5lYXItZ3JhZGllbnQodG9fdG9wLCMwMDAsIzAwMCldXHJcbiAgICAgICAgICAgICAgICAgICAgICBob3Zlcjp0ZXh0LXdoaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICBob3Zlcjpib3JkZXItd2hpdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgbS1hdXRvIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4tdy1mdWxsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbTM6bWluLWgtMjBgXHJcbiAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2plY3QuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3Byb2plY3QudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JpZCBwLTQgbWwtYXV0byB0ZXh0LTJ4bCB0ZXh0LXJpZ2h0IGp1c3RpZnktaXRlbXMtZW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJzR2l0aHViIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+ICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMjAgcGItMTAgcGwtNCB0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1sZWZ0XCI+e3Byb2plY3QubmFtZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBwLTQgc3BhY2UteC00IHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnNraWxscy5tYXAoKHNraWxsKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgdXBwZXJjYXNlXCIga2V5PXtwcm9qZWN0LmlkfT57c2tpbGx9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PiAgXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBQcm9qZWN0cyJdLCJuYW1lcyI6WyJQcm9qZWN0IiwiQnNHaXRodWIiLCJtb3Rpb24iLCJmYWRlSW5BbmltYXRpb25WYXJpYW50cyIsImluaXRpYWwiLCJvcGFjaXR5IiwieSIsImFuaW1hdGUiLCJpZCIsInRyYW5zaXRpb24iLCJkZWxheSIsInR5cGUiLCJzdGlmZm5lc3MiLCJ0ZXh0VmFyaWFudHMiLCJ0ZXh0SW5pdGlhbCIsInRleHRBbmltYXRlIiwiUHJvamVjdHMiLCJkaXYiLCJjbGFzc05hbWUiLCJ2YXJpYW50cyIsIndoaWxlSW5WaWV3Iiwidmlld3BvcnQiLCJvbmNlIiwibWFwIiwicHJvamVjdCIsImN1c3RvbSIsIndoaWxlSG92ZXIiLCJzY2FsZSIsImJnS2V5IiwiYSIsImhyZWYiLCJ1cmwiLCJ0YXJnZXQiLCJuYW1lIiwic2tpbGxzIiwic2tpbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/sections/Projects.jsx\n"));

/***/ })

});