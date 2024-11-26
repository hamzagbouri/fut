


const players  = JSON.parse(localStorage.getItem('players'))
const filterPosition = document.getElementById('positions')
const addPlayerForm = document.getElementById('addPlayerForm')
const positionInputForm = document.getElementById('positionList')
const nameInputForm = document.getElementById('nameInput')
const logoInputForm = document.getElementById('logoInput')
const nationalityInputForm = document.getElementById('nationalityInput')
const flagInputForm = document.getElementById('flagInput')
const photoInputForm = document.getElementById('photoInput')
const clubInputForm = document.getElementById('clubInput')
const rateInputForm = document.getElementById('rateInput')
let id =0;
players.forEach(player => {
  if (player.id > id){
    id=player.id
  }
} )



const playerContainer = document.getElementById("players-container");
    function showPlayers(player){
        return `
        <div class="w-full flex h-[55%] ">
              <div class="w-[60%] h-full flex justify-end items-end ">
                <div class="flex flex-col items-center justify-center mr-1">
                  <p>${player.rating}</p>
                  <p>${player.position}</p>
                  <img class="h-6" src="${player.logo}" alt="">
                </div>

              </div>
              <div class="h-full w-full flex  justify-center items-end">
                <div>
                  <img class="h-24 w-16 relative right-4" src="${player.photo}" alt="">
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
        div.setAttribute('dataset', element.id)
        playerContainer.appendChild(div)
        

    })
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', function(){
        console.log(card.getAttribute('dataset'))
        showModal(card.getAttribute('dataset'))
      })
    })
    
}


function statsEventListeners(){
  const stats1InputForm = document.getElementById('stats1Input')
  const stats2InputForm = document.getElementById('stats2Input')
  const stats3InputForm = document.getElementById('stats3Input')
  const stats4InputForm = document.getElementById('stats4Input')
  const stats5InputForm = document.getElementById('stats5Input')
  const stats6InputForm = document.getElementById('stats6Input')
  stats1InputForm.addEventListener('keyup', function(){
    if(stats1InputForm.value > 100 || stats1InputForm.value<0)
    {
      stats1InputForm.value=100
    }
    if(stats1InputForm.value==""){
         document.getElementById('stats1Area').innerText= 'XX'
    }
    else {
         document.getElementById('stats1Area').innerText=stats1InputForm.value
    }
   
  })
  stats2InputForm.addEventListener('keyup', function(){
    if(stats2InputForm.value > 100 || stats2InputForm.value<0)
    {
      stats2InputForm.value=100
    }
    if(stats2InputForm.value==""){
         document.getElementById('stats2Area').innerText= 'XX'
    }
    else {
         document.getElementById('stats2Area').innerText=stats2InputForm.value
    }
   
  })
  stats3InputForm.addEventListener('keyup', function(){
    if(stats3InputForm.value > 100 || stats3InputForm.value<0)
    {
      stats3InputForm.value=100
    }
    if(stats3InputForm.value==""){
         document.getElementById('stats3Area').innerText= 'XX'
    }
    else {
         document.getElementById('stats3Area').innerText=stats3InputForm.value
    }
   
  })
  stats4InputForm.addEventListener('keyup', function(){
    if(stats4InputForm.value > 100 || stats4InputForm.value<0)
    {
      stats4InputForm.value=100
    }
    if(stats4InputForm.value==""){
         document.getElementById('stats4Area').innerText= 'XX'
    }
    else {
         document.getElementById('stats4Area').innerText=stats4InputForm.value
    }
   
  })
  stats5InputForm.addEventListener('keyup', function(){
    if(stats5InputForm.value > 100 || stats5InputForm.value<0)
    {
      stats5InputForm.value=100
    }
    if(stats5InputForm.value==""){
         document.getElementById('stats5Area').innerText= 'XX'
    }
    else {
         document.getElementById('stats5Area').innerText=stats5InputForm.value
    }
   
  })
  stats6InputForm.addEventListener('keyup', function(){
    if(stats6InputForm.value > 100 || stats6InputForm.value<0)
    {
      stats6InputForm.value=100
    }
    if(stats6InputForm.value==""){
         document.getElementById('stats6Area').innerText= 'XX'
    }
    else {
         document.getElementById('stats6Area').innerText=stats6InputForm.value
    }
   
  })
  document.getElementById('from-btn').addEventListener('click', function(event) {
    event.preventDefault();
     if(positionInputForm.value.trim()=="" ||nameInputForm.value.trim()==""  ||photoInputForm.value.trim()==""  ||nationalityInputForm.value.trim()==""  ||flagInputForm.value.trim()==""  ||clubInputForm.value.trim()==""  || logoInputForm.value.trim()==""  || rateInputForm.value.trim()=="" || stats1InputForm.value.trim()=="" || stats2InputForm.value.trim()=="" || stats3InputForm.value.trim()=="" || stats4InputForm.value.trim()=="" || stats5InputForm.value.trim()=="" || stats6InputForm.value.trim()==""   ){
      document.getElementById('alter').className='slide-right'
      setTimeout(()=> {
      document.getElementById('alter').className='hidden'
      },2000)
     }
     else {
      let player ={
        id: ++id,
        name: nameInputForm.value,
        photo: photoInputForm.value,
        position: positionInputForm.value,
        nationality: nationalityInputForm.value,
        flag: flagInputForm.value,
        club: clubInputForm.value,
        logo: logoInputForm.value,
        rating: rateInputForm.value,      
      }
      if(player.position == "GK"){
        player.diving=stats1InputForm.value;
        player.handling=stats2InputForm.value;
        player.kicking=stats3InputForm.value;
        player.reflexes=stats4InputForm.value;
        player.speed=stats5InputForm.value;
        player.positioning=stats6InputForm.value;
      }else{
        player.pace=stats1InputForm.value;
        player.shooting=stats2InputForm.value;
        player.passing=stats3InputForm.value;
        player.dribbling=stats4InputForm.value;
        player.defending=stats5InputForm.value;
        player.physical=stats6InputForm.value;
      }
      console.log(player)
      players.push(player)
      
      localStorage.setItem('players', JSON.stringify(players))
      modal.style.display="none"
      showAllPlayers(players)

     }
    
    
  })
}

showAllPlayers(players)

function showModal(id=null){
  const modal = document.getElementById('modal')
  modal.style.display='flex'
  let index;
   
  if(id){
    let p = players.filter(player => player.id == id)
   
    console.log(p)
    document.getElementById("modal-title").innerText='Edit'
    document.getElementById("playerPositionCard").innerText= positionInputForm.value= p[0].position
        document.getElementById('stats1').innerText = 'PAC'
        document.getElementById('stats2').innerText = 'SHO'
        document.getElementById('stats3').innerText = 'PAS'
        document.getElementById('stats4').innerText = 'DRI'
        document.getElementById('stats5').innerText = 'DEF'
        document.getElementById('stats6').innerText = 'PHY'
        // document.getElementById('stats1Area').innerText = stats1InputForm.value = p[0].pace
        // document.getElementById('stats2Area').innerText = stats2InputForm.value = p[0].shooting
        // document.getElementById('stats3Area').innerText = stats3InputForm.value = p[0].passing
        // document.getElementById('stats4Area').innerText = stats4InputForm.value = p[0].dribbling
        // document.getElementById('stats5Area').innerText = stats5InputForm.value = p[0].defending
        // document.getElementById('stats6Area').innerText = stats6InputForm.value = p[0].physical
        document.getElementById('playerImageCard').setAttribute('src', p[0].photo)
        document.getElementById("playerImageCard").className="w-24 relative right-4"
        document.getElementById('playerFlagCard').setAttribute('src', p[0].flag)
        document.getElementById('playerLogoCard').setAttribute('src', p[0].logo)
        document.getElementById('playerNameCard').innerText=p[0].name
        document.getElementById('playerRateCard').innerText=p[0].rating
       


        





  }else{
    document.getElementById("modal-title").innerText='Add New Player'

  }

}
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
     
        document.getElementById("playerPositionCard").innerText= positionInputForm.value
        document.getElementById('stats1').innerText = 'DIV'
        document.getElementById('stats2').innerText = 'HAN'
        document.getElementById('stats3').innerText = 'KIC'
        document.getElementById('stats4').innerText = 'REF'
        document.getElementById('stats5').innerText = 'SPE'
        document.getElementById('stats6').innerText = 'POS'
        document.getElementById('stats-container').innerHTML= `
        <div  class="w-full flex flex-col items-end gap-2">
                        <div class="flex gap-2">
                          <label for="stats1Input">DIV</label>
                          <input id="stats1Input" class="w-12 text-center rounded-md" type="number" min="1" max="100">
                        </div>
                        <div class="flex gap-2">
                          <label for="stats2Input">HAN</label>
                          <input id="stats2Input" class="w-12 text-center rounded-md" type="number" min="1" max="100">
                        </div>
                        <div class="flex gap-2">
                          <label for="stats3Input">KIC</label>
                          <input id="stats3Input" class="w-12 text-center rounded-md" type="number" min="1" max="100">
                        </div>
                
                      </div>
                      <div class="w-full flex flex-col gap-2 ">
                        <div class="flex gap-2">
                          <label for="stats4Input">REF</label>
                          <input id="stats4Input" class="w-12 text-center rounded-md" type="number" min="1" max="100">
                        </div>
                        <div class="flex gap-2">
                          <label for="stats5Input">SPE</label>
                          <input id="stats5Input" class="w-12 text-center rounded-md" type="number" min="1" max="100">
                        </div>
                        <div class="flex gap-2">
                          <label for="stats6Input">POS</label>
                          <input id="stats6Input" class="w-12 text-center rounded-md" type="number" min="1" max="100" >
                        </div>
                      </div>  
        
        `
        statsEventListeners();
    }
    else if (positionInputForm.value==""){
        document.getElementById('stats-container').innerHTML= `
        <p class="text-[#ff0000]">Choose a Position</p>
        
        `
        document.getElementById("playerPositionCard").innerText='POS'
        document.getElementById('stats1').innerText = 'STS'
        document.getElementById('stats2').innerText = 'STS'
        document.getElementById('stats3').innerText = 'STS'
        document.getElementById('stats4').innerText = 'STS'
        document.getElementById('stats5').innerText = 'STS'
        document.getElementById('stats6').innerText = 'STS'
        document.getElementById('stats1Area').innerText = 'XX'
        document.getElementById('stats2Area').innerText = 'XX'
        document.getElementById('stats3Area').innerText = 'XX'
        document.getElementById('stats4Area').innerText = 'XX'
        document.getElementById('stats5Area').innerText = 'XX'
        document.getElementById('stats6Area').innerText = 'XX'
       
    }
    else {
        document.getElementById("playerPositionCard").innerText= positionInputForm.value
        document.getElementById('stats1').innerText = 'PAC'
        document.getElementById('stats2').innerText = 'SHO'
        document.getElementById('stats3').innerText = 'PAS'
        document.getElementById('stats4').innerText = 'DRI'
        document.getElementById('stats5').innerText = 'DEF'
        document.getElementById('stats6').innerText = 'PHY'
        document.getElementById('stats-container').innerHTML= `
        <div  class="w-full flex flex-col items-end gap-2">
                        <div class="flex gap-2">
                          <label for="stats1Input">PAC</label>
                          <input id="stats1Input" class="w-12 text-center rounded-md" type="number" min="1" max="100">
                        </div>
                        <div class="flex gap-2">
                          <label for="stats2Input">SHO</label>
                          <input id="stats2Input" class="w-12 text-center rounded-md" type="number" min="1" max="100">
                        </div>
                        <div class="flex gap-2">
                          <label for="stats3Input">PAS</label>
                          <input id="stats3Input" class="w-12 text-center rounded-md" type="number" min="1" max="100">
                        </div>
                
                      </div>
                      <div class="w-full flex flex-col gap-2 ">
                        <div class="flex gap-2">
                          <label for="stats4Input">DRI</label>
                          <input id="stats4Input" class="w-12 text-center rounded-md" type="number" min="1" max="100">
                        </div>
                        <div class="flex gap-2">
                          <label for="stats5Input">DEF</label>
                          <input id="stats5Input" class="w-12 text-center rounded-md" type="number" min="1" max="100">
                        </div>
                        <div class="flex gap-2">
                          <label for="stats6Input">PHY</label>
                          <input id="stats6Input" class="w-12 text-center rounded-md" type="number" min="1" max="100" >
                        </div>
                      </div>  
        
        `
        statsEventListeners();

    }


})
photoInputForm.addEventListener('keyup', function(){
    if(photoInputForm.value==""){
         document.getElementById('playerImageCard').setAttribute('src', '../img/none.png')
         document.getElementById("playerImageCard").className="w-full relative right-4"

    }
    else {
         document.getElementById('playerImageCard').setAttribute('src', photoInputForm.value)
          document.getElementById("playerImageCard").className="w-24 relative right-4"
    }
   
})
flagInputForm.addEventListener('keyup', function(){
    if(flagInputForm.value==""){
         document.getElementById('playerFlagCard').setAttribute('src', '../img/image.png')
    }
    else {
         document.getElementById('playerFlagCard').setAttribute('src', flagInputForm.value)
    }
   
})


logoInputForm.addEventListener('keyup', function(){
    if(logoInputForm.value==""){
         document.getElementById('playerLogoCard').setAttribute('src', '../img/image.png')
    }
    else {
         document.getElementById('playerLogoCard').setAttribute('src', logoInputForm.value)
    }
   
})
nameInputForm.addEventListener('keyup', function(){
    if(nameInputForm.value==""){
         document.getElementById('playerNameCard').innerText= 'Player Name'
    }
    else {
         document.getElementById('playerNameCard').innerText=nameInputForm.value
    }
   
})
rateInputForm.addEventListener('keyup', function(){
  if(rateInputForm.value > 100 || rateInputForm.value<0)
  {
    rateInputForm.value=100
  }
  if(rateInputForm.value==""){
       document.getElementById('playerRateCard').innerText= 'RT'
  }
  else {
       document.getElementById('playerRateCard').innerText=rateInputForm.value
  }
 
})



if(positionInputForm.value.trim() == ""){
  document.getElementById('from-btn').addEventListener('click', function(event) {
    event.preventDefault();
     if(positionInputForm.value.trim()=="" ||nameInputForm.value.trim()==""  ||photoInputForm.value.trim()==""  ||nationalityInputForm.value.trim()==""  ||flagInputForm.value.trim()==""  ||clubInputForm.value.trim()==""  || logoInputForm.value.trim()==""  || rateInputForm.value.trim()==""   ){
      document.getElementById('alter').className='slide-right'
      setTimeout(()=> {
      document.getElementById('alter').className='hidden'
      },2000)
     }})
}

