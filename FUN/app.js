const pokemonList = ["pikachu", "bulbasaur", "charmander", "squirtle"];
let currentPokemon = "";
let streak = 0;

function getRandomPokemon() {
  const randomIndex = Math.floor(Math.random() * pokemonList.length);
  currentPokemon = pokemonList[randomIndex];
  document.getElementById("pokemon-silhouette").style.backgroundImage = `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${randomIndex + 1}.png')`;
}

document.getElementById("submit-guess").addEventListener("click", () => {
  const userGuess = document.getElementById("guess-input").value.toLowerCase();
  if (userGuess === currentPokemon) {
    streak++;
    alert("Correct! Well done.");
  } else {
    streak = 0;
    alert(`Wrong! It was ${currentPokemon.charAt(0).toUpperCase() + currentPokemon.slice(1)}.`);
  }
  document.getElementById("streak").textContent = `Streak: ${streak}`;
  getRandomPokemon();
});

getRandomPokemon();
