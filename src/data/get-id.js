const getId = function (e) {
  // 누른 영화박스의 Id를 수집
  let dv = e.target;
  let a = dv.parentNode.id;
  return a;
};

export { getId };
