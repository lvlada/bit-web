const url = 'https://api.chucknorris.io/jokes/random';

fetch(url)
.then(respons => {
    return respons.json();
})
.then(jsObject => {
    console.log(jsObject);
    $('#newJoke').text(jsObject.value);
})


$(document).ready(function(){
    $('button').click(function(){
        location.reload();
    });
});

