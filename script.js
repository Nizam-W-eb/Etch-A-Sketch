let grid = document.querySelector(".grid");
let pixels = 16;
let pixelsize = 300/pixels;
let gridBox;
for(let i = 1;i <= pixels**2;i++){
    gridBox = document.createElement("div");
    gridBox.classList.add('grid-box');
    gridBox.style.backgroundColor = "white";
    gridBox.style.height = pixelsize + "px";
    gridBox.style.width = pixelsize + "px";
    grid.appendChild(gridBox);
}

grid.addEventListener('mouseover', (e) => {
    let target = e.target;
    if (target.id === 'grid'){
        target.style.backgroundColor = 'white';
    }
    else{
        target.style.backgroundColor = 'black';
    }
})

let selectedButton = document.querySelector('.selected-button');
let controls = document.querySelector('.controls');
controls.addEventListener('click', (e) =>{
    let target = e.target;
    let button = target.id;
    selectedButton.textContent = button;
    switch(button){
        case "edit":
           pixels = prompt("How many pixles do you want?(1 - 100)");
           if (pixels > 100){
             pixels = 100;
           }
           if (pixels > 0 && pixels <=100 ){
             grid.replaceChildren();
             pixelsize = 300/pixels;
             for(let i = 1;i <= pixels**2;i++){
                 gridBox = document.createElement("div");
                 gridBox.classList.add('grid-box');
                 gridBox.style.backgroundColor = "white";
                 gridBox.style.height = pixelsize + "px";
                 gridBox.style.width = pixelsize + "px";
                 grid.appendChild(gridBox);
                }
            }
           break;
        case "color":
            grid.addEventListener('mouseover', (e) => {
                let target = e.target;
                target.style.backgroundColor = "black";
                })
            break;
        case "clear":
            let gridBoxs = grid.querySelectorAll('.grid-box');
            gridBoxs.forEach((box) => {
                box.style.backgroundColor = 'white';
            })
            break;
        case "eraser":
            grid.addEventListener('mouseover', (e) => {
                let target = e.target;
                target.style.backgroundColor = "white";
                })
            break;

    } 
})

