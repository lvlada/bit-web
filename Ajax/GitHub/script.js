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
            //var img = $('<img/>').attr('src', index.avatar_url);
            var newItem = $( `<div class="col-3" style="margin-top:2.5rem">
                        <div class="card" style="width:18rem">
                            <img src="${index.avatar_url}" class="card-img-top" alt="...">
                            <div class='card-body'>
                                <h5 class='card-title' style="font-size:20px">${index.login}</h5>
                                <p class="card-text">${index.type}</p>
                                <a href='${index.html_url}' target='_blank' class='btn btn-info' style="color:white;font-weight:bold;font-size:16px">Go to profile</a>
                            </div>
                        </div>
                    </div>`);
            //info.append(img); 
            info.append(newItem);      
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





