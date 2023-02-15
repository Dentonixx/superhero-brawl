let p1Name = "Dennis"
let p2Name = ""
let p1Option = "";
let p2Option = "";
let score = "";
let winner = "";
let gamesPlayed = "";
let p1Score = "";
let p2Score = "";
let activePlayer = "p1";

const SUPERHERO_TOKEN = "668801191452162";
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`;

const startButton = document.getElementById("startButton");



const p1HeroImageDiv = document.getElementById("p1HeroImage");
const p2HeroImageDiv = document.getElementById("p2HeroImage");

const p1HeroName = document.getElementById("p1HeroName");
const p2HeroName = document.getElementById("p2HeroName");

const randomHero = () => {
  let id = Math.floor(Math.random() * 730) + 1;
  console.log(`SuperHero #${id}`);
  return id;
};

const apiSuperHero = (id, playerOption) => {
  fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((json) => {
      //console.log(json);
      console.log(json.image.url);
      console.log(`activePlayer:${activePlayer}`);
      console.log(json.powerstats.intelligence);
      

      if (activePlayer == "p1") {
        p1Option = playerOption
        p1HeroName.innerHTML = `<p>${json.name}</p>`;
        p1HeroImageDiv.innerHTML = `<img height= 200 width= 200 src='${json.image.url}'/>`;
      } else if (activePlayer == "p2") {
        p2Option = playerOption
        p2HeroName.innerHTML = `<p>${json.name}</p>`;
        p2HeroImageDiv.innerHTML = `<img height= 200 width= 200 src='${json.image.url}'/>`;
      } else {
        p1HeroImageDiv.innerHTML = "";
        p2HeroImageDiv.innerHTML = "";
      }
    });
};

const playerName = () =>{
    //p1Name = prompt("Please enter your name", "Player 1");
    //console.log(p1Name)
    p2Name = prompt("Please enter your name", "Player 2");
    console.log(p2Name)

}
const getSuperHero = () => {
    //playerName()
    //playerSelector()
  apiSuperHero(randomHero());
};
//startButton.onclick = () => getSuperHero();

const buttonList = document.querySelectorAll(".statButton");

buttonList.forEach((statButton) => {
  statButton.onclick = () => {
    //printButton(statButton);
    playerOption = statButton.value;
    console.log(`playerOption: ${playerOption}`)
 apiSuperHero(randomHero(),playerOption);
    
  };
});

const swapActivePlayer = () => {
    if (activePlayer == 'p1') {
       activePlayer = 'p2' 
    } else if (activePlayer == 'p2') {
        activePlayer = 'p1'
}}

const scoringSystem = () => {

}