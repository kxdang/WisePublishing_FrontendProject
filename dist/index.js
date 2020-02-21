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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_img_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/img/logo.svg */ \"./src/styles/img/logo.svg\");\n/* harmony import */ var _styles_img_logo_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_img_logo_svg__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconsole.log(\"Hello World\");\r\n\r\nconst API_KEY = \"JQ1LE8WZCWJRAMXL\";\r\nconst STOCK_TICKERS = [\"MSFT\", \"GOOG\"];\r\nconst CRYPTO_TICKERS = [\"BTC\"];\r\n\r\nconst STOCK_TYPE = \"TIME_SERIES_DAILY\";\r\nconst CRYPTO_TYPE = \"DIGITAL_CURRENCY_DAILY\";\r\nconst BASE_URL = \"https://www.alphavantage.co/query?\";\r\n\r\nconst makeRequestURI_STOCKS = (type, tickers) => {\r\n  return tickers.map(ticker => {\r\n    return `${BASE_URL}function=${type}&symbol=${ticker}&apikey=${API_KEY}`;\r\n  }); // ['https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo', https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOOG&apikey=demo]\r\n};\r\n\r\nconst makeRequestURI_CRYPTO = (type, tickers) => {\r\n  return tickers.map(ticker => {\r\n    return `${BASE_URL}function=${type}&symbol=${ticker}&market=USD&apikey=${API_KEY}`;\r\n  }); // ['https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo', https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOOG&apikey=demo]\r\n};\r\n\r\n//2020-02-19\r\nlet currentDate = new Date();\r\nconst yyyy = currentDate.getFullYear();\r\nlet dd = currentDate.getDate();\r\nlet mm = currentDate.getMonth() + 1;\r\n\r\nif (dd < 10) {\r\n  dd = \"0\" + dd;\r\n}\r\n\r\nif (mm < 10) {\r\n  mm = \"0\" + mm;\r\n}\r\n\r\nlet today = `${yyyy}-${mm}-${dd}`;\r\nlet yesterday = `${yyyy}-${mm}-${dd - 1}`;\r\nconsole.log(today);\r\nconsole.log(yesterday);\r\n\r\nconst requestData = () => {\r\n  const stockRequestURLs = makeRequestURI_STOCKS(STOCK_TYPE, STOCK_TICKERS); //['https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo', https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOOG&apikey=demo]\r\n  const cryptoRequestURLs = makeRequestURI_CRYPTO(CRYPTO_TYPE, CRYPTO_TICKERS); //[https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=JQ1LE8WZCWJRAMXL]\r\n\r\n  const requests = [];\r\n\r\n  stockRequestURLs.forEach(url => {\r\n    requests.push(\r\n      fetch(url)\r\n        .then(res => res.json())\r\n        .then(data => {\r\n          if (!data[\"Time Series (Daily)\"]) {\r\n            console.error(\"Limit hit\");\r\n            return Promise.reject(\"Error Limit Hit\");\r\n          }\r\n          // console.log(\"Stonks\", data);\r\n          // console.log(\"price\", data[\"Time Series (Daily)\"][today][\"1. open\"]);\r\n\r\n          const stockInfo = {};\r\n          stockInfo.ticker = data[\"Meta Data\"][\"2. Symbol\"];\r\n          stockInfo.currentPrice =\r\n            data[\"Time Series (Daily)\"][today][\"1. open\"];\r\n          stockInfo.yesterdayPrice =\r\n            data[\"Time Series (Daily)\"][yesterday][\"1. open\"];\r\n          stockInfo.priceDifference =\r\n            stockInfo.currentPrice - stockInfo.yesterdayPrice;\r\n\r\n          stockInfo.pricePercentageChange =\r\n            (stockInfo.priceDifference / stockInfo.yesterdayPrice) * 100;\r\n\r\n          return Promise.resolve(stockInfo);\r\n        })\r\n    );\r\n  });\r\n\r\n  cryptoRequestURLs.forEach(url => {\r\n    requests.push(\r\n      fetch(url)\r\n        .then(res => res.json())\r\n        .then(data => {\r\n          if (!data[\"Time Series (Digital Currency Daily)\"]) {\r\n            console.error(\"Limit hit for Crypto\");\r\n            return Promise.reject(\"Error Limit Hit Crypto\");\r\n          }\r\n\r\n          const cryptoInfo = {};\r\n          console.log(\"Crypto:\", data);\r\n\r\n          // prettier-ignore\r\n          cryptoInfo.ticker = data[\"Meta Data\"][\"2. Digital Currency Code\"];\r\n          cryptoInfo.currentPrice =\r\n            data[\"Time Series (Digital Currency Daily)\"][today][\r\n              \"1a. open (USD)\"\r\n            ];\r\n          cryptoInfo.yesterdayPrice =\r\n            data[\"Time Series (Digital Currency Daily)\"][yesterday][\r\n              \"1a. open (USD)\"\r\n            ];\r\n\r\n          cryptoInfo.priceDifference =\r\n            cryptoInfo.currentPrice - cryptoInfo.yesterdayPrice;\r\n\r\n          cryptoInfo.pricePercentageChange =\r\n            (cryptoInfo.priceDifference / cryptoInfo.yesterdayPrice) * 100;\r\n\r\n          console.log(\"Crypto:\", cryptoInfo.pricePercentageChange);\r\n          return Promise.resolve(cryptoInfo);\r\n        })\r\n    );\r\n  });\r\n\r\n  return Promise.all(requests);\r\n};\r\n\r\nconst main = async () => {\r\n  const data = await requestData(); //RETURNS array of PROMISE [promise, promise, promise] ==> [responses,responses,responses]\r\n  console.log(data);\r\n  const container = document.querySelector(\".tickers\");\r\n\r\n  const fragment = document.createDocumentFragment();\r\n  //reducing reflow = expensive (need to optimize) with fragments\r\n\r\n  //Be cautious of reflow DOM with forEach using fragments\r\n\r\n  data.forEach(info => {\r\n    const ticker = document.createElement(\"div\");\r\n    ticker.setAttribute(\"class\", \"ticker\");\r\n\r\n    const name = document.createElement(\"h1\");\r\n    name.setAttribute(\"class\", \"ticker__name\");\r\n    name.textContent = info.ticker;\r\n\r\n    const price = document.createElement(\"p\");\r\n    price.setAttribute(\"class\", \"ticker__price\");\r\n    price.textContent = `$${parseFloat(info.currentPrice).toFixed(2)} USD`;\r\n\r\n    // prettier-ignore\r\n    const percentDiff = document.createElement(\"p\");\r\n    percentDiff.setAttribute(\"class\", \"ticket__percent\");\r\n    percentDiff.textContent = `(${parseFloat(\r\n      info.pricePercentageChange\r\n    ).toFixed(0)}%) ${info.priceDifference > 0 ? \"↑\" : \"↓\"}`;\r\n\r\n    ticker.append(name, price, percentDiff);\r\n    fragment.append(ticker);\r\n  });\r\n\r\n  container.append(fragment);\r\n};\r\n\r\nmain();\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles/img/logo.svg":
/*!*********************************!*\
  !*** ./src/styles/img/logo.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"img/logo.svg\";\n\n//# sourceURL=webpack:///./src/styles/img/logo.svg?");

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