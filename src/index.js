import "./styles/main.scss";

console.log("Hello World");

const API_KEY = "JQ1LE8WZCWJRAMXL";
const STOCK_TICKERS = ["MSFT", "GOOG"];
const CRYPTO_TICKERS = ["BTC"];

const STOCK_TYPE = "TIME_SERIES_DAILY";
const CRYPTO_TYPE = "DIGITAL_CURRENCY_DAILY";
const BASE_URL = "https://www.alphavantage.co/query?";

const makeRequestURI_STOCKS = (type, tickers) => {
  return tickers.map(ticker => {
    return `${BASE_URL}function=${type}&symbol=${ticker}&apikey=${API_KEY}`;
  });
};

const makeRequestURI_CRYPTO = (type, tickers) => {
  return tickers.map(ticker => {
    return `${BASE_URL}function=${type}&symbol=${ticker}&market=USD&apikey=${API_KEY}`;
  });
};

//EMAIL VALIDATION

const invalidEmail = document.getElementById("invalidEmail");

const inputValidation = e => {
  const input = e.target.value;

  if (input == "") {
    invalidEmail.setAttribute("class", "invalidNone");
    return;
  }

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)) {
    console.log("yay email");
    invalidEmail.setAttribute("class", "invalidNone");
  } else {
    invalidEmail.setAttribute("class", "invalid");
    console.log("Not an email");
  }
};

const emailInputForm = document.getElementById("email");

emailInputForm.addEventListener("blur", inputValidation);

//2020-02-19
let currentDate = new Date();
const yyyy = currentDate.getFullYear();
let dd = currentDate.getDate();
let mm = currentDate.getMonth() + 1;

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

let today = `${yyyy}-${mm}-${dd}`;
let yesterday = `${yyyy}-${mm}-${dd - 1}`;
console.log(today);
console.log(yesterday);

const requestData = () => {
  const stockRequestURLs = makeRequestURI_STOCKS(STOCK_TYPE, STOCK_TICKERS); //['https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo', https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=GOOG&apikey=demo]
  const cryptoRequestURLs = makeRequestURI_CRYPTO(CRYPTO_TYPE, CRYPTO_TICKERS); //[https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=JQ1LE8WZCWJRAMXL]

  const requests = [];

  stockRequestURLs.forEach(url => {
    requests.push(
      fetch(url)
        .then(res => res.json())
        .then(data => {
          if (!data["Time Series (Daily)"]) {
            console.error("Limit hit");
            return Promise.reject("Error Limit Hit");
          }
          // console.log("Stonks", data);
          // console.log("price", data["Time Series (Daily)"][today]["1. open"]);

          const stockInfo = {};
          stockInfo.ticker = data["Meta Data"]["2. Symbol"];
          stockInfo.currentPrice =
            data["Time Series (Daily)"][today]["1. open"];
          stockInfo.yesterdayPrice =
            data["Time Series (Daily)"][yesterday]["1. open"];
          stockInfo.priceDifference =
            stockInfo.currentPrice - stockInfo.yesterdayPrice;

          stockInfo.pricePercentageChange =
            (stockInfo.priceDifference / stockInfo.yesterdayPrice) * 100;

          return Promise.resolve(stockInfo);
        })
    );
  });

  cryptoRequestURLs.forEach(url => {
    requests.push(
      fetch(url)
        .then(res => res.json())
        .then(data => {
          if (!data["Time Series (Digital Currency Daily)"]) {
            console.error("Limit hit for Crypto");
            return Promise.reject("Error Limit Hit Crypto");
          }

          const cryptoInfo = {};
          console.log("Crypto:", data);

          // prettier-ignore
          cryptoInfo.ticker = data["Meta Data"]["2. Digital Currency Code"];
          cryptoInfo.currentPrice =
            data["Time Series (Digital Currency Daily)"][today][
              "1a. open (USD)"
            ];
          cryptoInfo.yesterdayPrice =
            data["Time Series (Digital Currency Daily)"][yesterday][
              "1a. open (USD)"
            ];

          cryptoInfo.priceDifference =
            cryptoInfo.currentPrice - cryptoInfo.yesterdayPrice;

          cryptoInfo.pricePercentageChange =
            (cryptoInfo.priceDifference / cryptoInfo.yesterdayPrice) * 100;

          console.log("Crypto:", cryptoInfo.pricePercentageChange);
          return Promise.resolve(cryptoInfo);
        })
    );
  });

  return Promise.all(requests);
};

const main = async () => {
  const data = await requestData(); //RETURNS array of PROMISE [promise, promise, promise] ==> [responses,responses,responses]
  console.log(data);
  const container = document.querySelector(".tickers");

  const fragment = document.createDocumentFragment();
  //reducing reflow = expensive (need to optimize) with fragments

  //Be cautious of reflow DOM with forEach using fragments

  data.forEach(info => {
    const ticker = document.createElement("div");
    ticker.setAttribute("class", "ticker");

    const name = document.createElement("h1");
    name.setAttribute("class", "ticker__name");
    name.textContent = info.ticker;

    const price = document.createElement("p");
    price.setAttribute("class", "ticker__price");
    price.textContent = `$${parseFloat(info.currentPrice).toFixed(2)} USD`;

    const span = document.createElement("span");

    // prettier-ignore
    const percentDiff = document.createElement("p");

    percentDiff.setAttribute(
      "class",
      `ticket__percent ${info.priceDifference > 0 ? "green" : "red"}`
    );
    percentDiff.textContent = `${parseFloat(info.priceDifference).toFixed(
      2
    )} (${parseFloat(info.pricePercentageChange).toFixed(0)}%) ${
      info.priceDifference > 0 ? "↑" : "↓"
    }`;

    ticker.append(name, price, percentDiff);
    fragment.append(ticker);
  });

  container.append(fragment);
};

main();
