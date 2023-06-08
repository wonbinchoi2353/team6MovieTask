// 리뷰 등록하기 버튼 클릭하면 스토리지에 리뷰 저장
// 로컬스토리지에 있는 데이터를 댓글 박스 하나씩 출력
// 필요: 모든 입력창 초기화
const reviewFunc = () => {
  const reviewBtn = document.querySelector('.review-btn');
  reviewBtn.addEventListener('click', function () {
    // 디테일 페이지 영화 제목
    let detailPageTitle = document.querySelector('.details-title').textContent;
    let tempTitle = '스파이더맨';
    // 인풋값 가져오기
    let reviewWriter = document.querySelector('.writer').value;
    let reviewPassword = document.querySelector('.password').value;
    let reviewContent = document.querySelector('.review-text').value;

    let reviews = [];
    let strReviews = [];


    //+추가 기능: 입력하는 화면에서 비밀번호를 입력할 때 블러 처리
    document.getElementById("reviewPassword").addEventListener('blur', function () {
      this.setAttribute("type", "password");
    });


    //유효성 검사
    //기본형
    // if (reviewWriter.trim() === '' || reviewPassword.trim() === '' || reviewContent.trim() === '') {
    //   alert('빈칸에 내용을 채워주세요.');
    //   return;
    // }







    // 리뷰 로컬 스토리지에 저장
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
        detailPageTitle,
        reviewWriter,
        reviewPassword,
        reviewContent,
      });
      // 리뷰 배열을 문자열로 만들어서 localStorage에 저장
      strReviews = JSON.stringify(reviews);
      localStorage.setItem('reviews', strReviews);
    }
    saveReview();

    // 스토리지에 있는 리뷰 영화에 맞게 생성
    function renderReview() {
      // localStorage에서 꺼낸 문자열을 다시 배열로 변환
      strReviews = localStorage.getItem('reviews');
      reviews = JSON.parse(strReviews);
      let detailPageReviews = reviews.filter(review => review.detailPageTitle === tempTitle);

      // 로컬 스토리지 데이터를 가져와서 리뷰 리스트 만들기
      const reviewList = document.querySelector('.review-list');
      reviewList.innerHTML = '';
      detailPageReviews.forEach(review => {
        let postReviewWriter = review.reviewWriter
        let postReviewContent = review.reviewContent

        reviewList.innerHTML += `<div class="review">
                                            <p class="review-Writer">${postReviewWriter}</p>
                                            <p class="review-Text">${postReviewContent}</p>
                                        </div>`;
      });
    }
    renderReview();
  });
};
reviewFunc();



