const getPuzzle = wordCount =>
  new Promise((resolve, reject) => {
    // MAKING AN HTTP REQUEST
    const request = new XMLHttpRequest();
    // 1. xhr 객체를 만든 후 open 메소드로 요청을 열고 주소와 HTTP 메소드를 설정한 뒤, send 메소드로 요청을 서버로 보낸다.
    request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
    // this makes event fires when we have an information from server
    // 2. send 메소드로 요청을 서버에 보낸 뒤에 받은 정보를 이벤트리스너를 활용해 이벤트를 실행시킨다.
    request.addEventListener("readystatechange", e => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        resolve(data.puzzle);
      } else if (e.target.readyState === 4) {
        reject("An error has taken place!");
      }
    });
  });

const getCountry = countryCode =>
  new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest();
    countryRequest.open("GET", "http://restcountries.eu/rest/v2/all");
    countryRequest.send();
    countryRequest.addEventListener("readystatechange", e => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const countries = JSON.parse(e.target.responseText);
        const myCountry = countries.find(
          country => country.alpha2Code === countryCode
        );
        resolve(myCountry);
      } else if (e.target.readyState === 4) {
        reject("An error has taken place!");
      }
    });
  });
