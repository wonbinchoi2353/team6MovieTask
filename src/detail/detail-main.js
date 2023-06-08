import { renderMovieDetails } from './data/render-movie-details.js';
import { renderReview, saveReview } from './data/render-review.js';
import { deleteReview } from './utill/delete.js';


window.onload = () => { // 페이지가 켜지면 상세페이지와 리뷰
  renderMovieDetails();
  if (localStorage.length >= 1) {
    renderReview();
  }
};
document.querySelector('#home-btn').addEventListener('click', function () { // index.html로 돌아가기
  window.location.href = 'index.html';
});
document.querySelector('.review-btn').addEventListener('click', function () { // 저장버튼 누르면 리뷰저장 및 다시 렌더링
  saveReview();
  renderReview();
  location.reload();
});

document.querySelector('.review-list').addEventListener('click', function (e) { // 삭제
  deleteReview(e);
});
