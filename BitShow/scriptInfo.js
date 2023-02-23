
const linkID = 'https://api.tvmaze.com/shows/';
var newID = sessionStorage.getItem('numberID');




function infoPage(){

    var req = $.ajax({
        url:`${linkID}${newID}`,
        method:'GET'
    })

    req.done(function(response){
    console.log(response);

        var info = $('.infoMore')
        info.html('');
            var newImage = '';
            if(response.image === null){
                newImage = './istockphoto-1147544807-612x612.jpg';
            } else{

                newImage = response.image.original;
            }

        var newItemDecrition = $( `
        <div id="InfoDate">
           <h1><span id="title">Title:</span> ${response.name}</h1>
            <div class="row">
            <div class="col-lg-6 col-md-4 col-sm-12" style="margin-top:2.5rem">
                <img src="${newImage}" class="card-img-top" alt="no Image" id="noImage">
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12" style="margin-top:2.5rem">
                <h3>Sesons</h3>
                <div id="Sesons"></div>
                <h3>Cast</h3>
                <div id="Cast"></div>
            </div>
            </div>
            <h3>Show Details</h3>
            <p>${response.summary}</p>
        </div>
         `); 

        info.append(newItemDecrition); 

    }).fail(function(response){
        console.log(response)

    }).always(function(response){
        console.log('zahtev zavsen');
    })
}



// // Seasone

function infoSeasone(){

    var req = $.ajax({
        url:`${linkID}${newID}/seasons`,
        method:'GET'
    })

    req.done(function(response){

    console.log(response);
        var info = $('#Sesons')


        response.forEach(function(index) {
            var newItemDecrition = $( `
            <li>${index.premiereDate} - ${index.endDate}</li>
         `);

        info.append(newItemDecrition);    
        });

    }).fail(function(response){
        console.log(response)

    }).always(function(response){
        console.log('zahtev zavsen');
    })
}


// //info Cast

function infoCast(){

    var req = $.ajax({
        url:`${linkID}${newID}/cast`,
        method:'GET'
    })

    req.done(function(response){
        
        console.log(response);

        var info = $('#Cast');

        response.forEach(function(index) {
            if(!index.person){
                var newItemDecrition = $( `
                <p>No additonal info about the Cast!</p>
             `);  
             console.log('Test');
            } else{
            var newItemDecrition = $( `
            <li>${index.person.name}</li>
            `);  
            //console.log('Test2');
            }
         info.append(newItemDecrition);    
        });


    }).fail(function(response){
        console.log(response)

    }).always(function(response){
        console.log('zahtev zavsen');
    })
}


// Info about Crew


function infoCrew(){
    var req = $.ajax({
        url:`${linkID}${newID}/crew`,
        method:'GET'
    })

    req.done(function(response){
        
        console.log(response);

        var info = $('#infoCrew');

        response.forEach(function(index) {
            var newItemDecrition = $( `
            <li>${index.person.name} - ${index.type}</li>
            `);  
         info.append(newItemDecrition);    
        });


    }).fail(function(response){
        console.log(response)

    }).always(function(response){
        console.log('zahtev zavsen');
    })
}




function episodeList(){
    var req = $.ajax({
        url:`${linkID}${newID}/episodes`,
        method:'GET'
    })

    req.done(function(response){
        
        console.log(response);

        var info = $('#episodeList');

        response.forEach(function(index) {
            var newItemDecrition = $( `
            <li><a href="${index.url}">${index.name}</a></li>
            `);  
 
         info.append(newItemDecrition);    
        });


    }).fail(function(response){
        console.log(response)

    }).always(function(response){
        console.log('zahtev zavsen');
    })
}


function infoAka(){
    var req = $.ajax({
        url:`${linkID}${newID}/akas`,
        method:'GET'
    })

    req.done(function(response){
        
        console.log(response);

        var info = $('#infoAkas');

        response.forEach(function(index) {
            var newItemDecrition = $( `
            <li>Name: ${index.name} - Country:${index.country.name}</li>
            `);  
         info.append(newItemDecrition);    
        });


    }).fail(function(response){
        console.log(response)

    }).always(function(response){
        console.log('zahtev zavsen');
    })
}



//Main

$(document).ready(function(){
    $('#input1').prop('disabled', true);

        infoPage();
        infoSeasone();
        infoCast();
        infoAka();
        infoCrew();
        episodeList();


});