const URL = 'https://api.thecatapi.com/v1/images/search';

// fetch(URL)
//     .then(response => response.json())
//     .then(data => {
//         const img = document.getElementById('random-cat');
//         img.src = data[0].url;
//     });
    
async function cats (){
    const response = await fetch(URL);
    const data = await response.json();
    const img = document.getElementById('random-cat');
    img.src = data[0].url;
}

const button = document.getElementById('cat-button');

button.onclick = cats;