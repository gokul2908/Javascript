let x = "";
for (let i = 0; i < 4; i++) {
    x += `<div class="card"> some text </div>`;
}
let arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];
let arr2 = [];
function next() {
    if (arr1.length == 1) {
        return;
    }
    arr2.unshift(arr1[0])
    arr1.shift()
    
    let x = ``;
    for (image of arr1[0]) {
        x += `<div class="card"> <img src="${image}.jpg" alt=""></div>`;
    }
    
    document.getElementById("demo").innerHTML = x;
}
function prev() {
    
    if (arr2.length == 0) {
        return; 
    }
    let x = ``;
    for (image of arr2[0]) {
        x += `<div class="card"> <img src="${image}.jpg" alt=""></div>`;
    }
    arr1.unshift(arr2[0])
    arr2.shift()
    document.getElementById("demo").innerHTML = x;
}
function first() {
    let x = ``;
    for (image of arr1[0]) {
        x += `<div class="card"> <img src="${image}.jpg" alt=""></div>`;
    }
    document.getElementById("demo").innerHTML = x;
}
first()

