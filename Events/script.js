

function changeBackground(){
    var element = document.body;
    element.classList.toggle('dark_grey');
}

function turnOfBackground(){
    var element = document.getElementById('button1');
    element.classList.add('noToggle');
}


function addMessage(){
    var element = document.getElementById('input1');
    alert(element.value);
    var newEle = document.createElement('p');
    var eleNod = document.createTextNode(element.value);
    newEle.appendChild(eleNod);
    var messageBlock = document.getElementById('first');
    messageBlock.appendChild(newEle);
}