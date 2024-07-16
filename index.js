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

h2Part.textContent = count;

const btn = document.querySelector('#increment-btn');
const btn2 = document.querySelector('#decrement-btn');
const saveBtn = document.querySelector('#save-btn')
const resetBtn = document.querySelector('#reset-btn');

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
    let newText = count + ' - ';    // if the last character is empty space, then you should use textContent. It's brecause innerText only read human readable character
    h2PartSave.textContent += newText;  
    count = 0;
    h2Part.textContent = count;
    restartBtn
    console.log(`${newNode} saved`);

}

function resetFunc() {
    h2Part.textContent = '0';
    h2PartSave.textContent = 'previous entries:';
}

btn.onclick = incremental;
btn2.onclick = decremental;
saveBtn.onclick = saveRecord;
resetBtn.onclick = resetFunc;