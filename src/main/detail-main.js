import { renderMovieDetails } from '../data/render-movie-details.js';

renderMovieDetails();

document.querySelector('#home-btn').addEventListener('click', function () {
  window.location.href = 'index.html';
});
// ----------------------위에는 기존

// 리뷰 로컬 스토리지
let reviews = [];
// movieId
let urlMovieId = new URL(location.href).searchParams;
let movieId = urlMovieId.get('movie_id');
console.log("reviews", reviews)

let addReview = () => {
    if (localStorage.length >= 1){
      renderReview();
      // deleteReview();
      modifyReview();
    }
  const reviewBtn = document.querySelector('.review-btn');
  
  reviewBtn.addEventListener('click', function () {    
    saveReview();
    renderReview();
  });
};
addReview();

function saveReview() {
  // 디테일 페이지 영화 제목
  let detailPageTitle = document.querySelector('.detailPageTitle').textContent;
  // 인풋값 가져오기
  let reviewWriter = document.querySelector('.writer').value;
  let reviewPassword = document.querySelector('.password').value;
  let reviewContent = document.querySelector('.review-text').value;
  // 유저 dateId
  let dateId = new Date().getTime();
  // 인풋값이 없으면 리뷰 저장 취소
  if ([reviewWriter, reviewPassword, reviewContent].includes('')) {
    alert('비어있는 내용을 채워주세요!');
    return;
    // 로컬 스토리지에 리뷰가 있으면
  } else if (localStorage.length === 1) {
    // 로컬 스토리지에 있는 리뷰 꺼내기
    reviews = localStorage.getItem('reviews');
    reviews = JSON.parse(reviews);
    // 로컬 스토리지에 아무것도 없으면
  } else {
   
    // 첫 실행
  }
  // 인풋값 배열에 추가하기, 단축 속성명?
  
  reviews.push({
    movieId,
    detailPageTitle,
    dateId,
    reviewWriter,
    reviewPassword,
    reviewContent,
  });
  // 리뷰 배열을 문자열로 만들어서 localStorage에 저장
  reviews = JSON.stringify(reviews);
  localStorage.setItem('reviews', reviews);
}

function renderReview() {
  // localStorage에서 꺼낸 문자열을 다시 배열로 변환
  reviews = localStorage.getItem('reviews'); // null, undefined
  reviews = JSON.parse(reviews);
  
    let detailPageReviews = reviews.filter(review => review.movieId === movieId);

    // 로컬 스토리지 데이터를 가져와서 리뷰 리스트 만들기
    const reviewList = document.querySelector('.review-list');
    reviewList.innerHTML = '';
    detailPageReviews.forEach(review => {
      let postReviewWriter = review.reviewWriter;
      let postReviewContent = review.reviewContent;
      
      reviewList.innerHTML += `<div class="mybox" id="${review.dateId}">
      <div><input class="review-Writer" value="${postReviewWriter}"></input></div>
      <div><input class="review-Text" value="${postReviewContent}"></input></div>
      <button class="modify-Btn">수정</button>
      <button class="delete-Btn">삭제</button>
      </div>`;
    });
}

// let detailPageTitle = document.querySelector('.detailPageTitle');
//     console.log(detailPageTitle)
// 리뷰 삭제
// function deleteReview() {
//   const deleteBtn = document.getElementById('');
//   deleteBtn.addEventListener('click', function () {
//     alert('버튼 눌렀다!');
//     let reviews = localStorage.getItem('reviews');
//     reviews = JSON.parse(reviews);
//     // 이벤트 타겟으로 클릭한 button의 부모 요소 제외하고 선택 (이렇게 쓰는 게 맞는지 정확히는 모르겠습니다..)
//     reviews = reviews.filter(review => review.dateId !== e.target.parentElement.id);
//     // 삭제한 리뷰 빼고 다시 로컬 스토리지에 저장
//     reviews = JSON.stringify(reviews);
//     localStorage.setItem('reviews', reviews);
//   });
// }

// 리뷰 수정
function modifyReview() {
  const modifyBtn = document.querySelectorAll('.modify-Btn');
  modifyBtn.forEach(button => {
    button.addEventListener('click', function (e) {
      // console.log(e.target.parentElement.id)
      // console.dir(e.target)
      let reviews = localStorage.getItem('reviews');
      reviews = JSON.parse(reviews);
      // 이벤트 타겟으로 클릭한 button의 부모 요소 제외하고 선택 (이렇게 쓰는 게 맞는지 정확히는 모르겠습니다..)
      reviews = reviews.filter(review => review.dateId == e.target.parentElement.id);
      console.log(reviews)
      console.log(e.target.parentElement.id)
      // 삭제한 리뷰 빼고 다시 로컬 스토리지에 저장
      reviews = JSON.stringify(reviews);
      localStorage.setItem('reviews', reviews);
    });
  })
}
