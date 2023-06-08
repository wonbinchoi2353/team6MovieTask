const setpage = function (arr) {
  // 데이터를 찍는 함수
  let html = '';

  arr.forEach(x => {
    let htmlSegment = `
        <div id="${x.id}" class="movie-card">
            <img src="https://image.tmdb.org/t/p/w500${x.poster_path}">
            <h3>${x.title}</h5>
            <p>${x.overview}</p>
            <p>평점 : ${x.vote_average}</p>
            
        </div>
    `;
    html += htmlSegment;
  });

  let container = document.querySelector('.card-list');
  container.innerHTML = html;
}

export { setpage };
