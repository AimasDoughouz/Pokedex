async function getPokemonData() {
   let pokemonImage;
   let pokemonName;
   let height;
   let weight;
   let typeP = [];
   let pokeAbilities = [];
   let selectBar = document.getElementById("pokemon-name").value;
   let pokeImage = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectBar}/`)
      .then(resp => resp.json())
      .then(resp => {
         for(let i = 0; i < resp.types.length; i++) {
            typeP.push(resp.types[i].type.name);
         };
         for(let i = 0; i < resp.abilities.length; i++) {
            pokeAbilities.push(resp.abilities[i].ability.name);
         };
         pokemonName = capitalizeFirstLetter(resp.name);
         height = resp.height;
         weight = resp.weight;
         pokemonImage = resp.sprites.front_default;
      });    
   document.getElementById("image").src = pokemonImage;
   document.getElementById("name").innerHTML= pokemonName;
   document.getElementById("height").innerHTML= `Height: ${height} decimetres`;
   document.getElementById("weight").innerHTML= `Weight: ${weight} hectograms`;
   document.getElementById("type").innerHTML= `Types: ${typeP.join(' , ')}`;
   document.getElementById("abilities").innerHTML= `Abilities: ${pokeAbilities.join(' , ')}`;
}    

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function filterFunction() {
   let input, filter, option;
   input = document.getElementById("search-bar");
   filter = input.value.toUpperCase();
   
   option = document.getElementsByTagName("option");
   for (let i = 0; i < option.length; i++) {
     txtValue = option[i].textContent || option[i].innerText;
     if (txtValue.toUpperCase().indexOf(filter) > -1) {
       option[i].style.display = "";
      } else {
       option[i].style.display = "none";
      }
   }
}