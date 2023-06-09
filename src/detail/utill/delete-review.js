const deleteReview = e => { // 클릭 매개변수 e를 받아옴
  if (e.target.classList.contains('delete-Btn')) { // 누른 타겟이 delete-Btn 일 경우 실행
    let reviews = localStorage.getItem('reviews');
    reviews = JSON.parse(reviews);
    let inputPwd = e.target.nextElementSibling.children[0].value// 입력한 비밀번호 value
    let check = reviews.filter(review => review.dateId === Number(e.target.parentElement.id))
    // 삭제버튼을 누른 객체와 같은 객체를 데이터베이스에서 호출
    let originPwd = check[0].reviewPassword; // 호출한 객체의 비밀번호를 변수에 저장
    console.log(originPwd)
    console.log(inputPwd)
    if (originPwd === inputPwd) { // 객체 비밀번호와 입력한 비밀번호가 같으면 실행
      reviews = reviews.filter(review => review.dateId !== Number(e.target.parentElement.id));
      // 삭제한 리뷰 빼고 다시 로컬 스토리지에 저장
      reviews = JSON.stringify(reviews);
      localStorage.setItem('reviews', reviews);
    } else {
      alert('비밀번호를 확인해주세요');
    }
    location.reload(); // 새로고침
  }
};

export { deleteReview };
