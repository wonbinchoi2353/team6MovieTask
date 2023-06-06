export { cur }

const cur = function (e) {
    let dv = e.target
    let a = dv.parentNode.id
    showcur(a)
}
const showcur = function (ddd) {
    console.log(ddd)
}
