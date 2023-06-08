import { getMovieDetails } from './get-movie-details.js';

async function renderMovieDetails() {
  // getMovieDetails로 가져온 데이터
  let movie_detail = await getMovieDetails();
  let html = '';

  html = `<li><img src="https://image.tmdb.org/t/p/w500${movie_detail.backdrop_path}">
    <li><h2>✅제목 : ${movie_detail.title}</h2></li>
<li><h2>${movie_detail['tagline']}</h2></li>
<li><h2>상영시간 : ${movie_detail.runtime}</h2></li>
<li><h2> 평점 : ${movie_detail.vote_average}</h2></li>`;

  let container = document.querySelector('#detail-list');
  container.innerHTML = html;
}

export { renderMovieDetails };
