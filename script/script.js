
fetch('script/data.json')
.then((response) => response.json())
.then((data)=> localStorage.setItem('players', JSON.stringify(data.players)))

const players  = JSON.parse(localStorage.getItem('players'))
players.forEach(element => {
   
    if(element.position == 'GK'){
        document.getElementById('GK').innerHTML= `
         <div class="w-full h-full grid grid-cols-2 items-center  ">
              <div class=" mt-8 flex flex-col items-center justify-end w-full">
                  <p>${element.rating}</p>
                  <p>${element.position}</p>
                  <img class="w-2 h-2" src="${element.logo}" alt="">
              </div>
              <div class="relative right-4 top-2 ">
                  <img class="h-12 w-16" src="${element.photo}" alt="">
              </div>
             
          </div>
          <div class="w-full h-full flex flex-col justify-center mb-2">
              <div class="flex flex items-center justify-center gap-1 mt-[-10px]">
                  <p>${element.name}</p>
                  <img class="w-2 h-2" src="${element.flag}" alt="">
              </div>
              <div class=" flex w-full justify-evenly text-[6px]  	">
                  <div class="flex flex-col">
                      <div class="flex gap-1 leading-none ">
                          <p>DIV</p>
                          <p>${element.diving}</p>
                      </div>
                      <div class="flex gap-1 ">
                          <p>HAN</p>
                          <p>${element.handling}</p>
                      </div>
                      <div class="flex gap-1 leading-none">
                          <p>KIC</p>
                          <p>${element.kicking}</p>
                      </div>
                  </div>
                  <div class="flex flex-col">   
                      <div class="flex gap-1 leading-none">
                          <p>REF</p>
                          <p>${element.reflexes}</p>
                      </div>
                      <div class="flex gap-1">
                          <p>DEF</p>
                          <p>86</p>
                      </div>
                      <div class="flex gap-1 leading-none">
                          <p>PHY</p>
                          <p>98</p>
                      </div>

                  </div>
                  </div>
           
          </div>
        `
    }
    
});
