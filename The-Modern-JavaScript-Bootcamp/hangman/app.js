// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done
const startEl = document.querySelector("#start");
const wordEl = document.querySelector("#word");
const remainingEl = document.querySelector("#remaining");
const game1 = new Hangman("cat", 3);

wordEl.textContent = game1.getPuzzle(); // c*t
remainingEl.textContent = `Remaining Guess : ${game1.remainingGuesses}`;

window.addEventListener("keypress", e => {
  const guess = String.fromCharCode(e.charCode);
  startEl.remove();

  if (game1.remainingGuesses > 0) {
    document.querySelector("#status").textContent = "PLAYING...";
  }
  game1.guessing(guess);

  wordEl.textContent = game1.getPuzzle(); // c*t

  if (!wordEl.textContent.split("").includes("*")) {
    document.querySelector("#status").textContent = "YOU GOT IT RIGHT!";
  }

  remainingEl.textContent = `Remaining Guess : ${game1.remainingGuesses}`;
});

// MAKING AN HTTP REQUEST
const request = new XMLHttpRequest();

// 1. xhr 객체를 만든 후 open 메소드로 요청을 열고 주소와 HTTP 메소드를 설정한 뒤, send 메소드로 요청을 서버로 보낸다.
request.open("GET", "http://puzzle.mead.io/puzzle?wordCount=3");
request.send();

// this makes event fires when we have an information from server
// 2. send 메소드로 요청을 서버에 보낸 뒤에 받은 정보를 이벤트리스너를 활용해 이벤트를 실행시킨다.
request.addEventListener("readystatechange", e => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const data = JSON.parse(e.target.responseText);
    console.log(data);
  } else if (e.target.readyState === 4) {
    console.log("And error has taken place");
  }
});

// CHALLENGE
// 1. MAKE A NEW REQUEST FOR ALL COUNTRIES
const countryRequest = new XMLHttpRequest();
countryRequest.open("GET", "http://restcountries.eu/rest/v2/all");
countryRequest.send();
const countryCode = "KR";
// 2. PARSE THE RESPONSETEXT TO GET BACK THE ARRAY OF OBJECTS
countryRequest.addEventListener("readystatechange", e => {
  if (e.target.readyState === 4 && e.target.status === 200) {
    const countries = JSON.parse(e.target.responseText);
    countries.forEach(country => {
      // 3. FIND YOUR COUNTRY OBJECT BY IT'S COUNTRY (ALPHA2CODE PROPERTY)
      if (country.alpha2Code === countryCode) {
        // 4. PRINT THE FULL COUNTRY NAME (NAME PROPERTY)
        console.log(country.name);
      } else if (e.target.readyState === 4) {
        console.log("Unable to fetch data");
      }
    });
  }
});
