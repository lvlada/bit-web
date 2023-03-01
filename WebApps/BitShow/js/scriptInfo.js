
const linkID = 'https://api.tvmaze.com/shows/';
var newID = sessionStorage.getItem('numberID');

function infoPage(){
    fetch(`${linkID}${newID}`)
    .then(respons => {
        return respons.json();
    })
    .then(jsObject => {
        console.log(jsObject);
        var info = $('.infoMore')
        info.html('');
            var newImage = '';
            if(jsObject.image === null){
                newImage = './istockphoto-1147544807-612x612.jpg';
            } else{

                newImage = jsObject.image.original;
            }

        var newItemDecrition = $( `
        <div id="InfoDate">
           <h1><span id="title">Title:</span> ${jsObject.name}</h1>
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
            <p>${jsObject.summary}</p>
        </div>
         `); 

        info.append(newItemDecrition); 
        
    })

}


// // Seasone

function infoSeasone(){
    fetch(`${linkID}${newID}/seasons`)
    .then(respons => {
        return respons.json();
    })
    .then(jsObject => {
        console.log(jsObject);
        var info = $('#Sesons')


        jsObject.forEach(function(index) {
            var newItemDecrition = $( `
            <li>${index.premiereDate} - ${index.endDate}</li>
         `);

        info.append(newItemDecrition);    
        });
    })
}



// //info Cast
function infoCast(){
    fetch(`${linkID}${newID}/cast`)
    .then(respons => {
        return respons.json();
    })
    .then(jsObject => {
        console.log(jsObject);
        var info = $('#Cast');

        jsObject.forEach(function(index) {
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
    })
}

// Info about Crew

function infoCrew(){
    fetch(`${linkID}${newID}/crew`)
    .then(respons => {
        return respons.json();
    })
    .then(jsObject => {
        console.log(jsObject);
        var info = $('#infoCrew');

        jsObject.forEach(function(index) {
            var newItemDecrition = $( `
            <li>${index.person.name} - ${index.type}</li>
            `);  
         info.append(newItemDecrition);    
        });
    })
}


function episodeList(){
    fetch(`${linkID}${newID}/episodes`)
    .then(respons => {
        return respons.json();
    })
    .then(jsObject => {
        console.log(jsObject);
        var info = $('#episodeList');

        jsObject.forEach(function(index) {
            var newItemDecrition = $( `
            <li><a href="${index.url}">${index.name}</a></li>
            `);  
 
         info.append(newItemDecrition);    
        });
    })
}

function infoAka(){
    fetch(`${linkID}${newID}/akas`)
    .then(respons => {
        return respons.json();
    })
    .then(jsObject => {
        console.log(jsObject);
        var info = $('#infoAkas');

        jsObject.forEach(function(index) {
            var newItemDecrition = $( `
            <li>Name: ${index.name} - Country:${index.country.name}</li>
            `);  
         info.append(newItemDecrition);    
        });
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

