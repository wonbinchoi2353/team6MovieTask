import { reviews } from './render-review.js';

function saveReview() {
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
  }
  // 인풋값 배열에 추가하기, 단축 속성명?
  reviews.push({
    movieId,
    dateId,
    reviewWriter,
    reviewPassword,
    reviewContent,
  });
  // 리뷰 배열을 문자열로 만들어서 localStorage에 저장
  reviews = JSON.stringify(reviews);
  localStorage.setItem('reviews', reviews);
}

export { saveReview };
