
const players  = JSON.parse(localStorage.getItem('players'))
const RWCard = document.getElementById('RW')
const LWCard = document.getElementById('LW')
const STCard = document.getElementById('ST')
const CB1Card = document.getElementById('CB1')
const CB2Card = document.getElementById('CB2')
const CM3Card = document.getElementById('CM3')
const CM1Card = document.getElementById('CM1')
const CM2Card = document.getElementById('CM2')
const LBCard = document.getElementById('LB')
const RBCard = document.getElementById('RB')
const GKCard = document.getElementById('GK')
let elevenPlayers = localStorage.getItem('elevenPlayers') ||[]
let subPlayers  = localStorage.getItem('subPlayers') || []
let squadPlayers  = localStorage.getItem('squadPlayers') || []
console.log(RWCard.childNodes.length)
if(RWCard.childNodes.length === 0)
{
    console.log('empty')
}


function showPlayer(player){
    return `
         <div class="w-full h-full grid grid-cols-2 items-center  ">
              <div class=" mt-8 flex flex-col items-center justify-end w-full">
                  <p>${player.rating}</p>
                  <p>${player.position}</p>
                  <img class="w-2 h-2" src="${player.logo}" alt="">
              </div>
              <div class="relative right-4 top-2 ">
                  <img class="h-12 w-16" src="${player.photo}" alt="">
              </div>
             
          </div>
          <div class="w-full h-full flex flex-col justify-center mb-2">
              <div class="flex flex items-center justify-center gap-1 mt-[-10px]">
                  <p>${player.name}</p>
                  <img class="w-2 h-2" src="${player.flag}" alt="">
              </div>
              <div class=" flex w-full justify-evenly text-[6px]  	">
                  <div class="flex flex-col">
                      <div class="flex gap-1 leading-none ">
                          <p>DIV</p>
                          <p>${player.pace}</p>
                      </div>
                      <div class="flex gap-1 ">
                          <p>HAN</p>
                          <p>${player.shooting}</p>
                      </div>
                      <div class="flex gap-1 leading-none">
                          <p>KIC</p>
                          <p>${player.passing}</p>
                      </div>
                  </div>
                  <div class="flex flex-col">   
                      <div class="flex gap-1 leading-none">
                          <p>REF</p>
                          <p>${player.dribbling}</p>
                      </div>
                      <div class="flex gap-1">
                          <p>DEF</p>
                          <p>${player.defending}</p>
                      </div>
                      <div class="flex gap-1 leading-none">
                          <p>PHY</p>
                          <p>${player.physical}</p>
                      </div>

                  </div>
                  </div>
           
          </div>
    `
}
// players.forEach(element => {
   
//     if(element.position == 'GK'){
//         document.getElementById('GK').innerHTML= `
//          <div class="w-full h-full grid grid-cols-2 items-center  ">
//               <div class=" mt-8 flex flex-col items-center justify-end w-full">
//                   <p>${element.rating}</p>
//                   <p>${element.position}</p>
//                   <img class="w-2 h-2" src="${element.logo}" alt="">
//               </div>
//               <div class="relative right-4 top-2 ">
//                   <img class="h-12 w-16" src="${element.photo}" alt="">
//               </div>
             
//           </div>
//           <div class="w-full h-full flex flex-col justify-center mb-2">
//               <div class="flex flex items-center justify-center gap-1 mt-[-10px]">
//                   <p>${element.name}</p>
//                   <img class="w-2 h-2" src="${element.flag}" alt="">
//               </div>
//               <div class=" flex w-full justify-evenly text-[6px]  	">
//                   <div class="flex flex-col">
//                       <div class="flex gap-1 leading-none ">
//                           <p>DIV</p>
//                           <p>${element.diving}</p>
//                       </div>
//                       <div class="flex gap-1 ">
//                           <p>HAN</p>
//                           <p>${element.handling}</p>
//                       </div>
//                       <div class="flex gap-1 leading-none">
//                           <p>KIC</p>
//                           <p>${element.kicking}</p>
//                       </div>
//                   </div>
//                   <div class="flex flex-col">   
//                       <div class="flex gap-1 leading-none">
//                           <p>REF</p>
//                           <p>${element.reflexes}</p>
//                       </div>
//                       <div class="flex gap-1">
//                           <p>DEF</p>
//                           <p>86</p>
//                       </div>
//                       <div class="flex gap-1 leading-none">
//                           <p>PHY</p>
//                           <p>98</p>
//                       </div>

//                   </div>
//                   </div>
           
