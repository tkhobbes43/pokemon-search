function searchPokemon () {
    var pokemonInput = document.querySelector("#pokeInput").value;
    var pokeUri = "https://pokeapi.co/api/v2/pokemon/" + pokemonInput;
    
    fetch(pokeUri)
    .then(response => response.json()) //JSON = javascript object notation
    .then(data => {
        console.log(data)
        var pEl = document.querySelector(".name");
        pEl.textContent = data.name;
    
        var divEl = document.querySelector(".container");
        
        divEl.innerHTML=""
        var imgEl = document.createElement("img");
        imgEl.setAttribute("src", data.sprites.front_shiny);
    
        divEl.appendChild(imgEl)
    })
}

document.querySelector("#searchBtn").addEventListener("click", searchPokemon)