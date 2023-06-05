// const guestBookDiv = document.createElement("div")
// const body = document.querySelector("body")
// body.appendChild(guestBookDiv)

const reviewBtn = document.querySelector(".reviewBtn")


const review = reviewBtn.addEventListener("click", function () {
    let writer = document.querySelector(".writer").value
    let passWord = document.querySelector(".passWord").value
    let reviewText = document.querySelector(".reviewText").value
    
    let arrWriter = [];
    let arrPassWord = [];
    let arrReviewText = [];
    
    // const writerMap = new Map();
    // newWriter.set( ,writer)
    
    // for (const entry of writerMap.entries()) {

    // }

    arrWriter = localStorage.setItem('writer', writer);
    console.log(arrWriter)
    arrPassWord = localStorage.setItem('passWord', passWord);
    arrReviewText = localStorage.setItem('reviewText', reviewText);

    localStorage.getItem('writer')

    // forEach
});


