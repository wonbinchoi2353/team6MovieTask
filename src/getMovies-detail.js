export { renderMovieDetail };
// import { cur } from "./getId.js";


async function getMovieDetail(movieId) {
    let movie_details  
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjdmNWM2OGZkY2VhMzJhYTZkOTEzZWE3YThlODNmZCIsInN1YiI6IjY0NzA5NDMzMTNhMzIwMDEzMzg2MGQ5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H6E-QYJymel6CZVaT0YDHYLWFIctLiVqU1Qv-7gNqe0'
        }
    };   
    try {
        movie_details = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
        // 패치로 가져온 데이터를 movies에 할당
    } catch (error) {
        console.log(error)
        console.log(error.message)
        alert('오류'); // 오류시 오류알림
    }
    return movie_details.json() // 받은 데이터를 json 형식으로 반환
}


async function renderMovieDetail(movieId) {  /* 패치로 가져온 데이터를 찍는 과정 */
    let detail = await getMovieDetail(movieId); 
    console.log(detail)
       // setpage(movies) // movies 라는 객체를 받아서 화면에 출력하는 함수
}