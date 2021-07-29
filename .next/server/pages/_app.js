/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Shared/GoTop.js":
/*!************************************!*\
  !*** ./components/Shared/GoTop.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/davidcarrillojr/Desktop/powerstonepm/hoa-website-nextjs/components/Shared/GoTop.js\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nclass GoTop extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {\n  constructor(props) {\n    super(props);\n\n    _defineProperty(this, \"_isMounted\", false);\n\n    _defineProperty(this, \"onScrollStep\", () => {\n      this._isMounted = true;\n\n      if (window.pageYOffset === 0) {\n        clearInterval(this.state.intervalId);\n      }\n\n      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);\n    });\n\n    _defineProperty(this, \"scrollToTop\", () => {\n      this._isMounted = true;\n      let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);\n      this.setState({\n        intervalId: intervalId\n      });\n    });\n\n    _defineProperty(this, \"renderGoTopIcon\", () => {\n      if (this.state.thePosition) {\n        return __jsx(\"div\", {\n          className: \"go-top\",\n          id: \"mobile-go-top\",\n          onClick: this.scrollToTop,\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 17\n          }\n        }, __jsx(\"i\", {\n          className: \"icofont-swoosh-up\",\n          __self: this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 21\n          }\n        }));\n      }\n    });\n\n    this.state = {\n      intervalId: 0,\n      thePosition: false\n    };\n  }\n\n  componentDidMount() {\n    this._isMounted = true;\n    document.addEventListener(\"scroll\", () => {\n      if (window.scrollY > 170) {\n        this.setState({\n          thePosition: true\n        });\n      } else {\n        this.setState({\n          thePosition: false\n        });\n      }\n    });\n    window.scrollTo(0, 0);\n  }\n\n  componentWillUnmount() {\n    this._isMounted = false;\n  }\n\n  render() {\n    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 13\n      }\n    }, this.renderGoTopIcon());\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GoTop);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3dlcnN0b25lLW5leHRqcy1kZW1vLy4vY29tcG9uZW50cy9TaGFyZWQvR29Ub3AuanM/NTkwZCJdLCJuYW1lcyI6WyJHb1RvcCIsIlJlYWN0IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsIl9pc01vdW50ZWQiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImNsZWFySW50ZXJ2YWwiLCJzdGF0ZSIsImludGVydmFsSWQiLCJzY3JvbGwiLCJzY3JvbGxTdGVwSW5QeCIsInNldEludGVydmFsIiwib25TY3JvbGxTdGVwIiwiZGVsYXlJbk1zIiwic2V0U3RhdGUiLCJ0aGVQb3NpdGlvbiIsInNjcm9sbFRvVG9wIiwiY29tcG9uZW50RGlkTW91bnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxZIiwic2Nyb2xsVG8iLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsInJlbmRlckdvVG9wSWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsTUFBTUEsS0FBTixTQUFvQkMsd0RBQXBCLENBQW9DO0FBRWhDQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNmLFVBQU1BLEtBQU47O0FBRGUsd0NBRE4sS0FDTTs7QUFBQSwwQ0FvQkosTUFBTTtBQUNqQixXQUFLQyxVQUFMLEdBQWtCLElBQWxCOztBQUNBLFVBQUlDLE1BQU0sQ0FBQ0MsV0FBUCxLQUF1QixDQUEzQixFQUE2QjtBQUN6QkMscUJBQWEsQ0FBQyxLQUFLQyxLQUFMLENBQVdDLFVBQVosQ0FBYjtBQUNIOztBQUNESixZQUFNLENBQUNLLE1BQVAsQ0FBYyxDQUFkLEVBQWlCTCxNQUFNLENBQUNDLFdBQVAsR0FBcUIsS0FBS0gsS0FBTCxDQUFXUSxjQUFqRDtBQUNILEtBMUJrQjs7QUFBQSx5Q0E0QkwsTUFBTTtBQUNoQixXQUFLUCxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsVUFBSUssVUFBVSxHQUFHRyxXQUFXLENBQUMsS0FBS0MsWUFBTixFQUFvQixLQUFLVixLQUFMLENBQVdXLFNBQS9CLENBQTVCO0FBQ0EsV0FBS0MsUUFBTCxDQUFjO0FBQUVOLGtCQUFVLEVBQUVBO0FBQWQsT0FBZDtBQUNILEtBaENrQjs7QUFBQSw2Q0FzQ0QsTUFBTTtBQUNwQixVQUFJLEtBQUtELEtBQUwsQ0FBV1EsV0FBZixFQUEyQjtBQUN2QixlQUNJO0FBQUssbUJBQVMsRUFBQyxRQUFmO0FBQXdCLFlBQUUsRUFBQyxlQUEzQjtBQUEyQyxpQkFBTyxFQUFFLEtBQUtDLFdBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSTtBQUFHLG1CQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKLENBREo7QUFLSDtBQUNKLEtBOUNrQjs7QUFFZixTQUFLVCxLQUFMLEdBQWE7QUFDVEMsZ0JBQVUsRUFBRSxDQURIO0FBRVRPLGlCQUFXLEVBQUU7QUFGSixLQUFiO0FBSUg7O0FBRURFLG1CQUFpQixHQUFHO0FBQ2hCLFNBQUtkLFVBQUwsR0FBa0IsSUFBbEI7QUFDQWUsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxNQUFNO0FBQ3RDLFVBQUlmLE1BQU0sQ0FBQ2dCLE9BQVAsR0FBaUIsR0FBckIsRUFBMEI7QUFDdEIsYUFBS04sUUFBTCxDQUFjO0FBQUVDLHFCQUFXLEVBQUU7QUFBZixTQUFkO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsYUFBS0QsUUFBTCxDQUFjO0FBQUVDLHFCQUFXLEVBQUU7QUFBZixTQUFkO0FBQ0g7QUFDSixLQU5EO0FBT0FYLFVBQU0sQ0FBQ2lCLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDSDs7QUFnQkRDLHNCQUFvQixHQUFHO0FBQ25CLFNBQUtuQixVQUFMLEdBQWtCLEtBQWxCO0FBQ0g7O0FBWURvQixRQUFNLEdBQUU7QUFDSixXQUNJLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNLLEtBQUtDLGVBQUwsRUFETCxDQURKO0FBS0g7O0FBeEQrQjs7QUEyRHBDLCtEQUFlekIsS0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2hhcmVkL0dvVG9wLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgR29Ub3AgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgX2lzTW91bnRlZCA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaW50ZXJ2YWxJZDogMCxcclxuICAgICAgICAgICAgdGhlUG9zaXRpb246IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxNzApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aGVQb3NpdGlvbjogdHJ1ZSB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRoZVBvc2l0aW9uOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvblNjcm9sbFN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID09PSAwKXtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRlLmludGVydmFsSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIHdpbmRvdy5wYWdlWU9mZnNldCAtIHRoaXMucHJvcHMuc2Nyb2xsU3RlcEluUHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XHJcbiAgICAgICAgbGV0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLm9uU2Nyb2xsU3RlcCwgdGhpcy5wcm9wcy5kZWxheUluTXMpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnRlcnZhbElkOiBpbnRlcnZhbElkIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckdvVG9wSWNvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50aGVQb3NpdGlvbil7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdvLXRvcFwiIGlkPVwibW9iaWxlLWdvLXRvcFwiIG9uQ2xpY2s9e3RoaXMuc2Nyb2xsVG9Ub3B9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb2ZvbnQtc3dvb3NoLXVwXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyR29Ub3BJY29uKCl9XHJcbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHb1RvcDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Shared/GoTop.js\n");

/***/ }),

