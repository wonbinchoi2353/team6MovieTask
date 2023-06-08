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
        <div><input class="review-Writer" value="${postReviewWriter}"></input></div>
        <div><input class="review-Text" value="${postReviewContent}"></input></div>
        <button class="modify-Btn">수정</button>
        <p><label for="">확인비밀번호</label>
        <input type="text" class="checkPwd"></p>
        <button class="delete-Btn">삭제</button>
        </div>`;
  });
}

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

export { renderReview, reviews, movieId, saveReview };
