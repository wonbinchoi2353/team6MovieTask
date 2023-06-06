// export { getMovieDetail };

async function getMovieDetail() {
    let movie_details

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjdmNWM2OGZkY2VhMzJhYTZkOTEzZWE3YThlODNmZCIsInN1YiI6IjY0NzA5NDMzMTNhMzIwMDEzMzg2MGQ5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H6E-QYJymel6CZVaT0YDHYLWFIctLiVqU1Qv-7gNqe0'
        }
    };
    try {
        movie_details = await fetch('https://api.themoviedb.org/3/movie/${movieId}?language=en-US', options)
        // 패치로 가져온 데이터를 movies에 할당
    } catch (error) {
        alert('오류'); // 오류시 오류알림
    }
    return movie_details.json() // 받은 데이터를 json 형식으로 반환
}


async function renderMovies() {  /* 패치로 가져온 데이터를 찍는 과정 */
    let detail = await getMovieDetail(); // 객체구조분해할당 방식으로 변수저장을 해줘야한다. getMovie()로 가져온 데이터는 배열이기 때문에 객체로 변환
    console.log(detail)
       // setpage(movies) // movies 라는 객체를 받아서 화면에 출력하는 함수
}

renderMovies()