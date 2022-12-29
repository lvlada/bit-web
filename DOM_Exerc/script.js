
//Selecting One/Multiple Elements

// function addClass(){
//     var lista = document.getElementById('second');
//     lista.classList.add('bg');
// }

// addClass();


// function getAllList(){
//     var lista = document.querySelectorAll('li');

//     for(li in lista){
//         lista[li].classList.add('bg2');
//     }
    
// }

// getAllList();


// function getAllListNew(){
//     var lista = document.getElementById('thrd');
//     lista.classList.add('bg3');
// }

// getAllListNew();


//Traversing

// function greenBG(){
//     var list = document.getElementsByClassName('active');
//     list[0].remove('active');
// }
// greenBG()


// function greenBG2(){
//     var list = document.querySelector('div').firstElementChild;
//     list.firstElementChild.classList.add('active');
// }
// greenBG2()



//Access/Update Text Node

// function getText(){
//     var text = document.getElementById('nav');
//     alert(text.firstElementChild.textContent);
// }

// getText();

// function getText2(){
//     var text = document.getElementById('nav').firstElementChild;
//     text.firstElementChild.innerHTML = 'New Link';
// }

// getText2();



//InnerHTML

function createElements(){
    var newEle = document.createElement('select');
    console.log(newEle)
    var optionOfNewele = document.createElement('option')
    console.log(optionOfNewele)
    var createText = document.createTextNode('Test1');
    optionOfNewele.appendChild(createText);
    newEle.appenChild(optionOfNewele);
}

createElements();








