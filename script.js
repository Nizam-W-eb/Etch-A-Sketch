let grid = document.querySelector(".grid");
let pixels = 16;
let pixelsize = 300/pixels;
let gridBox;
for(let i = 1;i <= pixels**2;i++){
    gridBox = document.createElement("div");
    gridBox.classList.add('grid-box');
    gridBox.style.height = pixelsize + "px";
    gridBox.style.width = pixelsize + "px";
    grid.appendChild(gridBox);
}

grid.addEventListener('mouseover', (e) => {
    let target = e.target;
    target.style.backgroundColor = "black";
})
