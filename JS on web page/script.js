//alert('Test');

//1

// function printText(){
//     return console.log('Hello World!');
// }

// printText();

//2

// function isOnline(){
//     if(navigator.onLine){
//         console.log('online')
//     }
// }

// function navigatorTest(){
//     return console.log(
//         navigator.platform, '\n',
//         navigator.appVersion, '\n',
//         navigator.appName

//         );
// }
// isOnline();
// navigatorTest();



//3
// function screenProp(){
//    return console.log('Height curent:' + screen.availHeight + ' max:' + screen.height);
// }

// screenProp();



//4

function reloadPage(){
    location.reload();
}

function urlLocation(){
    return console.log(
        'Location:' + location.href + '\n'+
        'Domain name:' + location.hostname + '\n'+
        'Used protocol:' + location.protocol +  '\n' +
        'URL para:' + location.host
        )
}

function redirectPage(){
    location.assign('https://developer.mozilla.org/en-US/docs/Web/API/Location/reload');
}


//redirectPage();
//reloadPage();
urlLocation();


// function passData(name){
//     //localStorage.name = prompt('What is your name?');
//     localStorage.name = name;
//     var item = localStorage.name;
//     return item;
// }
// function clearData(){
//     localStorage.clear();
// }
// function getData(prop){
//     if(!prop){
//         return console.log('Ther is no data!');
//     }
//     var name = localStorage.getItem('name');
//     console.log(name);
//     clearData();
    
// }

var name = 'Vladimir';
getData(passData(name));

function forwardPage(){
    history.forward();
}
function next(){
    window.open('./index2.html','_self');
}
function backPage(){
    history.back();
}

//Global JavaScript Objects (homework)

//1 and 2

// function createArray(){
//     var newArray = [];
//     for(var i = 0; i < 11; i++){
//         var number = Math.random(1,50)*100;
//         newArray.push(roundNumber(fixArray(number)));
//     }
//     var max = Math.max(...newArray);
//     return console.log(newArray, max);

// }

// function fixArray(number){
//     return number.toFixed(2);
// }

// function roundNumber(number){
//     return Math.round(number);
// }

// createArray();




