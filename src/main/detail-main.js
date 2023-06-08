import { renderMovieDetails } from '../data/render-movie-details.js';

renderMovieDetails();

document.querySelector('#home-btn').addEventListener('click', function () {
  window.location.href = 'index.html';
});
// ----------------------위에는 기존

// movieId 를 가져옴
let urlMovieId = new URL(location.href).searchParams;
let movieId = urlMovieId.get('movie_id');

// 스파이더맨 자리에 movieId 넣은
let detailPageTitle = document.querySelector('.details-title');
detailPageTitle.innerHTML = movieId;

const reviewBtn = document.querySelector('.review-btn');

renderReview(); // 페이지 들어가서 클릭안해도 나올수있게

reviewBtn.addEventListener('click', function () {
  // 인풋값 가져오기
  let reviewWriter = document.querySelector('.writer').value;
  let reviewPassword = document.querySelector('.password').value;
  let reviewContent = document.querySelector('.review-text').value;

  let reviews = [];
  let strReviews = [];

  function saveReview() {
    // 인풋값이 없으면 리뷰 저장 취소
    if ([reviewWriter, reviewPassword, reviewContent].includes('')) {
      alert('비어있는 "내용" 을 채워주세요!');
      return;
      // 로컬 스토리지에 리뷰가 있으면
    } else if (localStorage.length === 1) {
      // 로컬 스토리지에 있는 리뷰 꺼내기
      strReviews = localStorage.getItem('reviews');
      reviews = JSON.parse(strReviews);
      // 로컬 스토리지에 아무것도 없으면
    } else {
      // 첫 실행
    }

    // 인풋값 배열에 추가하기, 단축 속성명?
    reviews.push({
      movieId,
      reviewWriter,
      reviewPassword,
      reviewContent,
    });
    // 리뷰 배열을 문자열로 만들어서 localStorage에 저장
    strReviews = JSON.stringify(reviews);
    localStorage.setItem('reviews', strReviews);
  }
  saveReview();
});

function renderReview() {
  let reviews = [];
  let strReviews = [];
  // localStorage에서 꺼낸 문자열을 다시 배열로 변환
  strReviews = localStorage.getItem('reviews');
  reviews = JSON.parse(strReviews);
  if (reviews !== null) { // 데이터베이스거 null 일때 오류, null이 아닐때만 동작하는 if문
    let detailPageReviews = reviews.filter(review => review.movieId === movieId);
    const reviewList = document.querySelector('.review-list');
    detailPageReviews.forEach(review => {
      let postReviewWriter = review.reviewWriter;
      let postReviewContent = review.reviewContent;

      reviewList.innerHTML += `<div class="review">
                                            <p class="review-Writer">${postReviewWriter}</p>
                                            <p class="review-Text">${postReviewContent}</p>
                                        </div>`;
    });
  }

  // 로컬 스토리지 데이터를 가져와서 리뷰 리스트 만들기
}
