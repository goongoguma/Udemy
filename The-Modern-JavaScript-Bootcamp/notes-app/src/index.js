import { createNote } from "./notes";
import { setFilters } from "./filters";
import { renderNotes } from "./views";

renderNotes();

document.querySelector("#create-note").addEventListener("click", e => {
  const id = createNote();
  location.assign(`/edit.html#${id}`);
});

document.querySelector("#search-text").addEventListener("input", e => {
  setFilters({
    searchText: e.target.value
  });
  renderNotes();
});

document.querySelector("#filter-by").addEventListener("change", e => {
  setFilters({
    sortBy: e.target.value
  });
  renderNotes();
});

// 글 수정페이지에서 제목이 바뀔때 다른 탭에 있는 메인탭에서도 제목을 같이 바꿔주기
window.addEventListener("storage", e => {
  if (e.key === "notes") {
    renderNotes();
  }
});
