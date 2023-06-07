//[전 상황]
//// 영화 카드 클릭 이벤트 핸들러; 카드를 클릭하면 상세 페이지에 연결되게



//모듈 연결?

//api 불러오기



//이벤트 리스너를 사용하여 페이지가 로드될 때 실행될 코드를 작성
// 여기에 필요한 데이터를 가져오고, 해당 데이터를 사용하여 영화 상세 정보를 업데이트


//html 요소 불러오기
window.addEventListener('DOMContentLoaded', (event) => {
    const titleElement = document.getElementById('title');
    const descriptionElement = document.getElementById('description');
    const releaseDateElement = document.getElementById('release-date');
    const directorElement = document.getElementById('director');
    const actorsElement = document.getElementById('actors');


    //영화 데이터 가져오기
    try {
        const movieData = await getMovies();
    }

// 데이터 - html에 할당
    let title = titleElement.textContent = movieData.title;
    let releaseDate = releaseDateElement.textContent = '개봉일: ' + movieData.releaseDate;
    let director = directorElement.textContent = '감독: ' + movieData.director;
    let actor = actorsElement.textContent = '출연 배우: ' + movieData.actors.join(', ');

} catch (error) {
    alert('영화 데이터를 가져오는 중 오류가 발생했습니다.');
}
});

//api 불러오기

async function getMovies() {
    let movies

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2FkYjYyODBiMTQ5NWRjNzRlZTllYjVhNWIyZThhNiIsInN1YiI6IjY0NzQzMmViZGQ3MzFiMmQ3Y2Q3NmNkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wWmpvl-iikBq6Ep4YCQb825KVgbcgGvtvepH2haK-AM'
        }
    };

    try {
        movies = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, options)
        // 패치로 가져온 데이터를 movies에 할당
        movies = await response.json();
    } catch (error) {
        alert('오류'); // 오류시 오류알림
    }

    //api 속 영화 정보 - html에 연결

    //장'단편/ 장르/ 분량 /국가
    const html = `
    <div class="movieDetail">
    <h1>${title}</h1>
    <img src="${imgPath}"/>
    <p>${}</p>
    <p>${ageLimit}</p>
    <p>${releaseDate}</p>
    <p>${director}</p>
    <p>${actors}</p>
    </div>
    `;





    return movieData;

}

//근데 이게 각 영화 카드마다 있어야 해









//클릭해서 메인페이지로 돌아가는 버튼
let home = document.querySelector('#home-btn').addEventListener('click', home)
console.log("home", home);








//html 읽기 예시
// let container = document.querySelector('.card-list');
// container.innerHTML = html;