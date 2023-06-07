export { renderMovieDetails };
// import { cur } from "./getId.js";


async function getMovieDetails(movieId) {
    let get_movie_details
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjdmNWM2OGZkY2VhMzJhYTZkOTEzZWE3YThlODNmZCIsInN1YiI6IjY0NzA5NDMzMTNhMzIwMDEzMzg2MGQ5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H6E-QYJymel6CZVaT0YDHYLWFIctLiVqU1Qv-7gNqe0'
        }
    };
    try {
        get_movie_details = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
        // 패치로 가져온 데이터를 movies에 할당
    } catch (error) {
        console.log(error)
        console.log(error.message)
        alert('오류'); // 오류시 오류알림
    }
    return get_movie_details.json() // 받은 데이터를 json 형식으로 반환
}

// 상세정보 뿌릴준비
async function renderMovieDetails(movieId) {  
    let movie_detail = await getMovieDetails(movieId);
    let title = movie_detail.title
    console.log(title)
}
