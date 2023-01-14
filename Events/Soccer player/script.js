
function moveSoccer(event){
    var x = event.clientX;
    var y = event.clientY;
    // alert('Kordinate ' + x + ' i ' + y);
    var image = document.getElementById('ronaldo');
    //alert('Kordinate su ' + image.offsetLeft + ' i ' + image.offsetTop);
    image.style.marginTop = y - 50 + 'px';
    image.style.marginLeft = x - 50 + 'px';
}

function stopMove(){
    ele.removeEventListener('click', moveSoccer);
}


function Reset(){
    location.reload();
}




// location.reload();
var ele = document.body;
ele.addEventListener('click', moveSoccer);

