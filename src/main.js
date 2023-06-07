import { getMovies } from "./get-movies.js";
import { renderMovies } from "./render-movies.js";
import { sort_date, sort_title, sort_vote, sort } from "./sort.js";
import { search } from "./serch.js";
import { onKeyUp } from "./on-key-up.js";
// import { cur } from "./getId.js";
import { renderMovieDetails } from "./get-movie-details.js";

renderMovies(); // 동작
// Uncaught ReferenceError: search is not defined
//     at HTMLButtonElement.onclick 
const cur = function (e) {
    let dv = e.target
    let a = dv.parentNode.id
    return a 
    // showcur(a)
}

document.querySelector('#search-btn').addEventListener('click', search)
document.querySelector('#search-btn2').addEventListener('click', sort)
document.addEventListener('keydown', onKeyUp)
document.querySelector('.card-list').addEventListener('click', function(e){
    const id = cur(e);
    renderMovieDetails(id)
})
// alert("ID : " +document.getElementById(e.getAttribute('id')).getAttribute('id'));


// 클릭하면 cur가 실행되고 그 다음에 rendermoviedetail 이 실행되야 한다