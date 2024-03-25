const randomC = function () {
    const hex = '0123456789ABCDEF';
    let colour = '#';
    for (let i = 0; i < 6; i++) {
        colour += hex[Math.floor(Math.random() * 16)]
    }
    // console.log(colour);
    return colour;
}
// console.log(randomC);
let intervals;

const change = function () {
    //     // const body = document.querySelector("body");
    if (!intervals) intervals = setInterval(changesbg, 1500);
    function changesbg() {
        document.body.style.backgroundColor = randomC();
    }

}
const schange = function () {
    clearInterval(intervals)
    intervals = null
    // const body = document.querySelector("body");
    // document.body.style.backgroundColor = random();

}
document.querySelector("#start").addEventListener('click', change)
document.querySelector("#stop").addEventListener('click', schange)
