
let movieId;
const options = {
method: 'GET',
headers: {
accept: 'application/json',
Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjdmNWM2OGZkY2VhMzJhYTZkOTEzZWE3YThlODNmZCIsInN1YiI6IjY0NzA5NDMzMTNhMzIwMDEzMzg2MGQ5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H6E-QYJymel6CZVaT0YDHYLWFIctLiVqU1Qv-7gNqe0'
}
};

fetch('https://api.themoviedb.org/3/movie/${movieId}?language=en-US', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err));
