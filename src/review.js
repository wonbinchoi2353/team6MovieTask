// 리뷰 등록하기 버튼 클릭하면 스토리지에 리뷰 저장
// 로컬스토리지에 있는 데이터를 댓글 박스 하나씩 출력
// 필요: 모든 입력창 초기화
const review = () => {
    const reviewBtn = document.querySelector(".review-btn")
    reviewBtn.addEventListener("click", function () {
        function saveData () {
            // key 구분하기 위한 숫자 카운트
            let keyCount = localStorage.length/3;
            if (keyCount === 0) {
                keyCount = 1;
            } else {
                keyCount += 1;
            };
            // 인풋값 가져오기
            let reviewWriter = document.querySelector(".writer").value
            let reviewPassword = document.querySelector(".password").value
            let reviewText = document.querySelector(".review-text").value

            // 인풋값이 없으면 리뷰 저장 취소
            if ([reviewWriter, reviewPassword, reviewText].includes("")) {
                alert("비어있는 내용을 채워주세요!")
                return;
            };

            // key에 카운트 숫자 붙여주기
            let writerKey = "writer" + keyCount;
            let passwordKey = "password" + keyCount;
            let reviewTextKey = "reviewText" + keyCount;
            
            // 로컬 스토리지는 key가 중복되지 않는다
            localStorage.setItem(writerKey, reviewWriter);
            localStorage.setItem(passwordKey, reviewPassword);
            localStorage.setItem(reviewTextKey, reviewText);

            // 로컬 스토리지 데이터를 가져와서 리뷰 리스트 만들기
            const reviewList = document.querySelector(".review-list")
            reviewList.innerHTML = ''
            for (let i = 1; i <= keyCount; i++) {
            let getReviewWriter = localStorage.getItem("writer" + String([i]));
            // let getReviewPassword = localStorage.getItem("password");
            let getReviewText = localStorage.getItem("reviewText" + String([i]));

            reviewList.innerHTML += `<div class="review">
                                        <p class="review-Writer">${getReviewWriter}</p>
                                        <p class="review-Text">${getReviewText}</p>
                                    </div>`;
            }
        }
        saveData();
    })
};
review();