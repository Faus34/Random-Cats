const URL = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=20ace127-d962-4106-b494-eb7122da9b7c';
const URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?api_key=20ace127-d962-4106-b494-eb7122da9b7c';
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
        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');

        img1.src = data[0].url;
        img2.src = data[1].url;

        btn1.onclick = () => {
            console.log('btn 1 click',data)
            saveFavoriteMichis(data[0].id)}
        btn2.onclick = () => {    
            saveFavoriteMichis(data[1].id)} 
    }
}

async function loadFavoriteMichis (){
    const response = await fetch(URL_FAVORITES);
    const data = await response.json();

    if(response.status !== 200){
        spanError.innerHTML = "Hubo un error" + response.status +data.message;
    }else {
        data.forEach(michi => {
            const section =  document.getElementById('favorites');
            const article = document.createElement('article');
            const img = document.createElement('img');
            const btn = document.createElement('button');
            const btnTxt = document.createTextNode('Remove from favorites');

            img.src = michi.image.url;
            img.classList.add('fav-cat-img');
            article.classList.add('cat-container');
            btn.appendChild(btnTxt);
            article.appendChild(img);
            article.appendChild(btn);
            section.appendChild(article);
        });
    }
}

async function saveFavoriteMichis (id){
    const response = await fetch(URL_FAVORITES, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            image_id: id
        })
    });
    const data = await response.json();
    console.log(data);
    if(response.status !== 200){
        spanError.innerHTML = "Hubo un error" + response.status +data.message;
    }
}

async function deleteFavoriteMichis (id){
    const response = await fetch(URL_FAVORITES, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            image_id: id
        })
    });
    const data = await response.json();
    console.log(data);
    if(response.status !== 200){
        spanError.innerHTML = "Hubo un error" + response.status +data.message;
    }
}

loadRandomMichis();
loadFavoriteMichis();

const button = document.getElementById('cat-button');
button.onclick = loadRandomMichis;