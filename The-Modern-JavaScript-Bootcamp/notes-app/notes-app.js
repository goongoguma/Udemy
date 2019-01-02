let notes = getSavedNotes();

const filters = {
  renderTodos: ""
};

renderNotes(notes, filters);

console.log(uuidv4());

document.querySelector("#create-note").addEventListener("click", function(e) {
  const id = uuidv4();
  notes.push({
    // create unique id using uuidv4
    id,
    title: "",
    body: ""
  });
  saveNotes(notes);
  location.assign(`/edit.html#${id}`);
});

document.querySelector("#search-text").addEventListener("input", function(e) {
  filters.renderTodos = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function(e) {
  console.log(e.target.value);
});

// 글 수정페이지에서 제목이 바뀔때 다른 탭에 있는 메인탭에서도 제목을 같이 바꿔주기
window.addEventListener("storage", function(e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

// Unix Epoch - January 1st 1970 00:00:00

// we can represent specific time providing arguments in the function call

// THIS ALLOWS US TO GET TIME USING UNIX EPOCH AND SAVED IN LOCALSTORAGE
const now = new Date();
const timeStamp = now.getTime();

// THIS IS USED AFTER WE GET A DATA FROM A LOCALSTORAGE AND DO SOMETHING RELATED TO THE DATE
const myDate = new Date(timeStamp);
console.log(myDate.getFullYear());

// console.log(`Year: ${now.getFullYear()}`);
// // Jan represeted 0
// console.log(`Month: ${now.getMonth()}`);
// console.log(`Day of month: ${now.getDate()}`);
// console.log(`Hour: ${now.getHours()}`);
// console.log(`Minutes: ${now.getMinutes()}`);
// console.log(`Seconds: ${now.getSeconds()}`);

const timeOne = new Date("May 5 2002 02:00:00");
const timeTwo = new Date();
const timeOneTimeStamp = timeOne.getFullYear();
const timeTwoTimeStamp = timeTwo.getFullYear();
console.log(timeTwoTimeStamp);

if (timeOneTimeStamp < timeTwoTimeStamp) {
  console.log(timeOne.toString());
} else if (timeOneTimeStamp > timeTwoTimeStamp) {
  console.log(timeTwo.toString());
}
