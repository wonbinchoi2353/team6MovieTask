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
        <button class="delete-Btn">삭제</button>
        </div>`;
  });
}

export { renderReview, reviews, movieId };
