//Hover over any of the boxes change background color of all boxes to red 
var boxes = document.getElementsByClassName('box');
var box1 = document.getElementsByClassName('section1'); 


function changeToRed() {
    for(i = 0; i < boxes.length; i++) {
    boxes[i].classList.add('red'); 
    }   
}   

function changeBack() {
    for(i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove('red'); 
    }   
}

for(i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseenter', changeToRed);
    boxes[i].addEventListener('mouseleave', changeBack)
}
