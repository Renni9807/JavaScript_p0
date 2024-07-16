// first, initialize the number as 0
// onClick increment btn, increase number by 1
// onClick decrement btn, decrease number by 1
// reflects the result on count-el html

const btn = document.querySelector('#increment-btn');
const btn2 = document.querySelector('#decrement-btn');
const idCountEl = document.querySelector('#count-el');

let count = 0;

function incrementBtn() {
    count+= 1;
    idCountEl.textContent = count;
    console.log("incrementBtn clicked");
}
function decrementBtn() {
    count-= 1;
    idCountEl.textContent = count;
    console.log("decrementBtn clicked");
}

btn.onclick = incrementBtn;
btn2.onclick = decrementBtn;

