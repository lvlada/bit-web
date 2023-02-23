const link = 'https://api.tvmaze.com/search/shows?q=';
const linkID = 'https://api.tvmaze.com/shows/';
const linkID2 = 'https://api.tvmaze.com/shows';
var searchText = '';
var searchText2 = '';
var newID = '';
var autoComp2 = [];
var show = [];



// function tvShow(){
//     var req = $.ajax({
//         url:`${link}${searchText}`,
//         //url:`${linkID2}`,
//         method:'GET'
//     })

//     req.done(function(response){
//         console.log(response);
//         //console.log(response[0].show.image);
//         var info = $('.info')
//         info.html('');
        
//         response.forEach(function(index){
//             var newImage = '';
//             if(index.show.image === null){
//                 newImage = './istockphoto-1147544807-612x612.jpg';
//             } else{

//                 newImage = index.show.image.medium;
//             }
//             var newItem = $( `<div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center" style="margin-top:2.5rem">
//             <div class="card" style="width:20rem">
//                 <img src="${newImage}" class="card-img-top" alt="no Image" id="noImage">
//                 <div class='card-body'>
//                     <h5 class='card-title' style="font-size:20px">${index.show.name}</h5>
//                     <a href = "./ShowInfoPage.html" class='btn btn-info' style="color:white;font-weight:bold;font-size:16px" onclick="goInfoPage(${index.show.id})">Link</a>
//                 </div>
//             </div>
//         </div>`); 
//         info.append(newItem); 
     
//         })


//     }).fail(function(response){
//         console.log(response)

//     }).always(function(response){
//         console.log('zahtev zavsen');
//     })
// }


//50 shows
function tvShow(){
    var req = $.ajax({
        //url:`${link}${searchText}`,
        url:`${linkID2}`,
        method:'GET'
    })

    req.done(function(response){
        console.log(response);
        response.length = 50;
        //console.log(response[0].show.image);
        var info = $('.info')
        info.html('');
        
        response.forEach(function(index){
            var newImage = '';
            if(index.image === null){
                newImage = './istockphoto-1147544807-612x612.jpg';
            } else{

                newImage = index.image.original;
            }
            var newItem = $( `<div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center" style="margin-top:2.5rem">
            <div class="card" style="width:20rem">
                <img src="${newImage}" class="card-img-top" alt="no Image" id="noImage">
                <div class='card-body'>
                    <h5 class='card-title' style="font-size:20px">${index.name}</h5>
                    <a href = "./ShowInfoPage.html" class='btn btn-info' style="color:white;font-weight:bold;font-size:16px" onclick="goInfoPage(${index.id})">Link</a>
                </div>
            </div>
        </div>`); 
        info.append(newItem); 
     
        })


    }).fail(function(response){
        console.log(response)

    }).always(function(response){
        console.log('zahtev zavsen');
    })
}



// Search filed

function inputSearch(){
    var req = $.ajax({
        url:`${link}${searchText2}`,
        method:'GET'
    })

    req.done(function(response){
        console.log(response);
        autoComp2.length = 0;
        response.forEach(function(index){
            console.log(`Index ${index}`);
            var newItem = index.show.name;
            autoComp2.push({id: index.show.id, name: newItem}); 
        })
        autoComp2.length = 10;

    }).fail(function(response){
        console.log(response)

    }).always(function(response){
        console.log('zahtev zavsen');
    })

}


// Man part 

$(document).ready(function(){
    $('#input1').change(function(){
        searchText = this.value;
        if(searchText == ''){
            searchText = 'a';
        }
        tvShow();
    });

    searchText = 'a';
    tvShow();


      $('#input1').keyup(function(){
        searchText2 = this.value;
        inputSearch();
      });

      $( "#input1" ).autocomplete({
        source: function(req, resp) {
            resp($.map(autoComp2, function(value, key) {
                return  {
                    label: value.name,
                    value: value.id
                }
            }))
        },
        select: function(event, ui) {
            $('#input1').html('');
            sessionStorage.setItem('numberID', ui.item.value);
            location.assign('./ShowInfoPage.html')
        }
      });

     
});


function goInfoPage(event){
    var id = event;
    sessionStorage.setItem('numberID', id);
    //window.location = './ShowInfoPage.html';
}








