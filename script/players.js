
fetch('../script/data.json')
.then((response) => response.json())
.then((data)=> localStorage.setItem('players', JSON.stringify(data.players)))

const players  = JSON.parse(localStorage.getItem('players'))
const filterPosition = document.getElementById('positions')
const addPlayerForm = document.getElementById('addPlayerForm')
const positionInputForm = document.getElementById('positionList')
const nameInputForm = document.getElementById('nameInput')
const logoInputForm = document.getElementById('logoInput')
const nationalityInputForm = document.getElementById('nationalityInput')
const flagInputForm = document.getElementById('flagInput')
const photoInputForm = document.getElementById('photoInput')
const clubInputForm = document.getElementById('clunInput')

const playerContainer = document.getElementById("players-container");
    function showPlayers(player){
        return `
        <div class="w-full flex h-[55%]">
              <div class="w-[60%] h-full flex justify-end items-end ">
                <div class="flex flex-col items-center justify-center mr-1">
                  <p>${player.rating}</p>
                  <p>${player.position}</p>
                  <img class="h-6" src="${player.logo}" alt="">
                </div>

              </div>
              <div class="h-full w-full flex  justify-end items-end">
                <div>
                  <img class="h-24 w-full relative right-4" src="${player.photo}" alt="">
                </div>
              </div>

             </div>
             <div class="w-full h-[45%] flex flex-col">
                  <div class="w-full h-[30%] flex justify-center gap-2 items-center">
                    <p>${player.name}</p>
                    <img class="h-4" src="${player.flag}" alt="">

                  </div>
                  <div class="w-full h-full flex gap-8">
                    <div class="h-full w-[50%] flex flex-col items-end text-xs">
                      <div class="flex gap-2">
                        <p>${player.position == 'GK' ? 'DIV' : 'PAC'}</p>
                        <p>${player.position == 'GK' ? player.diving : player.pace}</p>
                      </div>
                      <div class="flex gap-2">
                        <p>${player.position == 'GK' ? 'HAN' : 'SHO'}</p>
                        <p>${player.position == 'GK' ? player.handling : player.shooting}</p>
                      </div>
                      <div class="flex gap-2">
                        <p>${player.position == 'GK' ? 'KIC' : 'PAS'}</p>
                        <p>${player.position == 'GK' ? player.kicking : player.passing}</p>
                      </div>
                    </div>
                    <div class="h-full w-[50%] flex flex-col items-start text-xs">
                      <div class="flex gap-2">
                        <p>${player.position == 'GK' ? 'REF' : 'DRI'}</p>
                        <p>${player.position == 'GK' ? player.reflexes : player.dribbling}</p>
                      </div>
                      <div class="flex gap-2">
                        <p>${player.position == 'GK' ? 'SPE' : 'DEF'}</p>
                        <p>${player.position == 'GK' ? player.speed : player.defending}</p>
                      </div>
                      <div class="flex gap-2">
                        <p>${player.position == 'GK' ? 'POS' : 'PHY'}</p>
                        <p>${player.position == 'GK' ? player.positioning : player.physical}</p>
                      </div>
                    </div>


                  </div>

             </div>
        `
    }
function showAllPlayers (players){
    playerContainer.innerHTML = ``
    players.forEach(element => {
        const div = document.createElement('div')
        div.className = 'card flex flex-col justify-between items-center text-md'
        div.innerHTML = showPlayers(element)
        playerContainer.appendChild(div)

    })
}
showAllPlayers(players)

filterPosition.addEventListener('change', function(){
    console.log('filt', filterPosition.value)
    if(filterPosition.value== ""){
        showAllPlayers(players)
    }
    else
    {
    const filteredPlayers = players.filter(player=> player.position == filterPosition.value )
    showAllPlayers(filteredPlayers)}
})

positionInputForm.addEventListener("change", function(){
    if(positionInputForm.value == 'GK'){
        document.getElementById('stats-container').innerHTML= `
        <div  class="w-full flex flex-col items-end gap-2">
                        <div class="flex gap-2">
                          <label for="div">DIV</label>
                          <input id="div" class="w-12 text-center rounded-md" type="number" min="1" max="100">
                        </div>
                        <div class="flex gap-2">
                          <label for="han">HAN</label>
                          <input id="han" class="w-12 text-center rounded-md" type="number" min="1" max="100">
                        </div>
                        <div class="flex gap-2">
                          <label for="kic">KIC</label>
                          <input id="kic" class="w-12 text-center rounded-md" type="number" min="1" max="100">
                        </div>
                
                      </div>
                      <div class="w-full flex flex-col gap-2 ">
                        <div class="flex gap-2">
                          <label for="ref">REF</label>
                          <input id="ref" class="w-12 text-center rounded-md" type="number" min="1" max="100">
                        </div>
                        <div class="flex gap-2">
                          <label for="spe">SPE</label>
                          <input id="spe" class="w-12 text-center rounded-md" type="number" min="1" max="100">
                        </div>
                        <div class="flex gap-2">
                          <label for="pos">POS</label>
                          <input id="pos" class="w-12 text-center rounded-md" type="number" min="1" max="100" >
                        </div>
                      </div>  
        
        `
    }
    else if (positionInputForm.value==""){
        document.getElementById('stats-container').innerHTML= `
        <p class="text-[#ff0000]">Choose a Position</p>
        
        `
    }
    else {
        document.getElementById('stats-container').innerHTML= `
        <div  class="w-full flex flex-col items-end gap-2">
                        <div class="flex gap-2">
                          <label for="pac">PAC</label>
                          <input id="pac" class="w-12 text-center rounded-md" type="number" min="1" max="100">
                        </div>
                        <div class="flex gap-2">
                          <label for="sho">SHO</label>
                          <input id="sho" class="w-12 text-center rounded-md" type="number" min="1" max="100">
                        </div>
                        <div class="flex gap-2">
                          <label for="pas">PAS</label>
                          <input id="pas" class="w-12 text-center rounded-md" type="number" min="1" max="100">
                        </div>
                
                      </div>
                      <div class="w-full flex flex-col gap-2 ">
                        <div class="flex gap-2">
                          <label for="dri">DRI</label>
                          <input id="dri" class="w-12 text-center rounded-md" type="number" min="1" max="100">
                        </div>
                        <div class="flex gap-2">
                          <label for="def">DEF</label>
                          <input id="def" class="w-12 text-center rounded-md" type="number" min="1" max="100">
                        </div>
                        <div class="flex gap-2">
                          <label for="phy">PHY</label>
                          <input id="phy" class="w-12 text-center rounded-md" type="number" min="1" max="100" >
                        </div>
                      </div>  
        
        `
    }
})
photoInputForm.addEventListener('keyup', function(){
    if(photoInputForm.value==""){
         document.getElementById('playerImageCard').innerHTML=`<img class=" w-full relative right-4" src="../img/none.png" alt="">`
    }
    else {
         document.getElementById('playerImageCard').innerHTML=`<img class=" w-full relative right-4" src="${photoInputForm.value}" alt="">`
    }
   
})
nameInputForm.addEventListener('keyup', function(){
    if(nameInputForm.value==""){
         document.getElementById('playerNameCard').innerHTML=`<p id="playerNameCard">Player Name</p>`
    }
    else {
         document.getElementById('playerNameCard').innerHTML=`<p id="playerNameCard">${nameInputForm.value}</p>`
    }
   
})
