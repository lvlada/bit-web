import { goInfoPage } from './goInfoPage.js';


window.goInfoPage = goInfoPage;


const link = 'https://api.tvmaze.com/search/shows?q=';
const linkID = 'https://api.tvmaze.com/shows/';
const linkID2 = 'https://api.tvmaze.com/shows';
var searchText = '';
var searchText2 = '';
var newID = '';
var autoComp2 = [];
var show = [];



function tvShow(){
    fetch(linkID2)
    .then(respons => {
        return respons.json();
    })
    .then(jsObject => {
        //console.log(jsObject);
        jsObject.length = 50;
        var info = $('.info')
        info.html('');
        
        jsObject.forEach(function(index){
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
    })
}





// Search filed

function inputSearch(){
    fetch(`${link}${searchText2}`)
    .then(respons => {
        return respons.json();
    })
    .then(jsObject => {
        console.log(jsObject);
        autoComp2.length = 0;
        jsObject.forEach(function(index){
            console.log(`Index ${index}`);
            var newItem = index.show.name;
            autoComp2.push({id: index.show.id, name: newItem}); 
        })
        autoComp2.length = 10;
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







