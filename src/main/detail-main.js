import { renderMovieDetails } from '../data/render-movie-details.js';

renderMovieDetails();

document.querySelector('#home-btn').addEventListener('click', function () {
  //메인 페이지로 이동
  window.location.href = 'index.html';
});
