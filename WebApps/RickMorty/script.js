let link = 'https://rickandmortyapi.com/api/character?page=';
let link2 = '';
let input = 1;

function RickyMorti(input = 1){
    fetch(`${link}${input}`)
    .then(respons => {
        return respons.json();
    })
    .then(jsObject => {
        console.log(jsObject);
        var info = $('.info')
        info.html('');
        
        jsObject.results.forEach(function(index){
            var newImage = '';
            if(index.image === null){
                newImage = './istockphoto-1147544807-612x612.jpg';
            } else{
                newImage = index.image;
            }
            var newItem = $( `<div class="col-lg-3 col-md-6 col-12 d-flex justify-content-center" style="margin-top:2.5rem">
            <div class="card" style="width:20rem">
                <img src="${newImage}" class="card-img-top" alt="no Image" id="noImage">
                <div class='card-body'>
                    <a href = "./ShowInfoPage.html" style="font-weight:bold;font-size:16px" onclick="goInfoPage(${index.id})">${index.name}</a>
                    <button class='btn btn-outline-success like' id="${index.id}" onclick="likeBG(id)"> <i class="fa-regular fa-thumbs-up"></i> Like</button>
                </div>
            </div>
        </div>`); 
        info.append(newItem); 
        });
    })
}

// Pagination

function pagination(){
    fetch(link)
    .then(respons => {
        return respons.json()
    })
    .then(jObject =>{
        let newCounter = 0;
        let pag = $('.pagination');
        for(var i = 0; i < 5; i++){
            var newPage = $(`
            <li class="page-item"><a class="page-link" href="#" id="${input}" onclick="newLink(id)">${++newCounter}</a></li>
        `);
        pag.append(newPage);
        input ++;
        }

        
    })

}


// Man part 

$(document).ready(function(){
    RickyMorti();
    pagination();
    
});


function goInfoPage(event){
    var id = event;
    sessionStorage.setItem('numberID', id);
    //window.location = './ShowInfoPage.html';
}

function likeBG(id){
    var button = $(`#${id}`);
    button.css("background-color","green");
    button.css("color","white");

}


function newLink(id){
    RickyMorti(id)
}




