/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Common/Board.js":
/*!************************************!*\
  !*** ./components/Common/Board.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_davidcarrillo_Desktop_powerstone_powerstone_repo_prod_hoa_website_demo_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _Users_davidcarrillo_Desktop_powerstone_powerstone_repo_prod_hoa_website_demo_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_davidcarrillo_Desktop_powerstone_powerstone_repo_prod_hoa_website_demo_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_davidcarrillo_Desktop_powerstone_powerstone_repo_prod_hoa_website_demo_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_davidcarrillo_Desktop_powerstone_powerstone_repo_prod_hoa_website_demo_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_davidcarrillo_Desktop_powerstone_powerstone_repo_prod_hoa_website_demo_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_davidcarrillo_Desktop_powerstone_powerstone_repo_prod_hoa_website_demo_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_davidcarrillo_Desktop_powerstone_powerstone_repo_prod_hoa_website_demo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-wow */ \"./node_modules/react-wow/dist/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/davidcarrillo/Desktop/powerstone/powerstone-repo/prod/hoa-website-demo/components/Common/Board.js\";\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_8___default().createElement);\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_Users_davidcarrillo_Desktop_powerstone_powerstone_repo_prod_hoa_website_demo_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_Users_davidcarrillo_Desktop_powerstone_powerstone_repo_prod_hoa_website_demo_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_Users_davidcarrillo_Desktop_powerstone_powerstone_repo_prod_hoa_website_demo_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_9___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ \"vendors-node_modules_react-owl-carousel3_lib_OwlCarousel_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-owl-carousel3 */ \"./node_modules/react-owl-carousel3/lib/OwlCarousel.js\", 23));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! react-owl-carousel3 */ \"./node_modules/react-owl-carousel3/lib/OwlCarousel.js\")];\n    },\n    modules: [\"../components/Common/Board.js -> \" + 'react-owl-carousel3']\n  }\n});\n_c2 = OwlCarousel;\n\n\nvar options = {\n  loop: true,\n  nav: true,\n  dots: false,\n  autoplayHoverPause: true,\n  autoplay: true,\n  margin: 30,\n  navText: [\"<i class='icofont-rounded-left'></i>\", \"<i class='icofont-rounded-right'></i>\"],\n  responsive: {\n    0: {\n      items: 1\n    },\n    576: {\n      items: 2\n    },\n    992: {\n      items: 3\n    }\n  }\n};\n\nvar Board = /*#__PURE__*/function (_Component) {\n  (0,_Users_davidcarrillo_Desktop_powerstone_powerstone_repo_prod_hoa_website_demo_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(Board, _Component);\n\n  var _super = _createSuper(Board);\n\n  function Board() {\n    var _this;\n\n    (0,_Users_davidcarrillo_Desktop_powerstone_powerstone_repo_prod_hoa_website_demo_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Board);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    (0,_Users_davidcarrillo_Desktop_powerstone_powerstone_repo_prod_hoa_website_demo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,_Users_davidcarrillo_Desktop_powerstone_powerstone_repo_prod_hoa_website_demo_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), \"_isMounted\", false);\n\n    (0,_Users_davidcarrillo_Desktop_powerstone_powerstone_repo_prod_hoa_website_demo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,_Users_davidcarrillo_Desktop_powerstone_powerstone_repo_prod_hoa_website_demo_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), \"state\", {\n      display: false\n    });\n\n    return _this;\n  }\n\n  (0,_Users_davidcarrillo_Desktop_powerstone_powerstone_repo_prod_hoa_website_demo_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Board, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this._isMounted = true;\n      this.setState({\n        display: true\n      });\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      this._isMounted = false;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return __jsx(\"section\", {\n        id: \"team\",\n        className: \"team-area ptb-100 bg-image\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 46,\n          columnNumber: 4\n        }\n      }, __jsx(\"div\", {\n        className: \"container\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 5\n        }\n      }, __jsx(react_wow__WEBPACK_IMPORTED_MODULE_11__.default, {\n        animation: \"fadeInUp\",\n        delay: \"0.1s\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 6\n        }\n      }, __jsx(\"div\", {\n        className: \"section-title\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 7\n        }\n      }, __jsx(\"span\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 50,\n          columnNumber: 8\n        }\n      }, \"Meet Your Board\"), __jsx(\"h2\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 8\n        }\n      }, \"Shorecliff Villages \", __jsx(\"b\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 29\n        }\n      }, \"Board of Directors\"))), __jsx(\"div\", {\n        id: \"section-info\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 7\n        }\n      }, __jsx(\"p\", {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 8\n        }\n      }, \"Shorecliff Villages Community Association (SVC), founded in 1982, is the Master Homeowners Association for most of the City of Vista Mariposa and a small portion of the City of Laguna Hills located at Laguna Hills Drive and Moulton Parkway. Shorecliff Villages Community Association\\u2019s mission is to protect, preserve and maintain the Association\\u2019s twenty-one parks and slopes within the City of Aliso Viejo in an attractive and safe manner while striving to improve the recreational experience for AVCA dues paying members. AVCA\\u2019s goal is to bring civic betterments and social improvements to the Association\\u2019s privately-owned parks and provide for the preservation of the architecture and appearance of the residential communities.\"))), this.state.display ? __jsx(OwlCarousel, (0,_Users_davidcarrillo_Desktop_powerstone_powerstone_repo_prod_hoa_website_demo_node_modules_next_node_modules_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({\n        className: \"team-slides owl-carousel owl-theme my-owl\"\n      }, options, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 7\n        }\n      }), __jsx(\"div\", {\n        className: \"team-box\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 8\n        }\n      }, __jsx(\"img\", {\n        src: \"/images/prez-4.jpeg\",\n        alt: \"team-image\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        className: \"box-content\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        className: \"box-inner-content\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 10\n        }\n      }, __jsx(\"h3\", {\n        className: \"title\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }\n      }, \"Jessica Masters\"), __jsx(\"span\", {\n        className: \"post\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 11\n        }\n      }, \"President\")))), __jsx(\"div\", {\n        className: \"team-box\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 8\n        }\n      }, __jsx(\"img\", {\n        src: \"/images/vice-prez2.jpeg\",\n        alt: \"team-image\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        className: \"box-content\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        className: \"box-inner-content\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 10\n        }\n      }, __jsx(\"h3\", {\n        className: \"title\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 11\n        }\n      }, \"Alina Eva\"), __jsx(\"span\", {\n        className: \"post\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }\n      }, \"Vice President\")))), __jsx(\"div\", {\n        className: \"team-box\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 99,\n          columnNumber: 8\n        }\n      }, __jsx(\"img\", {\n        src: \"/images/secretary.jpeg\",\n        alt: \"team-image\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        className: \"box-content\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        className: \"box-inner-content\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 10\n        }\n      }, __jsx(\"h3\", {\n        className: \"title\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }\n      }, \"James Anderson\"), __jsx(\"span\", {\n        className: \"post\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 11\n        }\n      }, \"Treasurer\")))), __jsx(\"div\", {\n        className: \"team-box\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 8\n        }\n      }, __jsx(\"img\", {\n        src: \"/images/treasurer.jpeg\",\n        alt: \"team-image\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 9\n        }\n      }), __jsx(\"div\", {\n        className: \"box-content\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 9\n        }\n      }, __jsx(\"div\", {\n        className: \"box-inner-content\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 10\n        }\n      }, __jsx(\"h3\", {\n        className: \"title\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 11\n        }\n      }, \"Tony Lucy\"), __jsx(\"span\", {\n        className: \"post\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }\n      }, \"Secretary/Asst Teasurer\"))))) : ''));\n    }\n  }]);\n\n  return Board;\n}(react__WEBPACK_IMPORTED_MODULE_8__.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"OwlCarousel$dynamic\");\n$RefreshReg$(_c2, \"OwlCarousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vQm9hcmQuanM/YTYyYiJdLCJuYW1lcyI6WyJPd2xDYXJvdXNlbCIsImR5bmFtaWMiLCJvcHRpb25zIiwibG9vcCIsIm5hdiIsImRvdHMiLCJhdXRvcGxheUhvdmVyUGF1c2UiLCJhdXRvcGxheSIsIm1hcmdpbiIsIm5hdlRleHQiLCJyZXNwb25zaXZlIiwiaXRlbXMiLCJCb2FyZCIsImRpc3BsYXkiLCJfaXNNb3VudGVkIiwic2V0U3RhdGUiLCJzdGF0ZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsV0FBVyxHQUFHQyxtREFBTztBQUFBLFNBQUMsa1BBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FBUSxrRkFBUjtBQUFBO0FBQUEsb0RBQVEscUJBQVI7QUFBQTtBQUFBLEVBQTNCO01BQU1ELFc7QUFDTjtBQUNBO0FBRUEsSUFBTUUsT0FBTyxHQUFHO0FBQ2ZDLE1BQUksRUFBRSxJQURTO0FBRWZDLEtBQUcsRUFBRSxJQUZVO0FBR2ZDLE1BQUksRUFBRSxLQUhTO0FBSWZDLG9CQUFrQixFQUFFLElBSkw7QUFLZkMsVUFBUSxFQUFFLElBTEs7QUFNZkMsUUFBTSxFQUFFLEVBTk87QUFPZkMsU0FBTyxFQUFFLENBQ1Isc0NBRFEsRUFFUix1Q0FGUSxDQVBNO0FBV2ZDLFlBQVUsRUFBRTtBQUNYLE9BQUc7QUFDRkMsV0FBSyxFQUFFO0FBREwsS0FEUTtBQUlYLFNBQUs7QUFDSkEsV0FBSyxFQUFFO0FBREgsS0FKTTtBQU9YLFNBQUs7QUFDSkEsV0FBSyxFQUFFO0FBREg7QUFQTTtBQVhHLENBQWhCOztJQXdCTUMsSzs7Ozs7Ozs7Ozs7Ozs7OzsrWkFDUSxLOzswWkFDTDtBQUNQQyxhQUFPLEVBQUU7QUFERixLOzs7Ozs7O3dDQUdZO0FBQ25CLFdBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxXQUFL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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFLLGlCQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUksaUJBQVMsRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREQsRUFFQztBQUFNLGlCQUFTLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRCxDQURELENBSEQsQ0F6QkQsRUFvQ0M7QUFBSyxpQkFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNDO0FBQUssV0FBRyxFQUFDLHdCQUFUO0FBQWtDLFdBQUcsRUFBQyxZQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREQsRUFHQztBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0M7QUFBSyxpQkFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQztBQUFJLGlCQUFTLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELEVBRUM7QUFBTSxpQkFBUyxFQUFDLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBRkQsQ0FERCxDQUhELENBcENELENBREEsR0FpREEsRUEzRUYsQ0FERCxDQUREO0FBa0ZBOzs7O0VBaEdrQmUsNEM7O0FBbUdwQiwrREFBZUwsS0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ29tbW9uL0JvYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuY29uc3QgT3dsQ2Fyb3VzZWwgPSBkeW5hbWljKGltcG9ydCgncmVhY3Qtb3dsLWNhcm91c2VsMycpKTtcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0V09XIGZyb20gJ3JlYWN0LXdvdyc7XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG5cdGxvb3A6IHRydWUsXHJcblx0bmF2OiB0cnVlLFxyXG5cdGRvdHM6IGZhbHNlLFxyXG5cdGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcclxuXHRhdXRvcGxheTogdHJ1ZSxcclxuXHRtYXJnaW46IDMwLFxyXG5cdG5hdlRleHQ6IFtcclxuXHRcdFwiPGkgY2xhc3M9J2ljb2ZvbnQtcm91bmRlZC1sZWZ0Jz48L2k+XCIsXHJcblx0XHRcIjxpIGNsYXNzPSdpY29mb250LXJvdW5kZWQtcmlnaHQnPjwvaT5cIixcclxuXHRdLFxyXG5cdHJlc3BvbnNpdmU6IHtcclxuXHRcdDA6IHtcclxuXHRcdFx0aXRlbXM6IDEsXHJcblx0XHR9LFxyXG5cdFx0NTc2OiB7XHJcblx0XHRcdGl0ZW1zOiAyLFxyXG5cdFx0fSxcclxuXHRcdDk5Mjoge1xyXG5cdFx0XHRpdGVtczogMyxcclxuXHRcdH0sXHJcblx0fSxcclxufTtcclxuXHJcbmNsYXNzIEJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHRfaXNNb3VudGVkID0gZmFsc2U7XHJcblx0c3RhdGUgPSB7XHJcblx0XHRkaXNwbGF5OiBmYWxzZSxcclxuXHR9O1xyXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xyXG5cdFx0dGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcclxuXHRcdHRoaXMuc2V0U3RhdGUoeyBkaXNwbGF5OiB0cnVlIH0pO1xyXG5cdH1cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PHNlY3Rpb24gaWQ9J3RlYW0nIGNsYXNzTmFtZT0ndGVhbS1hcmVhIHB0Yi0xMDAgYmctaW1hZ2UnPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxyXG5cdFx0XHRcdFx0PFJlYWN0V09XIGFuaW1hdGlvbj0nZmFkZUluVXAnIGRlbGF5PScwLjFzJz5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J3NlY3Rpb24tdGl0bGUnPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPk1lZXQgWW91ciBCb2FyZDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8aDI+XHJcblx0XHRcdFx0XHRcdFx0XHRTaG9yZWNsaWZmIFZpbGxhZ2VzIDxiPkJvYXJkIG9mIERpcmVjdG9yczwvYj5cclxuXHRcdFx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBpZD0nc2VjdGlvbi1pbmZvJz5cclxuXHRcdFx0XHRcdFx0XHQ8cD5cclxuXHRcdFx0XHRcdFx0XHRcdFNob3JlY2xpZmYgVmlsbGFnZXMgQ29tbXVuaXR5IEFzc29jaWF0aW9uIChTVkMpLCBmb3VuZGVkIGluIDE5ODIsIGlzXHJcblx0XHRcdFx0XHRcdFx0XHR0aGUgTWFzdGVyIEhvbWVvd25lcnMgQXNzb2NpYXRpb24gZm9yIG1vc3Qgb2YgdGhlIENpdHkgb2YgVmlzdGFcclxuXHRcdFx0XHRcdFx0XHRcdE1hcmlwb3NhIGFuZCBhIHNtYWxsIHBvcnRpb24gb2YgdGhlIENpdHkgb2YgTGFndW5hIEhpbGxzIGxvY2F0ZWRcclxuXHRcdFx0XHRcdFx0XHRcdGF0IExhZ3VuYSBIaWxscyBEcml2ZSBhbmQgTW91bHRvbiBQYXJrd2F5LiBTaG9yZWNsaWZmIFZpbGxhZ2VzXHJcblx0XHRcdFx0XHRcdFx0XHRDb21tdW5pdHkgQXNzb2NpYXRpb27igJlzIG1pc3Npb24gaXMgdG8gcHJvdGVjdCwgcHJlc2VydmUgYW5kXHJcblx0XHRcdFx0XHRcdFx0XHRtYWludGFpbiB0aGUgQXNzb2NpYXRpb27igJlzIHR3ZW50eS1vbmUgcGFya3MgYW5kIHNsb3BlcyB3aXRoaW5cclxuXHRcdFx0XHRcdFx0XHRcdHRoZSBDaXR5IG9mIEFsaXNvIFZpZWpvIGluIGFuIGF0dHJhY3RpdmUgYW5kIHNhZmUgbWFubmVyIHdoaWxlXHJcblx0XHRcdFx0XHRcdFx0XHRzdHJpdmluZyB0byBpbXByb3ZlIHRoZSByZWNyZWF0aW9uYWwgZXhwZXJpZW5jZSBmb3IgQVZDQSBkdWVzXHJcblx0XHRcdFx0XHRcdFx0XHRwYXlpbmcgbWVtYmVycy4gQVZDQeKAmXMgZ29hbCBpcyB0byBicmluZyBjaXZpYyBiZXR0ZXJtZW50cyBhbmRcclxuXHRcdFx0XHRcdFx0XHRcdHNvY2lhbCBpbXByb3ZlbWVudHMgdG8gdGhlIEFzc29jaWF0aW9u4oCZcyBwcml2YXRlbHktb3duZWQgcGFya3NcclxuXHRcdFx0XHRcdFx0XHRcdGFuZCBwcm92aWRlIGZvciB0aGUgcHJlc2VydmF0aW9uIG9mIHRoZSBhcmNoaXRlY3R1cmUgYW5kXHJcblx0XHRcdFx0XHRcdFx0XHRhcHBlYXJhbmNlIG9mIHRoZSByZXNpZGVudGlhbCBjb21tdW5pdGllcy5cclxuXHRcdFx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9SZWFjdFdPVz5cclxuXHJcblx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5kaXNwbGF5ID8gKFxyXG5cdFx0XHRcdFx0XHQ8T3dsQ2Fyb3VzZWxcclxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J3RlYW0tc2xpZGVzIG93bC1jYXJvdXNlbCBvd2wtdGhlbWUgbXktb3dsJ1xyXG5cdFx0XHRcdFx0XHRcdHsuLi5vcHRpb25zfT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGVhbS1ib3gnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9Jy9pbWFnZXMvcHJlei00LmpwZWcnIGFsdD0ndGVhbS1pbWFnZScgLz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYm94LWNvbnRlbnQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYm94LWlubmVyLWNvbnRlbnQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J3RpdGxlJz5KZXNzaWNhIE1hc3RlcnM8L2gzPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT0ncG9zdCc+UHJlc2lkZW50PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGVhbS1ib3gnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9Jy9pbWFnZXMvdmljZS1wcmV6Mi5qcGVnJyBhbHQ9J3RlYW0taW1hZ2UnIC8+XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2JveC1jb250ZW50Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9J2JveC1pbm5lci1jb250ZW50Jz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPSd0aXRsZSc+QWxpbmEgRXZhPC9oMz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3Bvc3QnPlZpY2UgUHJlc2lkZW50PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0ndGVhbS1ib3gnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGltZyBzcmM9Jy9pbWFnZXMvc2VjcmV0YXJ5LmpwZWcnIGFsdD0ndGVhbS1pbWFnZScgLz5cclxuXHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYm94LWNvbnRlbnQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nYm94LWlubmVyLWNvbnRlbnQnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9J3RpdGxlJz5KYW1lcyBBbmRlcnNvbjwvaDM+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdwb3N0Jz5UcmVhc3VyZXI8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSd0ZWFtLWJveCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aW1nIHNyYz0nL2ltYWdlcy90cmVhc3VyZXIuanBlZycgYWx0PSd0ZWFtLWltYWdlJyAvPlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdib3gtY29udGVudCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdib3gtaW5uZXItY29udGVudCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT0ndGl0bGUnPlRvbnkgTHVjeTwvaDM+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPSdwb3N0Jz5TZWNyZXRhcnkvQXNzdCBUZWFzdXJlcjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9Pd2xDYXJvdXNlbD5cclxuXHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdCcnXHJcblx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L3NlY3Rpb24+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Common/Board.js\n");

/***/ })

});