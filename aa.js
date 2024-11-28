const joueurContainer = document.getElementById("joueurs-carte");
const positionPlayer = document.getElementById("PositionPlayer");
const statPlayers = document.getElementById("playersSta");

const nomForm = document.getElementById("name");
const photoForm = document.getElementById("photo");
const nationalityForm =document.getElementById("nationality");
const flagForm = document.getElementById("flag");
const clubForm = document.getElementById("club");
const logoForm = document.getElementById("logo");
const ratingForm = document.getElementById("rating");

// GARDIENT
const divForm = document.getElementById("div");
const hanForm = document.getElementById("han");
const kickForm = document.getElementById("kicK");
const refForm = document.getElementById("ref");
const speForm = document.getElementById("spe");
const posForm = document.getElementById("pos");

// Player
const pacForm = document.getElementById("pac");
const shoForm = document.getElementById("sho");
const pasForm = document.getElementById("pas");
const driForm = document.getElementById("dri");
const defForm = document.getElementById("def");
const phyForm = document.getElementById("phy");



    const jsonFile="../data.json";
    fetch(jsonFile)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur lors de la récupération du fichier JSON");
            }
            return response.json();
        })
        .then(data => {
            localStorage.setItem("players",JSON.stringify(data.players))
        })
        .catch(error => console.error("Erreur :", error));
const players = JSON.parse(localStorage.getItem("players"));
console.log(players);

function showPlayers(){
    players.forEach(player => {
        joueurContainer.innerHTML += `
            <div class="relative">
                <img id="LW" class=" w-60" src="../images/card.png" alt="LW">
                <img class="absolute left-[29%] top-[15%] w-[120px] h-[120px]" src="${player.photo}">
                <span class=" absolute left-[24%] top-[22%] text-[22px] text-customText ">${player.rating}</span>
                <P class="absolute left-[24%] top-[32%] text-customText ">${player.position}</p>
                <img class="absolute left-[26%] top-[40%] w-[16px] h-[16px]" src="${player.logo}">
                <p class="name whitespace-nowrap absolute left-[28%] top-[52%] font-extralight text-customText">${player.name}</p>
                <img class="absolute left-[65%]  top-[53%] font-extralight w-[18] h-[18px] " src="${player.flag}" alt="">
                <p class="text-[6px] whitespace-nowrap absolute left-[28%] top-[64%]  font-extralight text-customText">${player.position == 'GK' ? player.diving : player.pace} ${player.position == 'GK' ? 'DIV' : 'PAC'} </p>
                <p class="text-[6px] whitespace-nowrap absolute left-[28%] top-[69%]  font-extralight text-customText">${player.position == 'GK' ? player.handling : player.shooting} ${player.position == 'GK' ? 'HAN' : 'SHO'} </p>
                <p class="text-[6px] whitespace-nowrap absolute left-[28%] top-[75%]  font-extralight text-customText">${player.position == 'GK' ? player.kicking : player.passing} ${player.position == 'GK' ? 'KICK' : 'PAS'} </p>
                <p class="text-[6px] whitespace-nowrap absolute left-[57%] top-[64%]  font-extralight text-customText">${player.position == 'GK' ? player.reflexes : player.dribbling} ${player.position == 'GK' ? 'REF' : 'DRI'} </p>
                <p class="text-[6px] whitespace-nowrap absolute left-[57%] top-[69%]  font-extralight text-customText">${player.position == 'GK' ? player.speed : player.defending} ${player.position == 'GK' ? 'SPE' : 'DEF'} </p>
                <p class="text-[6px] whitespace-nowrap absolute left-[57%] top-[75%]  font-extralight text-customText">${player.position == 'GK' ? player.positioning : player.physical} ${player.position == 'GK' ? 'POS' : 'PHY'} </p>
            </div> 
        `
        
    });

}
showPlayers();

