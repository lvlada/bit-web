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


// `<div class="col-4" style="margin-top:2.5rem">
//             <div class="card" style="width:18rem">
//                 <img src="${item.avatar_url}" class="card-img-top" alt="...">
//                 <div class='card-body'>
//                     <h5 class='card-title' style="font-size:1.5rem">${item.login}</h5>
//                     <p class="card-text">${item.type}</p>
//                     <a href='${item.html_url}' target='_blank' class='btn btn-info' style="color:white;font-weight:bold;font-size:1rem">Go to profile</a>
//                     <button type="button" id=${userIndex[i]} onclick="userRepo('${reposit}')" class="btn btn-info userrepos" style="color:white;font-weight:bold;font-size:1rem">Repositories</button>
//                 </div>
//             </div>
//         </div>`




