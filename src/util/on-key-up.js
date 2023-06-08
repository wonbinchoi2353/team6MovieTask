import { search } from './search.js';
export { onKeyUp };

function onKeyUp(e) {
  // enter키 입력시 검색
  if (e.keyCode == 13) {
    search();
  }
}
