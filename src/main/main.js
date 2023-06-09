import { renderMovies } from './data/render-movies.js';
import { sort } from './util/sort.js';
import { search } from './util/serch.js';
import { onKeyUp } from './util/on-key-up.js';
// import { renderMovieDetails } from "./get-movie-details.js";
import { getId } from './data/get-id.js';
let startPage = 1;
renderMovies(startPage); // 동작
// Uncaught ReferenceError: search is not defined
//     at HTMLButtonElement.onclick

document.querySelector('#search-btn').addEventListener('click', search);
document.querySelector('#search-btn2').addEventListener('click', sort);
document.addEventListener('keydown', onKeyUp);
document.querySelector('.card-list').addEventListener('click', function (e) {
  const id = getId(e);
  if (id.length === 0) {
    location.reload();
    alert('이미지를 눌러주세요!!');
  } else window.location.href = `./detail.html?movie_id=${id}`;
});
document.querySelector('.pageBtn').addEventListener('click', function (e) {
  let pageNum = e.target.value
  renderMovies(pageNum)
});