//           </div>
//         `
//     }
//     else if ( element.position == 'ST'){
//         document.getElementById("ST").innerHTML = showPlayer(element)
//     }
//     else if ( element.position == 'LW'){
//         document.getElementById("LW").innerHTML = showPlayer(element)
//     }
//     else if ( element.position == 'LB'){
//         document.getElementById("LB").innerHTML = showPlayer(element)
//     }
//     else if ( element.position == 'RB'){
//         document.getElementById("RB").innerHTML = showPlayer(element)
//     }
//     else if ( element.position == 'RW'){
//         document.getElementById("RW").innerHTML = showPlayer(element)
//     }
//     else if ( element.position == 'CM' ||element.position == 'CDM'){
//         document.getElementById("CM1").innerHTML = showPlayer(element)
//         document.getElementById("CM2").innerHTML = showPlayer(element)
//         document.getElementById("CM3").innerHTML = showPlayer(element)


//     }
//     else if ( element.position == 'CB' ){
//         document.getElementById("CB1").innerHTML = showPlayer(element)
//         document.getElementById("CB2").innerHTML = showPlayer(element)


//     }
    
// });
function showReserveList(){
    document.getElementById("modal").style.display="block"
}
const playerContainer = document.getElementById("players-container");
    function showPlayers(player){
        return `
        <div class="w-full flex h-[55%]">
              <div class="w-[60%] h-full flex justify-end items-end ">
                <div class="flex flex-col items-center justify-center mr-1">
                  <p>${player.rating}</p>
                  <p>${player.position}</p>
                  <img class="h-6" src="${player.photo}" alt="">
                </div>

              </div>
              <div class="h-full w-full flex  justify-end items-end">
                <div>
                  <img class="h-24 w-full relative right-4" src="${player.logo}" alt="">
                </div>
              </div>

             </div>
             <div class="w-full h-[45%] flex flex-col">
                  <div class="w-full h-[30%] flex justify-center gap-2 items-center">
                    <p>${player.name}</p>
                    <img class="h-4" src="${player.photo}" alt="">

                  </div>
                  <div class="w-full h-full flex gap-8">
                    <div class="h-full w-[50%] flex flex-col items-end text-xs">
                      <div class="flex gap-2">
                        <p>${player.position == 'GK' ? 'DIV' : 'PAC'}</p>
                        <p>${player.position == 'GK' ? player.diving : playing.pace}</p>
                      </div>
                      <div class="flex gap-2">
                        <p>${player.position == 'GK' ? 'HAN' : 'SHO'}</p>
                        <p>${player.position == 'GK' ? player.handling : playing.shooting}</p>
                      </div>
                      <div class="flex gap-2">
                        <p>${player.position == 'GK' ? 'KIC' : 'PAS'}</p>
                        <p>${player.position == 'GK' ? player.kicking : playing.passing}</p>
                      </div>
                    </div>
                    <div class="h-full w-[50%] flex flex-col items-start text-xs">
                      <div class="flex gap-2">
                        <p>${player.position == 'GK' ? 'REF' : 'DRI'}</p>
                        <p>${player.position == 'GK' ? player.reflexes : playing.dribbling}</p>
                      </div>
                      <div class="flex gap-2">
                        <p>${player.position == 'GK' ? 'SPE' : 'DEF'}</p>
                        <p>${player.position == 'GK' ? player.speed : playing.defending}</p>
                      </div>
                      <div class="flex gap-2">
                        <p>${player.position == 'GK' ? 'POS' : 'PHY'}</p>
                        <p>${player.position == 'GK' ? player.positioning : playing.physical}</p>
                      </div>
                    </div>


                  </div>

             </div>
        `
    }
    // players.forEach(element => {
    //     playerContainer.innerHTML = ``
    //     const div = document.createElement('div')
    //     div.className = 'card flex flex-col justify-between items-center text-md'
    //     div.innerHTML = showPlayers(element)
    //     playerContainer.appendChild(div)

    // })
   const allCards = document.querySelectorAll('.card')
   let filteredPlayers;
   allCards.forEach(card => {
    card.addEventListener("click", function(){
        if(card.getAttribute('id') == 'RW' ) 
        {
            filteredPlayers= players.filter(player => player.position == 'RW')
            console.log(filteredPlayers)
        } 
        else if (card.getAttribute('id') == 'ST')
        {
            filteredPlayers= players.filter(player => player.position == 'ST')
            console.log(filteredPlayers)

        }
        else if (card.getAttribute('id') == 'LW')
            {
                filteredPlayers= players.filter(player => player.position == 'LW')
                console.log(filteredPlayers)

            }
         else if (card.getAttribute('id') == 'CM1')
            {
                filteredPlayers= players.filter(player => player.position == 'CM' && player.position=='CDM')
                console.log(filteredPlayers)

            }
         else if (card.getAttribute('id') == 'CM2')
            {
                filteredPlayers= players.filter(player => player.position == 'CM' && player.position=='CDM')
                console.log(filteredPlayers)

            }
         else if (card.getAttribute('id') == 'CM3')
            {
                filteredPlayers= players.filter(player => player.position == 'CM' && player.position=='CDM')
                console.log(filteredPlayers)

            }
        else if (card.getAttribute('id') == 'LB')
            {
                filteredPlayers= players.filter(player => player.position == 'LB')
                console.log(filteredPlayers)

            }
        else if (card.getAttribute('id') == 'RB')
            {
                filteredPlayers= players.filter(player => player.position == 'RB')
                console.log(filteredPlayers)

            }
        else if (card.getAttribute('id') == 'CB1')
            {
                filteredPlayers= players.filter(player => player.position == 'CB')
                console.log(filteredPlayers)

            }
        else if (card.getAttribute('id') == 'CB2')
            {
                filteredPlayers= players.filter(player => player.position == 'CB')
                console.log(filteredPlayers)

            }
        else if (card.getAttribute('id') == 'GK')
            {
                filteredPlayers= players.filter(player => player.position == 'GK')
                console.log(filteredPlayers)

            }
    })
    
   });
   function listPlayersOnModal(players){
    if(players.length == 0){
        document.getElementById('playersArea').innerHTML = `<p class="text-[#ff0000]"> NO PLAYER WITH THIS POSITION OR NAME <p>`

    }
    else {
    document.getElementById('playersArea').innerHTML = ``
    players.forEach(player => {
        document.getElementById('playersArea').innerHTML += `<div onclick="addPlayerToSquad(${player.id})" class="w-2/5  bg-[#161A1D] h-2/5 flex gap-4 rounded-md">
          <div class="h-full w-[40%]">
            <img class="h-18 w-18" src="${player.photo}" alt="">
          </div>
          <div class="h-4/5 w-[60%] flex flex-col justify-evenly">
              <p>${player.name}</p>
              <p>${player.rating}</p>
              <p>${player.position}</p>
          </div>
        </div>`
    })}

   }
   let filtPlayer = []
   let allPlayer = players
   function showPlayersOnModal(){
   
       console.log(squadPlayers.length)
       if(squadPlayers.length == 0){
           filtPlayer = players
           listPlayersOnModal(filtPlayer)
   
       }
       else {
        filtPlayer = []
           players.forEach(player => {
               let find = false;
               for(let i =0 ; i<squadPlayers.length;i++)
               {
                console.log('f')
                   if(squadPlayers[i][0].id == player.id){
                    
                       find = true
                       break;
                   }
               }
               if (!find){
                   filtPlayer.push(player)
               }
           })
           console.log(filtPlayer)
           allPlayer = filtPlayer
           listPlayersOnModal(filtPlayer)
       }
   }
   function addPlayerToSquad(idd){
    squadPlayers.push(players.filter(player => player.id == idd))
    if (elevenPlayers.length<11){
        elevenPlayers.push(players.filter(player => player.id == idd))
    } else {
        subPlayers.push(players.filter(player => player.id == idd))
    }
    console.log(squadPlayers)
    localStorage.setItem("squadPlayers", JSON.stringify(squadPlayers))
    localStorage.setItem("elevenPlayers", JSON.stringify(elevenPlayers))
    localStorage.setItem("subPlayers", JSON.stringify(subPlayers))


    showPlayersOnModal();
   }

  
    
   function showAddToSquadModal(){
  
    document.getElementById('addToSquadModal').style.display="flex"
    showPlayersOnModal()
    const pos = document.getElementById("positions")
    pos.addEventListener('change', function(){
        if(pos.value == "")
        {
            filtPlayer = allPlayer;
            listPlayersOnModal(filtPlayer)
        }
        else {
            filtPlayer = filtPlayer.filter(player => player.position == pos.value)
            listPlayersOnModal(filtPlayer)

        }
    })
    const search = document.getElementById('searchPlayer')
    search.addEventListener('keyup', function(){
        let searchedPlayers = []

        const a = search.value.toUpperCase()
        filtPlayer.forEach(player => {
            const name = player.name.toUpperCase()
            if(name.indexOf(a) > -1)
            {
                searchedPlayers.push(player)
                listPlayersOnModal(searchedPlayers)

            } else {
                listPlayersOnModal(searchedPlayers)

            }
        })


    })
   }
