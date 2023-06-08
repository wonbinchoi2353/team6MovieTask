import { renderMovieDetails } from './data/render-movie-details.js';
import { renderReview, movieId } from './data/render-review.js';
import { saveReview } from './data/save-review.js';
renderMovieDetails();

document.querySelector('#home-btn').addEventListener('click', function () {
  window.location.href = 'index.html';
});
document.querySelector('.review-btn').addEventListener('click', function () {
  saveReview();
  renderReview();
  location.reload();
});
window.onload = () => {
  if (localStorage.length >= 1) {
    renderReview();
  }
};

document.querySelector('.review-list').addEventListener('click', function (e) {
  //클릭한 대상이 add라는 클래스를 가지고있다면
  if (e.target.classList.contains('delete-Btn')) {
    console.log('발견했다');
    let reviews = localStorage.getItem('reviews');
    reviews = JSON.parse(reviews);
    // 이벤트 타겟으로 클릭한 button의 부모 요소 제외하고 선택 (이렇게 쓰는 게 맞는지 정확히는 모르겠습니다..)
    reviews = reviews.filter(review => review.dateId !== e.target.parentElement.id);
    // 삭제한 리뷰 빼고 다시 로컬 스토리지에 저장
    reviews = JSON.stringify(reviews);
    localStorage.setItem('reviews', reviews);
  }
});