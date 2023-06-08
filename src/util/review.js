import { renderMovieDetails } from '../data/render-movie-details.js';

renderMovieDetails();

document.querySelector('#home-btn').addEventListener('click', function () {
  window.location.href = 'index.html';
});
// ----------------------위에는 기존

let reviews = [];

let review = () => {
  if (localStorage.length === 1) {
    renderReview();
    deleteReview();
  }
  const reviewBtn = document.querySelector('.review-btn');
  reviewBtn.addEventListener('click', function () {
    saveReview();
    renderReview();
  });
};
review();

function saveReview() {
  // console.log('saveReview() 함수가 호출되었습니다.')

  // movieId
  let urlMovieId = new URL(location.href).searchParams;
  let movieId = urlMovieId.get('movie_id');
  // 디테일 페이지 영화 제목
  let detailPageTitle = document.querySelector('.details-title').textContent;
  //+ 비밀번호 입력 필드에 blur 이벤트 리스너 추가
  let passwordInput = document.querySelector('.password');
  passwordInput.addEventListener('blur', checkInput);

  //입력 확인 함수
  function checkInput() {
    //비밀번호 입력 필드 요소? 가져오기
    let passwordInput = document.querySelector('.password');
  }

  // 인풋값 가져오기
  let reviewWriter = document.querySelector('.writer').value;
  let reviewPassword = document.querySelector('.password').value;
  let reviewContent = document.querySelector('.review-text').value;
}
// 유효성 검사: 작성자명의 길이 검사
if (reviewWriter.length === 0 || reviewWriter.length >= 6) {
  alert('작성자명은 0자 초과 6자 미만이어야 합니다.');
  return false;
}

// 유효성 검사: 비밀번호 길이 검사
if (reviewPassword.length === 0 || reviewPassword.length >= 10) {
  alert('비밀번호는 0자 초과 10자 미만이어야 합니다.');
  return false;
}

// 유효성 검사: 리뷰 내용의 최대 길이 검사
const maxReviewContentLength = 200;
if (reviewContent.length > maxReviewContentLength) {
  alert('리뷰 내용은 200자 이하여야 합니다.');
  return false;
}

// 유저 dateId
let dateId = new Date().getTime();
// 인풋값이 없으면 리뷰 저장 취소
if ([reviewWriter, reviewPassword, reviewContent].includes('')) {
  alert('비어있는 내용을 채워주세요!');
  return false;
}
// 로컬 스토리지에 리뷰가 있으면
if (localStorage.length === 1) {
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

return true;

function renderReview() {
  let tempTitle = '스파이더맨';
  // localStorage에서 꺼낸 문자열을 다시 배열로 변환
  reviews = localStorage.getItem('reviews');
  reviews = JSON.parse(reviews);
  let detailPageReviews = reviews.filter(review => review.detailPageTitle === tempTitle);

  // 로컬 스토리지 데이터를 가져와서 리뷰 리스트 만들기
  const reviewList = document.querySelector('.review-list');
  reviewList.innerHTML = '';
  detailPageReviews.forEach(review => {
    let postReviewWriter = review.reviewWriter;
    let postReviewContent = review.reviewContent;

    reviewList.innerHTML += `<div class="review" id="${review.dateId}">
    <p class="review-Writer">${postReviewWriter}</p>
    <p class="review-Text">${postReviewContent}</p>
    <button class="modify-Btn">수정</button>
    <button class="delete-Btn">삭제</button>
    </div>`;
  });
}

// 리뷰 삭제
function deleteReview() {
  const deleteBtn = document.getElementById('');
  console.log(deleteBtn);
  deleteBtn.addEventListener('click', function () {
    alert('버튼 눌렀다!');
    let reviews = localStorage.getItem('reviews');
    reviews = JSON.parse(reviews);
    // 이벤트 타겟으로 클릭한 button의 부모 요소 제외하고 선택 (이렇게 쓰는 게 맞는지 정확히는 모르겠습니다..)
    reviews = reviews.filter(review => review.dateId !== e.target.parentElement.id);
    // 삭제한 리뷰 빼고 다시 로컬 스토리지에 저장
    reviews = JSON.stringify(reviews);
    localStorage.setItem('reviews', reviews);
  });
}

//