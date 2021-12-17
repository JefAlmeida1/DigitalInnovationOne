const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.webpurl;
    } catch (e) {
        console.log(e.message);
    }
}

const loadImg = async () =>{
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();


// outra forma de fazer e vai trazer o mesmo resultado

/*

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');


const getCats = async () => {
    const data = await fetch(BASE_URL)
        
        .then((res) => res.json())
        .catch((e) => console.log(e));

    return json.webpurl;
    
}

const loadImg = async () =>{
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

loadImg();

*/