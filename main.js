const URL = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=20ace127-d962-4106-b494-eb7122da9b7c';
const URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites/search?limit=2&api_key=20ace127-d962-4106-b494-eb7122da9b7c';
const spanError = document.getElementById('error');
// fetch(URL)
//     .then(response => response.json())
//     .then(data => {
//         const img = document.getElementById('random-cat');
//         img.src = data[0].url;
//     });
    
async function loadRandomMichis (){
    const response = await fetch(URL);
    const data = await response.json();
    if(response.status !== 200){
        spanError.innerHTML = "Hubo un error" + response.status + data.message;
    }else {
        const img1 = document.getElementById('random-cat1');
        const img2 = document.getElementById('random-cat2');
        img1.src = data[0].url;
        img2.src = data[1].url;
    }
}

async function loadFavoriteMichis (){
    const response = await fetch(URL_FAVORITES);
    const data = await response.json();

    if(response.status !== 200){
        spanError.innerHTML = "Hubo un error" + response.status +data.message;
    }else {
        const img1 = document.getElementById('fav-cat1');
        const img2 = document.getElementById('fav-cat2');
        img1.src = data[0].url;
        img2.src = data[1].url;
    }
}

async function saveFavoriteMichis (){
    const res = await fetch(URL_FAVORITES, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            image_id: "dje"
        })
    });
    const data = await response.json();
    if(response.status !== 200){
        spanError.innerHTML = "Hubo un error" + response.status +data.message;
    }
}

loadRandomMichis();

const button = document.getElementById('cat-button');
button.onclick = loadRandomMichis;