// 4 pillars of DOM

// 1. Selection
// 2. Changing HTML
// 3. Change CSS
// 4. Event Listener

// //1. Selection
// var a = document.querySelector("h1")
// console.log(a);

// // 2. changing html
// a.innerHTML = "lol"

// // 3. changing css
// a.style.backgroundColor = "red"

// // 4. event listener
// a.addEventListener("click",function(){
//     a.innerHTML = "hi"
//     a.style.color = "blue"
//     a.style.backgroundColor = "pink"
// })

let value = 0;
btnInc = document.querySelector("#inc")
btnDec = document.querySelector("#dec")
var a = document.querySelector("h1")

function update(){
    a.innerHTML=value
}
function increase() {
    value++
    update()
}
function decrease() {
    value--
    update()
}