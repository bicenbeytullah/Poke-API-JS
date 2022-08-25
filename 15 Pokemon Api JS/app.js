const pokeBox = document.querySelector('.pokebox');
const searchBox = document.querySelector('.input')



const pokiApi = async () => {
    let pokemons = [];

    for( let i = 1; i <= 55; i++){
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const pokemonss = await res.json();
        //console.log(pokemonss)
        pokemons.push(pokemonss);
        //console.log(pokemons)
        createPoki(pokemonss);
    }
};

const createPoki = (pokemons) => {
    const names = pokemons.name;
    const ids = pokemons.id;
    const imagess = pokemons.sprites.front_default;

    const pokiHtml = document.createElement('ul');
    pokiHtml.classList.add('pokedex');
    
     pokiHtml.innerHTML =
       `
        <li class="card">
           <img src="${imagess}" class="card-image">
           <h2 class="card-title">${names} </h2>
           <p class="card-subtitle">${ids}</p>
        </li>`;
        
    pokeBox.appendChild(pokiHtml);


};





pokiApi();





















