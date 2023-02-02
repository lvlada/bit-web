
function getNewImage(){
    var req = $.ajax({
        url:'https://dog.ceo/api/breeds/image/random',
        method:'GET'
    })

    req.done(function(response){
        console.log(response);
        var img = $('<img/>').attr('src', response.message);
        $('#get_image').html('');
        $('#get_image').append(img);

    }).fail(function(response){
        console.log(response)

    }).always(function(response){
        console.log('zahtev zavsen');
    })
}