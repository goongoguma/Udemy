const getPuzzle = callback => {
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
      callback(data.puzzle);
    } else if (e.target.readyState === 4) {
      callback("An error has taken place!");
    }
  });
};

//  SYNC EXAMPLE
const getPuzzleSync = () => {
  // MAKING AN HTTP REQUEST
  const request = new XMLHttpRequest();
  // 1. xhr 객체를 만든 후 open 메소드로 요청을 열고 주소와 HTTP 메소드를 설정한 뒤, send 메소드로 요청을 서버로 보낸다.
  request.open("GET", "http://puzzle.mead.io/puzzle?wordCount=3", false);
  request.send();
  // this makes event fires when we have an information from server
  // 2. send 메소드로 요청을 서버에 보낸 뒤에 받은 정보를 이벤트리스너를 활용해 이벤트를 실행시킨다.

  if (request.readyState === 4 && request.status === 200) {
    const data = JSON.parse(request.responseText);
    return data.puzzle;
  } else if (request.readyState === 4) {
    throw new Error("Things did not go well");
  }
};
