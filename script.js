//---------------Gettting HTML DOM
let name = document.querySelector('#input').value;
let width = document.querySelector('#width').value;
let height = document.querySelector('#height').value;
let img = document.querySelector("img");
let find = document.querySelector(".find");


//----------------Script for search button
let btn = document.querySelector("#search").addEventListener("click", () => {
    document.querySelector(".input").style.height = "100vh";
    document.querySelector(".other").style.display = "none"
    img.attributes[0].value = ``;
    
})

//---------------- Script for find image
find.addEventListener("click",() => {
    img.attributes[0].value = `https://source.unsplash.com/${document.querySelector('#width').value}x${document.querySelector('#height').value}/?${document.querySelector('#input').value}`;
    document.querySelector(".input").style.height = "0"
    document.querySelector(".other").style.display = "block"
    // document.querySelector(".img").style.width = `${document.querySelector('#width').value}px`
    // document.querySelector(".img").style.height = `${document.querySelector('#height').value}px`
})

// ----------------other btn
let Other_btn = document.querySelector(".other").addEventListener("click", () => {
    let nWidth = document.querySelector('#width').value;
    nWidth = Number(++nWidth);
    img.attributes[0].value = `https://source.unsplash.com/${nWidth}x${document.querySelector('#height').value}/?${document.querySelector('#input').value}`;
    console.log(`https://source.unsplash.com/${nWidth}x${document.querySelector('#height').value}/?${document.querySelector('#input').value}`)

})


// ------------------Script for image zoom
// let ZoomImg = document.querySelector("#img").addEventListener("mousemove", e => {
//     let clientX = e.clientX;
//     let clientY = e.clientY;
//     document.querySelector("#img").style.transformOrigin = `${clientX}px ${clientY}px`;
//     document.querySelector("#img").style.transform = "scale(4)";
// });