/***/ "./components/Shared/Loader.js":
/*!*************************************!*\
  !*** ./components/Shared/Loader.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/davidcarrillojr/Desktop/powerstonepm/hoa-website-nextjs/components/Shared/Loader.js\";\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\n\nclass Loader extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  render() {\n    return __jsx(\"div\", {\n      className: `preloader ${this.props.loading ? '' : 'preloader-deactivate'}`,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 6,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"loader\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 17\n      }\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loader);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3dlcnN0b25lLW5leHRqcy1kZW1vLy4vY29tcG9uZW50cy9TaGFyZWQvTG9hZGVyLmpzPzA3NTMiXSwibmFtZXMiOlsiTG9hZGVyIiwiQ29tcG9uZW50IiwicmVuZGVyIiwicHJvcHMiLCJsb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBLE1BQU1BLE1BQU4sU0FBcUJDLDRDQUFyQixDQUErQjtBQUMzQkMsUUFBTSxHQUFHO0FBQ0wsV0FDSTtBQUFLLGVBQVMsRUFBRyxhQUFZLEtBQUtDLEtBQUwsQ0FBV0MsT0FBWCxHQUFxQixFQUFyQixHQUEwQixzQkFBdUIsRUFBOUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLENBREo7QUFLSDs7QUFQMEI7O0FBVS9CLCtEQUFlSixNQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaGFyZWQvTG9hZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIExvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BwcmVsb2FkZXIgJHt0aGlzLnByb3BzLmxvYWRpbmcgPyAnJyA6ICdwcmVsb2FkZXItZGVhY3RpdmF0ZSd9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Shared/Loader.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/css/bootstrap.min.css */ \"./public/css/bootstrap.min.css\");\n/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_css_animate_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/animate.min.css */ \"./public/css/animate.min.css\");\n/* harmony import */ var _public_css_animate_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_css_animate_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_css_icofont_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/icofont.min.css */ \"./public/css/icofont.min.css\");\n/* harmony import */ var _public_css_icofont_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_css_icofont_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ \"./node_modules/react-accessible-accordion/dist/fancy-example.css\");\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/react-modal-video/css/modal-video.min.css */ \"./node_modules/react-modal-video/css/modal-video.min.css\");\n/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_react_sweet_progress_lib_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node_modules/react-sweet-progress/lib/style.css */ \"./node_modules/react-sweet-progress/lib/style.css\");\n/* harmony import */ var _node_modules_react_sweet_progress_lib_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_sweet_progress_lib_style_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-image-lightbox/style.css */ \"./node_modules/react-image-lightbox/style.css\");\n/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/css/style.css */ \"./public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/css/responsive.css */ \"./public/css/responsive.css\");\n/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_css_responsive_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _components_Shared_Loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Shared/Loader */ \"./components/Shared/Loader.js\");\n/* harmony import */ var _components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Shared/GoTop */ \"./components/Shared/GoTop.js\");\nvar _jsxFileName = \"/Users/davidcarrillojr/Desktop/powerstonepm/hoa-website-nextjs/pages/_app.js\";\n\nvar __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n // For RTL Version Style\n// import '../public/css/rtl.css';\n\n\n\n\n\nclass MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_10___default()) {\n  constructor(...args) {\n    super(...args);\n\n    _defineProperty(this, \"state\", {\n      loading: true\n    });\n  }\n\n  componentDidMount() {\n    this.timerHandle = setTimeout(() => this.setState({\n      loading: false\n    }), 2000);\n  }\n\n  componentWillUnmount() {\n    if (this.timerHandle) {\n      clearTimeout(this.timerHandle);\n      this.timerHandle = 0;\n    }\n  }\n\n  render() {\n    const {\n      Component,\n      pageProps\n    } = this.props;\n    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 4\n      }\n    }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_11___default()), {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 5\n      }\n    }, __jsx(\"meta\", {\n      charSet: \"utf-8\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 6\n      }\n    }), __jsx(\"meta\", {\n      name: \"viewport\",\n      content: \"width=device-width, initial-scale=1\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 6\n      }\n    }), __jsx(\"title\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 6\n      }\n    }, \"Powerstone Property Management Services\")), __jsx(Component, _extends({}, pageProps, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 5\n      }\n    })), __jsx(_components_Shared_Loader__WEBPACK_IMPORTED_MODULE_12__.default, {\n      loading: this.state.loading,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 5\n      }\n    }), __jsx(_components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_13__.default, {\n      scrollStepInPx: \"150\",\n      delayInMs: \"15.50\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 5\n      }\n    }));\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3dlcnN0b25lLW5leHRqcy1kZW1vLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIk15QXBwIiwiQXBwIiwibG9hZGluZyIsImNvbXBvbmVudERpZE1vdW50IiwidGltZXJIYW5kbGUiLCJzZXRUaW1lb3V0Iiwic2V0U3RhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNsZWFyVGltZW91dCIsInJlbmRlciIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInByb3BzIiwic3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxNQUFNQSxLQUFOLFNBQW9CQyxrREFBcEIsQ0FBd0I7QUFBQTtBQUFBOztBQUFBLG1DQUU5QjtBQUNQQyxhQUFPLEVBQUU7QUFERixLQUY4QjtBQUFBOztBQUt0Q0MsbUJBQWlCLEdBQUc7QUFDbkIsU0FBS0MsV0FBTCxHQUFtQkMsVUFBVSxDQUM1QixNQUFNLEtBQUtDLFFBQUwsQ0FBYztBQUFFSixhQUFPLEVBQUU7QUFBWCxLQUFkLENBRHNCLEVBRTVCLElBRjRCLENBQTdCO0FBSUE7O0FBQ0RLLHNCQUFvQixHQUFHO0FBQ3RCLFFBQUksS0FBS0gsV0FBVCxFQUFzQjtBQUNyQkksa0JBQVksQ0FBQyxLQUFLSixXQUFOLENBQVo7QUFDQSxXQUFLQSxXQUFMLEdBQW1CLENBQW5CO0FBQ0E7QUFDRDs7QUFFREssUUFBTSxHQUFHO0FBQ1IsVUFBTTtBQUFFQyxlQUFGO0FBQWFDO0FBQWIsUUFBMkIsS0FBS0MsS0FBdEM7QUFFQSxXQUNDLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNDO0FBQU0sYUFBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURELEVBRUM7QUFBTSxVQUFJLEVBQUMsVUFBWDtBQUFzQixhQUFPLEVBQUMscUNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRCxFQUdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaURBSEQsQ0FERCxFQU9DLE1BQUMsU0FBRCxlQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FQRCxFQVVDLE1BQUMsK0RBQUQ7QUFBUSxhQUFPLEVBQUUsS0FBS0UsS0FBTCxDQUFXWCxPQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVkQsRUFhQyxNQUFDLDhEQUFEO0FBQU8sb0JBQWMsRUFBQyxLQUF0QjtBQUE0QixlQUFTLEVBQUMsT0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWJELENBREQ7QUFpQkE7O0FBdENxQyIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3B1YmxpYy9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uL3B1YmxpYy9jc3MvYW5pbWF0ZS5taW4uY3NzJztcclxuaW1wb3J0ICcuLi9wdWJsaWMvY3NzL2ljb2ZvbnQubWluLmNzcyc7XHJcbmltcG9ydCAncmVhY3QtYWNjZXNzaWJsZS1hY2NvcmRpb24vZGlzdC9mYW5jeS1leGFtcGxlLmNzcyc7XHJcbmltcG9ydCAnLi4vbm9kZV9tb2R1bGVzL3JlYWN0LW1vZGFsLXZpZGVvL2Nzcy9tb2RhbC12aWRlby5taW4uY3NzJztcclxuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3dlZXQtcHJvZ3Jlc3MvbGliL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAncmVhY3QtaW1hZ2UtbGlnaHRib3gvc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuLi9wdWJsaWMvY3NzL3N0eWxlLmNzcyc7XHJcbmltcG9ydCAnLi4vcHVibGljL2Nzcy9yZXNwb25zaXZlLmNzcyc7XHJcblxyXG4vLyBGb3IgUlRMIFZlcnNpb24gU3R5bGVcclxuLy8gaW1wb3J0ICcuLi9wdWJsaWMvY3NzL3J0bC5jc3MnO1xyXG5cclxuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaGFyZWQvTG9hZGVyJztcclxuaW1wb3J0IEdvVG9wIGZyb20gJy4uL2NvbXBvbmVudHMvU2hhcmVkL0dvVG9wJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15QXBwIGV4dGVuZHMgQXBwIHtcclxuXHQvLyBQcmVsb2FkZXJcclxuXHRzdGF0ZSA9IHtcclxuXHRcdGxvYWRpbmc6IHRydWUsXHJcblx0fTtcclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHRoaXMudGltZXJIYW5kbGUgPSBzZXRUaW1lb3V0KFxyXG5cdFx0XHQoKSA9PiB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSksXHJcblx0XHRcdDIwMDAsXHJcblx0XHQpO1xyXG5cdH1cclxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuXHRcdGlmICh0aGlzLnRpbWVySGFuZGxlKSB7XHJcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVySGFuZGxlKTtcclxuXHRcdFx0dGhpcy50aW1lckhhbmRsZSA9IDA7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cclxuXHRcdFx0XHQ8SGVhZD5cclxuXHRcdFx0XHRcdDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxyXG5cdFx0XHRcdFx0PG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xJyAvPlxyXG5cdFx0XHRcdFx0PHRpdGxlPlBvd2Vyc3RvbmUgUHJvcGVydHkgTWFuYWdlbWVudCBTZXJ2aWNlczwvdGl0bGU+XHJcblx0XHRcdFx0PC9IZWFkPlxyXG5cclxuXHRcdFx0XHQ8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcblxyXG5cdFx0XHRcdHsvKiBQcmVsb2FkZXIgKi99XHJcblx0XHRcdFx0PExvYWRlciBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IC8+XHJcblxyXG5cdFx0XHRcdHsvKiBHbyBUb3AgQnV0dG9uICovfVxyXG5cdFx0XHRcdDxHb1RvcCBzY3JvbGxTdGVwSW5QeD0nMTUwJyBkZWxheUluTXM9JzE1LjUwJyAvPlxyXG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./public/css/animate.min.css":
/*!************************************!*\
  !*** ./public/css/animate.min.css ***!
  \************************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/bootstrap.min.css":
/*!**************************************!*\
  !*** ./public/css/bootstrap.min.css ***!
  \**************************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/icofont.min.css":
/*!************************************!*\
  !*** ./public/css/icofont.min.css ***!
  \************************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/responsive.css":
/*!***********************************!*\
  !*** ./public/css/responsive.css ***!
  \***********************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ (function() {



/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_app_js-node_modules_react-accessible-accordion_dist_fancy-example_c-80b29f"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();