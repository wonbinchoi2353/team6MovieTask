async function getMovieDetails() {
  // url의 파라미터 기반으로 상세정보 fetch
  let get_movie_details;
  let urlMovieId = new URL(location.href).searchParams;
  let movieId = urlMovieId.get('movie_id');

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjdmNWM2OGZkY2VhMzJhYTZkOTEzZWE3YThlODNmZCIsInN1YiI6IjY0NzA5NDMzMTNhMzIwMDEzMzg2MGQ5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H6E-QYJymel6CZVaT0YDHYLWFIctLiVqU1Qv-7gNqe0',
    },
  };
  try {
    get_movie_details = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options);
    // 패치로 가져온 데이터를 movies에 할당
  } catch (error) {
    console.log(error);
    console.log(error.message);
    alert('오류'); // 오류시 오류알림
  }
  return get_movie_details.json(); // 받은 데이터를 json 형식으로 반환
}

export { getMovieDetails };
