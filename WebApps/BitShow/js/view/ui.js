export function newShow(show){
    let card = $( `<div class="col-lg-4 col-md-6 col-12 d-flex justify-content-center" style="margin-top:2.5rem">
    <div class="card" style="width:20rem">
        <img src="${show.image}" class="card-img-top" alt="no Image" id="noImage">
        <div class='card-body'>
            <h5 class='card-title' style="font-size:20px">${show.name}</h5>
            <a href = "./ShowInfoPage.html" class='btn btn-info' style="color:white;font-weight:bold;font-size:16px" onclick="goInfoPage(${show.id})">Link</a>
        </div>
    </div>
</div>`); 
    $('.info').append(card);
}