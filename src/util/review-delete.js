//삭제 기능

//로컬 스토리지에 저장되어 있음



//로컬스토리지에 저장되어 있는
//username과 비밀번호의 일치여부 확인하기
//데이터 불러오기
let loadReview = JSON.parse(localStorage.getItem('reviews'));

let inputReview = {
    reviewWriter: reviewWriter,
    reviewPassword: reviewPassword,
    reviewContent: reviewContent
};


//일치: 데이터 삭제  + 프론트에 alert
//삭제
if (JSON.stringify(inputReview) === JSON.stringify(loadReview)) {
    localStorage.removeItem('reviews');
    alert('리뷰가 삭제되었습니다.')
}



//일치x: alert '일치하지 않는 정보입니다.'
else {
    alert('일치하는 정보를 찾을 수 없습니다.');
}
