import { renderMovieDetails } from './data/render-movie-details.js';
import { renderReview, saveReview, movieId } from './data/render-review.js';
import { deleteReview } from './utill/delete.js';

window.onload = () => {
  // 페이지가 켜지면 상세페이지와 리뷰
  renderMovieDetails();
  if (localStorage.length >= 1) {
    renderReview();
    modifyReview();
  }
};
document.querySelector('#home-btn').addEventListener('click', function () {
  // index.html로 돌아가기
  window.location.href = 'index.html';
});
document.querySelector('.review-btn').addEventListener('click', function () {
  // 저장버튼 누르면 리뷰저장 및 다시 렌더링
  saveReview();
  renderReview();
  location.reload();
});

document.querySelector('.review-list').addEventListener('click', function (e) {
  // 삭제
  deleteReview(e);
});

function modifyReview() {
  const modifyBtn = document.querySelectorAll('.modify-Btn');
  modifyBtn.forEach(button => {
    button.addEventListener('click', function (e) {
      let reviews = localStorage.getItem('reviews');
      reviews = JSON.parse(reviews);
      // 이벤트 타겟으로 클릭한 button의 부모 요소 제외하고 선택
      reviews = reviews.filter(review => review.dateId == e.target.parentElement.id);
      // alert(e.target.parentElement.id);
      const review = document.getElementById(e.target.parentElement.id);

      let postReviewWriter = reviews[0].reviewWriter;
      let postReviewContent = reviews[0].reviewContent;
      review.innerHTML = `
      <div><input class='modify-writer' value='${postReviewWriter}'></div>
      <div><input class='modify-review-text' value='${postReviewContent}'></div>
      <div><input class='modify-password' placeholder='비밀번호를 입력해주세요'></div>
      <button class="modify-Btn" id='verify'>확인</button>
      <button class="cancel-Btn" id='cancel'>취소</button>
      <button class="delete-Btn">삭제</button>`;

      // 확인 버튼 눌렀을 때
      const verifyBtn = document.getElementById('verify');
      verifyBtn.addEventListener('click', function (e) {
        // 디테일 페이지 영화 제목
        let detailPageTitle = document.querySelector('.detailPageTitle').textContent;
        // 인풋값 가져오기
        let reviewWriter = document.querySelector('.modify-writer').value;
        let reviewPassword = document.querySelector('.modify-password').value;
        let reviewContent = document.querySelector('.modify-review-text').value;
        // 유저 dateId
        let dateId = new Date().getTime();
        // 인풋값이 없으면 리뷰 저장 취소
        if ([reviewWriter, reviewPassword, reviewContent].includes('')) {
          alert('비어있는 내용을 채워주세요!');
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
        // 비밀번호 일치하는지 확인
        let modifyReviews = reviews.filter(review => review.dateId == e.target.parentElement.id);
        console.log(modifyReviews);
        console.log(modifyReviews[0].reviewPassword);
        console.log(reviewPassword);
        if (modifyReviews[0].reviewPassword !== reviewPassword) {
          alert('비밀번호가 틀렸습니다');
          return;
        }

        // 수정하기 전 리뷰 제외하기
        reviews = reviews.filter(review => review.dateId != e.target.parentElement.id);

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
      });

      // 취소 버튼 눌렀을 때
      const cancelBtn = document.getElementById('cancel');
      cancelBtn.addEventListener('click', function (e) {
        review.innerHTML = `
      <div>${postReviewWriter}</div>
      <div>${postReviewContent}</div>
      <button class="modify-Btn">수정</button>
      <button class="delete-Btn">삭제</button>
      <div><input class='checkPwd' placeholder='삭제번호를 입력해주세요'></div>`
      });
    });
  });
}
