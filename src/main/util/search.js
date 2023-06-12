import { seepage } from '../data/set-page.js';
import { getMovies } from '../data/get-movies.js';
export { search };

async function search() {
  //검색으로 새로 불러오는 데이터
  let { results: movies } = await getMovies();
  let inputText;
  inputText = document.getElementById('search-input').value.toUpperCase(); // 대문자 변환해서 입력받은 데이터 할당

  //검색 유효성 검사
  if (inputText.trim() === '') {
    alert('검색어를 입력해주세요.');
    return;
  }

  const searchData = movies.filter(x => {
    let a = x.title.toUpperCase();
    return a.includes(inputText);
  }); // title 도 대문자로 includes로 문자열이 포함되어있으면 serchData로 반환

  seepage(searchData);
}

