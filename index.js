// async function getGame(){
// const options = {
// method : "GET",
// Headers:{
//   'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com' ,
//   'x-rapidapi-key': 'dcdec7f7c6msh4c7c76fb2e2717dp13954ejsne6f8eac126ce'},
// };
// const api = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter',options);
// const response = await api.json();

// console.log(response)
// }
// getGame()
let shooter = document.getElementById('shooter');
let mmorpg = document.getElementById('mmorpg');
let sailing = document.getElementById('sailing');
let permadeath = document.getElementById('permadeath');
let superhero = document.getElementById('superhero');
let pixel = document.getElementById('pixel');


let allData = [];
async function getGame(cat = "shooter"){
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'dcdec7f7c6msh4c7c76fb2e2717dp13954ejsne6f8eac126ce',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
	}
};
const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${encodeURIComponent(cat)}`, options);

	const result = await response.json();

allData = result;
console.log(allData)
displayGames();
showLightBox();
}
const catlink = document.querySelectorAll(".nav-link");

for (let i=0; i<catlink.length; i++) {
  catlink[i].addEventListener("click", function (e) {
    const cat = this.id;  
    getGame(cat);
  });
}
getGame();
function displayGames(){
  let cartona="";
  for(let i=0;i<allData.length;i++)
    { cartona +=`   <div class="col-md-3 py-2 ">
                <div class="cardstyle" id="cardId" style="width: 16rem; ">
                    <img src="${allData[i].thumbnail}" class="card-img-top" alt="">
                    <div class="card-body p-2 bg-light">
                        <div class="cardmain d-flex justify-content-between">
                        <h3 class="card-title fs-4" >${allData[i].title.split(" ").slice(0,1).join(' ')}</h3>
                        <span class="bg-primary rounded-1 h-25">free</span>
                        </div>
                        <p class="card-text"> ${allData[i].short_description.split(" ").slice(0,4).join(' ')}</p>
                        <footer class="d-flex justify-content-between"><span>${allData[i].genre.split(" ").slice(0,2).join(' ')}</span> <span>${allData[i].platform}</span></footer>
                    </div>
                </div>
            </div>`
  }
  document.getElementById('rowdata').innerHTML = cartona;
}



const cards = document.querySelectorAll('.cards');
console.log(cards)
const lightBoxContainer = document.querySelector('.lightbox-container');

for (let i=0; i<cards.length;i++){
  cards[i].addEventListener('click',function(){
    lightBoxContainer.classList.replace('d-none','d-flex');
    console.log(index)
  })
}

function showLightBox(){
  let box ='';
  for ( let i=0;i<allData.length;i++){
    box +=`<div class="col-md-6 d-flex justify-content-between align-items-center">
                    <div class="light-img w-75">
                    <img src="${allData[i].thumbnail}" alt="">
                </div>
                <div class="light-disc w-75">
                    <h3 id="gameTitle">Title: ${allData[i].title}</h3>
                    <p id="gameCat">category: ${allData[i].genre} <span id="categoryBtn"></span></p>
                    <p id="gamePlatform">Platform: ${allData[i].Platform}<span id="platformBtn"></span></p>
                    <p id="gameStatus">Status: ${allData[i].short_description}<span id="statusBtn"></span></p>
                    <p id="gameDetail"></p>
                    <button class="btn btn-outline-primary"><a href="${allData[i].game_url}">Show Game</a></button>
                </div>
                </div>`
  }
  document.getElementById('lightContent').innerHTML = box;
}


