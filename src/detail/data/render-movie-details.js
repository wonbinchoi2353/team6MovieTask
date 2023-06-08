import { getMovieDetails } from './get-movie-details.js';

async function renderMovieDetails() {
  // getMovieDetails로 가져온 데이터
  let movie_detail = await getMovieDetails();
  let html = '';
  console.log(movie_detail)

  html = `<img src="https://image.tmdb.org/t/p/w500${movie_detail.backdrop_path}">
    <li><h1>${movie_detail.title}</h1></li>
    <li><h2>✅original title : ${movie_detail.original_title}</h2></li>
    <li><h3>${movie_detail['tagline']}</h2></li>
    <li><h4>장르 : ${movie_detail.genres[0].name}</h3></li>
<li><h4>⏳상영시간 : ${movie_detail.runtime}분</h2></li>
<li><h4>⭐${movie_detail.vote_average}</h2></li>
<a href="${movie_detail.homepage}">🏠Home Page</a>
<p>개봉일 : ${movie_detail.release_date}</p>
`

  let container = document.querySelector('#detail-list');
  container.innerHTML = html;
}

export { renderMovieDetails };
