let reviews = [];
// movieId
let urlMovieId = new URL(location.href).searchParams;
let movieId = urlMovieId.get('movie_id');

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
    <div>${postReviewWriter}</div>
    <div>${postReviewContent}</div>
    <button class="modify-Btn">수정</button>
    <button class="delete-Btn">삭제</button>
    <div><input class='checkPwd' placeholder='삭제번호를 입력해주세요'></div>
    </div>`;
  });
}

function checkInput() {
  //비밀번호 입력 필드 요소? 가져오기
  let passwordInput = document.querySelector('.password');
  // 인풋값 가져오기
  let reviewWriter = document.querySelector('.writer').value;
  let reviewPassword = document.querySelector('.password').value;
  let reviewContent = document.querySelector('.review-text').value;
  // 유효성 검사: 작성자명의 길이 검사
  if (reviewWriter.length === 0 || reviewWriter.length >= 6) {
    alert('작성자명은 0자 초과 6자 미만이어야 합니다.');
    return false;
  }
  // 유효성 검사: 비밀번호 길이 검사
  if (reviewPassword.length === 0 || reviewPassword.length >= 10) {
    console.log(reviewPassword);
    alert('비밀번호는 0자 초과 10자 미만이어야 합니다.');
    return false;
  }
  // 유효성 검사: 리뷰 내용의 최대 길이 검사
  const maxReviewContentLength = 200;
  if (reviewContent.length > maxReviewContentLength) {
    alert('리뷰 내용은 200자 이하여야 합니다.');
    return false;
  }
}
function saveReview() {
  //유효성 검사 실패 시 리뷰 저장 취소
  if (checkInput() === false) {
    return;
  }
  // 디테일 페이지 영화
  let detailPageTitle = document.querySelector('.detailPageTitle').textContent;
  // 인풋값 가져오기
  let reviewWriter = document.querySelector('.writer').value;
  let reviewPassword = document.querySelector('.password').value;
  let reviewContent = document.querySelector('.review-text').value;
  //유저 dateId
  let dateId = new Date().getTime();
  // 인풋값이 없으면 리뷰 저장 취소
  if ([reviewWriter, reviewPassword, reviewContent].includes('')) {
    alert('내용을 입력해주세요');
    return;
    // 로컬 스토리지에 리뷰가 있으면
  } else if (localStorage.length >= 1) {
    // 로컬 스토리지에 있는 리뷰 꺼내기
    reviews = localStorage.getItem('reviews');
    reviews = JSON.parse(reviews);
    // 로컬 스토리지에 아무것도 없으면
  } else {
    // 첫 실행
  }
  // 인풋값 배열에 추가하기
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
  window.location.reload();
}

export { renderReview, reviews, movieId, saveReview };
