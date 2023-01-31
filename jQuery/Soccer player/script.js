
function moveSoccer(event){
    var x = event.clientX;
    var y = event.clientY;
    x -= 50;
    y -= 50; 
    $('#ronaldo').animate({left: x, top: y}, 100)
}

function stopMove(){
    $('body').off('click', moveSoccer);
}


function Reset(){
    location.reload();
}



//jQuery

$(document).ready(function(event){
    $('body').on('click', moveSoccer);

    // $('button2').on('click', Reset);
    // $('button1').on('click', stopMove);
    
});

