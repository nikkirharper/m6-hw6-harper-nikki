//Hover over any of the boxes change background color of all boxes to red 
var boxes = document.getElementsByClassName('box');

function changeToRed() {
    for(i = 0; i < boxes.length; i++) {
    boxes[i].classList.add('red'); 
    }   
}; 

function changeBack() {
    for(i = 0; i < boxes.length; i++) {
    boxes[i].classList.remove('red'); 
    }   
}; 

for(i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseenter', changeToRed);
    boxes[i].addEventListener('mouseleave', changeBack)
}; 


//Click on box #1 and message appears 
var box1 = document.getElementsByClassName('section1');
var newMessage = document.createElement('h4');
var myNode = document.getElementById('wrapper'); 

box1[0].addEventListener('click', 
    function() {
        newMessage.innerHTML = 'Oooh - so close, but no cigar';
        document.getElementById('wrapper').appendChild(newMessage);
    }, false
); 


//Click on box #1 and message appears
var box2 = document.getElementsByClassName('section2');
var newMessage2 = document.createElement('h4');
var myNode = document.getElementById('wrapper'); 

box2[0].addEventListener('click', 
    function() {
        newMessage2.innerHTML = 'DING DING DING - We have a winner';
        document.getElementById('wrapper').appendChild(newMessage2);
    }, false
);