positionPlayer.addEventListener("change",function(){
    if(positionPlayer.value == "GK"){
        statPlayers.innerHTML=`
            <div class="flex flex-col gap-3">
                        <div class="flex items-center gap-3">
                            <label " class="text-sm font-semibold text-white">Diving</label>
                            <input id="div" 
                                class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                type="number" min="1" max="100">
                        </div>
                        <div class="flex items-center gap-3">
                            <label  class="text-sm font-semibold text-white">handling</label>
                            <input id="han" 
                                class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                type="number" min="1" max="100">
                        </div>
                        <div class="flex items-center gap-3">
                            <label  class="text-sm font-semibold text-white">Kicking</label>
                            <input id="kic" 
                                class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                type="number" min="1" max="100">
                        </div>
                    </div>
                    <div class="flex flex-col gap-3">
                        <div class="flex items-center gap-3">
                            <label  class="text-sm font-semibold text-white">Reflexes</label>
                            <input id="ref" 
                                class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                type="number" min="1" max="100">
                        </div>
                        <div class="flex items-center gap-3">
                            <label  class="text-sm font-semibold text-white">Speed</label>
                            <input id="spe" 
                                class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                type="number" min="1" max="100">
                        </div>
                        <div class="flex items-center gap-3">
                            <label  class="text-sm font-semibold text-white">Positioning</label>
                            <input id="pos" 
                                class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                type="number" min="1" max="100">
                        </div>
                    </div>
        `
    }else{
        statPlayers.innerHTML=`
        <div class="flex flex-col gap-3">
                        <div class="flex items-center gap-3">
                            <label  class="text-sm font-semibold text-white">PAC</label>
                            <input id="pac" 
                                class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                type="number" min="1" max="100">
                        </div>
                        <div class="flex items-center gap-3">
                            <label  class="text-sm font-semibold text-white">SHO</label>
                            <input id="sho" 
                                class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                type="number" min="1" max="100">
                        </div>
                        <div class="flex items-center gap-3">
                            <label  class="text-sm font-semibold text-white">PAS</label>
                            <input id="pas" 
                                class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                type="number" min="1" max="100">
                        </div>
                    </div>
                    <div class="flex flex-col gap-3">
                        <div class="flex items-center gap-3">
                            <label  class="text-sm font-semibold text-white">DRI</label>
                            <input id="dri" 
                                class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                type="number" min="1" max="100">
                        </div>
                        <div class="flex items-center gap-3">
                            <label  class="text-sm font-semibold text-white">DEF</label>
                            <input id="def" 
                                class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                type="number" min="1" max="100">
                        </div>
                        <div class="flex items-center gap-3">
                            <label  class="text-sm font-semibold text-white">PHY</label>
                            <input id="phy" 
                                class="w-32 p-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                type="number" min="1" max="100">
                        </div>
                    </div>
        `
    }
})

function addPlayer(e){
    e.preventDefault();
    console.log(pacForm);
    
    let playerAjouter ={
        name: nomForm.value,
        photo: photoForm.value,
        nationality:nationalityForm.value,
        flag:flagForm.value,
        club:clubForm.value,
        logo:clubForm.value,
        rating:ratingForm.value,
    }
    if (playerAjouter.position == "GK") {
        playerAjouter.diving = divForm.value;
        playerAjouter.handling = hanForm.value;
        playerAjouter.kicking = kickForm.value;
        playerAjouter.reflexes = refForm.value;
        playerAjouter.speed = speForm.value;
        playerAjouter.positioning = posForm.value;
        
    }else{
        playerAjouter.pace = pacForm.value;
        playerAjouter.shooting = shoForm.value;
        playerAjouter.passing = pasForm.value;
        playerAjouter.dribbling = driForm.value;
        playerAjouter.defending=defForm.value;
        playerAjouter.physical=phyForm.value;
    }
    console.log(playerAjouter);
    
    
}

document.getElementById('btnAdd').addEventListener('click', (event) => addPlayer(event));
