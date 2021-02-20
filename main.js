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
var newMessage = document.createElement('h2');
var myNode = document.getElementById('wrapper'); 

box1[0].addEventListener('click', 
    function() {
        newMessage.innerHTML = 'Oooh - so close, but no cigar';
        document.getElementById('wrapper').appendChild(newMessage);
    }, false
); 



// myNode.appendChild(newMessage); 





