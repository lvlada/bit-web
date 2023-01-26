
$(document).ready(function(){
    console.log('Hello World');

    $('li:first').css({'border-bottom':'1px solid black', 'color': 'blue'});
    $('li').css('text-transform', 'uppercase');
    $('li.active').css('color', 'red');
    $('li:nth-child(2)').css('background-color','orange');

    $('body').after('<div></div>')
    $('div').attr('id', 'galery');
    $('galey')
    $('#galery').append('<img></img>');
    $('#galery').append('<img></img>');
    $('#galery').append('<img></img>');
    $('#galery').append('<img></img>');
    $('img:first').css({'background-color':'yellow', 'width': '200px', 'height':'200px'});
    $('img:nth-child(2)').css({'background-color':'blue', 'width': '400px', 'height':'400px'});
    $('img:nth-child(3)').css({'background-color':'green', 'width': '100px', 'height':'100px'});
    $('img:last').css({'background-color':'orange', 'width': '600px', 'height':'600px'});
    $('#galery').before('<h1>Amazing Galery</h1>');
    $('h1').css({'color':'red', 'text-align':'center'});

    $('img').each(function(index, element){
        var ele = $(element).width()
        if(ele < 200){
            $(element).css('border', '3px solid red');
        }
    });

    

});