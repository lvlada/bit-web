const link = 'https://api.github.com/search/users?q=';
var searchText = '';


function getGitHub(){
    var req = $.ajax({
        url:`${link}${searchText}`,
        method:'GET'
    })

    req.done(function(response){
        console.log(response);
        console.log(response.items[0].avatar_url);

        var info = $('.info')
        info.html('');
        
        response.items.forEach(function(index){
            var img = $('<img/>').attr('src', index.avatar_url);
            info.append(img);      
        })


    }).fail(function(response){
        console.log(response)

    }).always(function(response){
        console.log('zahtev zavsen');
    })
}

$(document).ready(function(){
    $('#input1').change(function(){
        searchText = this.value;
        getGitHub();
    });
    searchText = 'a';
    getGitHub();
});







