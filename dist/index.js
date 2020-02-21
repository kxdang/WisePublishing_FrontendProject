/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/emailValidation.js":
/*!********************************!*\
  !*** ./src/emailValidation.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const invalidEmail = document.getElementById(\"invalidEmail\");\r\n\r\nconst inputValidation = e => {\r\n  const input = e.target.value;\r\n\r\n  if (input == \"\") {\r\n    invalidEmail.setAttribute(\"class\", \"invalidNone\");\r\n    return;\r\n  }\r\n\r\n  if (/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/.test(input)) {\r\n    console.log(\"yay email\");\r\n    invalidEmail.setAttribute(\"class\", \"invalidNone\");\r\n  } else {\r\n    invalidEmail.setAttribute(\"class\", \"invalid\");\r\n    console.log(\"Not an email\");\r\n  }\r\n};\r\n\r\nconst emailInputForm = document.getElementById(\"email\");\r\nemailInputForm.addEventListener(\"blur\", inputValidation);\r\n\r\nconsole.log(\"from Emailvalidation JS\");\r\n\n\n//# sourceURL=webpack:///./src/emailValidation.js?");

/***/ }),

/***/ "./src/formSubmission.js":
/*!*******************************!*\
  !*** ./src/formSubmission.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const form = document.getElementById(\"submit\");\r\n\r\n// const email = document.getElementById;\r\n\r\nconst formSubmit = e => {\r\n  e.preventDefault();\r\n  const firstName = document.getElementById(\"firstName\").value;\r\n  const lastName = document.getElementById(\"lastName\").value;\r\n  const email = document.getElementById(\"email\").value;\r\n  const homeOwner = document.getElementById(\"homeOwnerYes\").checked;\r\n  const buyingWhen = document.getElementById(\"buyingWhen\").value;\r\n\r\n  console.log(buyingWhen);\r\n\r\n  fetch(\"https://jsonplaceholder.typicode.com/posts\", {\r\n    method: \"POST\",\r\n    body: JSON.stringify({\r\n      //   title: \"foo\",\r\n      //   body: \"bar\",\r\n      //   userId: 1\r\n      firstName,\r\n      lastName,\r\n      email,\r\n      homeOwner\r\n    }),\r\n    headers: {\r\n      \"Content-type\": \"application/json; charset=UTF-8\"\r\n    }\r\n  })\r\n    .then(response => response.json())\r\n    .then(json => console.log(json));\r\n};\r\n\r\nform.addEventListener(\"click\", formSubmit);\r\n\n\n//# sourceURL=webpack:///./src/formSubmission.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emailValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emailValidation */ \"./src/emailValidation.js\");\n/* harmony import */ var _emailValidation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emailValidation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _formSubmission__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formSubmission */ \"./src/formSubmission.js\");\n/* harmony import */ var _formSubmission__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_formSubmission__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\nconst API_KEY = \"JQ1LE8WZCWJRAMXL\";\r\nconst STOCK_TICKERS = [\"MSFT\", \"GOOG\"];\r\nconst CRYPTO_TICKERS = [\"BTC\"];\r\n\r\nconst STOCK_TYPE = \"TIME_SERIES_DAILY\";\r\nconst CRYPTO_TYPE = \"DIGITAL_CURRENCY_DAILY\";\r\nconst BASE_URL = \"https://www.alphavantage.co/query?\";\r\n\r\nconst makeRequestURI_STOCKS = (type, tickers) => {\r\n  return tickers.map(ticker => {\r\n    return `${BASE_URL}function=${type}&symbol=${ticker}&apikey=${API_KEY}`;\r\n  });\r\n};\r\n\r\nconst makeRequestURI_CRYPTO = (type, tickers) => {\r\n  return tickers.map(ticker => {\r\n    return `${BASE_URL}function=${type}&symbol=${ticker}&market=USD&apikey=${API_KEY}`;\r\n  });\r\n};\r\n\r\n//GENERATE DATES\r\nlet currentDate = new Date();\r\nconst yyyy = currentDate.getFullYear();\r\nlet dd = currentDate.getDate();\r\nlet mm = currentDate.getMonth() + 1;\r\n\r\nif (dd < 10) {\r\n  dd = \"0\" + dd;\r\n}\r\n\r\nif (mm < 10) {\r\n  mm = \"0\" + mm;\r\n}\r\n\r\nlet today = `${yyyy}-${mm}-${dd}`;\r\nlet yesterday = `${yyyy}-${mm}-${dd - 1}`;\r\n\r\nconst requestData = () => {\r\n  const stockRequestURLs = makeRequestURI_STOCKS(STOCK_TYPE, STOCK_TICKERS);\r\n  const cryptoRequestURLs = makeRequestURI_CRYPTO(CRYPTO_TYPE, CRYPTO_TICKERS);\r\n\r\n  const requests = [];\r\n\r\n  stockRequestURLs.forEach(url => {\r\n    requests.push(\r\n      fetch(url)\r\n        .then(res => res.json())\r\n        .then(data => {\r\n          if (!data[\"Time Series (Daily)\"]) {\r\n            console.error(\"Limit hit\");\r\n            return Promise.reject(\"Error Limit Hit\");\r\n          }\r\n\r\n          const stockInfo = {};\r\n          stockInfo.ticker = data[\"Meta Data\"][\"2. Symbol\"];\r\n          stockInfo.currentPrice =\r\n            data[\"Time Series (Daily)\"][today][\"1. open\"];\r\n          stockInfo.yesterdayPrice =\r\n            data[\"Time Series (Daily)\"][yesterday][\"1. open\"];\r\n          stockInfo.priceDifference =\r\n            stockInfo.currentPrice - stockInfo.yesterdayPrice;\r\n\r\n          stockInfo.pricePercentageChange = (stockInfo.priceDifference / stockInfo.yesterdayPrice) * 100;\r\n\r\n          return Promise.resolve(stockInfo);\r\n        })\r\n    );\r\n  });\r\n\r\n  cryptoRequestURLs.forEach(url => {\r\n    requests.push(\r\n      fetch(url)\r\n        .then(res => res.json())\r\n        .then(data => {\r\n          if (!data[\"Time Series (Digital Currency Daily)\"]) {\r\n            console.error(\"Limit hit for Crypto\");\r\n            return Promise.reject(\"Error Limit Hit Crypto\");\r\n          }\r\n\r\n          const cryptoInfo = {};\r\n\r\n\r\n          // prettier-ignore\r\n          cryptoInfo.ticker = data[\"Meta Data\"][\"2. Digital Currency Code\"];\r\n          cryptoInfo.currentPrice =\r\n            data[\"Time Series (Digital Currency Daily)\"][today][\r\n            \"1a. open (USD)\"\r\n            ];\r\n          cryptoInfo.yesterdayPrice =\r\n            data[\"Time Series (Digital Currency Daily)\"][yesterday][\"1a. open (USD)\"];\r\n\r\n          cryptoInfo.priceDifference = cryptoInfo.currentPrice - cryptoInfo.yesterdayPrice;\r\n\r\n          cryptoInfo.pricePercentageChange = (cryptoInfo.priceDifference / cryptoInfo.yesterdayPrice) * 100;\r\n\r\n\r\n          return Promise.resolve(cryptoInfo);\r\n        })\r\n    );\r\n  });\r\n\r\n  return Promise.all(requests);\r\n};\r\n\r\nconst main = async () => {\r\n  const data = await requestData();\r\n  //RETURNS array of PROMISE [promise, promise, promise] ==> [responses,responses,responses]\r\n  const container = document.querySelector(\".tickers\");\r\n\r\n\r\n  const fragment = document.createDocumentFragment();\r\n  //reducing reflow = expensive (need to optimize) with fragments\r\n\r\n  data.forEach(info => {\r\n    const ticker = document.createElement(\"div\");\r\n    ticker.setAttribute(\"class\", \"ticker\");\r\n\r\n    const name = document.createElement(\"h1\");\r\n    name.setAttribute(\"class\", \"ticker__name\");\r\n    name.textContent = info.ticker;\r\n\r\n    const price = document.createElement(\"p\");\r\n    price.setAttribute(\"class\", \"ticker__price\");\r\n    price.textContent = `$${parseFloat(info.currentPrice).toFixed(2)} USD`;\r\n\r\n    const span = document.createElement(\"span\");\r\n\r\n    const percentDiff = document.createElement(\"p\");\r\n\r\n    percentDiff.setAttribute(\r\n      \"class\",\r\n      `ticket__percent ${info.priceDifference > 0 ? \"green\" : \"red\"}`\r\n    );\r\n    percentDiff.textContent = `${parseFloat(info.priceDifference).toFixed(\r\n      2\r\n    )} (${parseFloat(info.pricePercentageChange).toFixed(0)}%) ${\r\n      info.priceDifference > 0 ? \"↑\" : \"↓\"\r\n      }`;\r\n\r\n    ticker.append(name, price, percentDiff);\r\n    fragment.append(ticker);\r\n  });\r\n\r\n  container.append(fragment);\r\n};\r\n\r\nmain();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ })

/******/ });