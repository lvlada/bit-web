import { goInfoPage } from './service/goInfoPage.js';
import { newShow } from './view/ui.js'; 
import { newCard } from './entities/show.js';


// because problem with local server!
window.goInfoPage = goInfoPage;


const link = 'https://api.tvmaze.com/search/shows?q=';
//const linkID = 'https://api.tvmaze.com/shows/';
const linkID2 = 'https://api.tvmaze.com/shows';

let searchText = '';
let searchText2 = '';
let autoComp2 = [];

function tvShow(){
    fetch(linkID2)
    .then(respons => {
        return respons.json();

    })
    .then(jsObject => {
        console.log(jsObject);
        jsObject.length = 50;
        let info = $('.info')
        info.html('');
        
        jsObject.forEach(function(index){
            let image = '';
            if(index.image === null){
                image = './istockphoto-1147544807-612x612.jpg';
            } else{
                image = index.image.original;
            }
            const show = new newCard(
                image,
                index.id,
                index.name
            );
        newShow(show); 
        })
    })
}


// Main part 

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


// Search input
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





