// first, initialize the number as 0
// onClick increment btn, increase number by 1
// onClick decrement btn, decrease number by 1
// reflects the result on count-el html

// const btn = document.querySelector('#increment-btn');
// const btn2 = document.querySelector('#decrement-btn');
// const idCountEl = document.querySelector('#count-el');

// let count = 0;

// function incrementBtn() {
//     count+= 1;
//     idCountEl.textContent = count;
//     console.log("incrementBtn clicked");
// }
// function decrementBtn() {
//     count-= 1;
//     idCountEl.textContent = count;
//     console.log("decrementBtn clicked");
// }

// btn.onclick = incrementBtn;
// btn2.onclick = decrementBtn;

let count = 0;

const h2Part = document.querySelector('#count-el');
const h2PartSave = document.querySelector('#save-el');


const btn = document.querySelector('#increment-btn');
const btn2 = document.querySelector('#decrement-btn');
const saveBtn = document.querySelector('#save-btn')

function incremental() {
    if(count == 0) {
        btn2.removeAttribute('disabled');
    }
    count += 1;
    h2Part.textContent = count;
}
function decremental() {
    if(count == 0) {
        btn2.setAttribute('disabled', 'invalid');
        return;
    }
    count -= 1;
    h2Part.textContent = count;
}

function saveRecord() {
    const newNode = document.createTextNode(` ${count} -`);
    count = 0;
    h2PartSave.appendChild(newNode);
    h2Part.textContent = count;
    console.log(`${newNode} saved`);
}

btn.onclick = incremental;
btn2.onclick = decremental;
saveBtn.onclick = saveRecord;