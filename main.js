const URL = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=20ace127-d962-4106-b494-eb7122da9b7c';

// fetch(URL)
//     .then(response => response.json())
//     .then(data => {
//         const img = document.getElementById('random-cat');
//         img.src = data[0].url;
//     });
    
async function cats (){
    const response = await fetch(URL);
    const data = await response.json();
    const img1 = document.getElementById('random-cat1');
    const img2 = document.getElementById('random-cat2');
    img1.src = data[0].url;
    img2.src = data[1].url;
}

cats();

const button = document.getElementById('cat-button');
button.onclick = cats;