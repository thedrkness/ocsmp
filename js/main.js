const accordion = document.getElementsByClassName('accordionItem');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('is-open')
  })
}

//

window.addEventListener("load", () => {
    document.querySelector(".ipAddress").addEventListener("click", e => {
        navigator.clipboard.writeText("39.99.3.11.02"); 
    });
});

// Player Modal 

const openModalButton = document.querySelector(".open-modal");
const modal = document.querySelector(".video-modal");
const video = document.querySelector(".video-modal video");

openModalButton.addEventListener("click", function onOpen() {
  modal.showModal();
  video.play();
});

modal.addEventListener("close", function onClose() {
  video.pause();
});


// Player Count

function initServerData(serverIp, serverPort){
    fetch('https://mcapi.us/server/status?ip='+ serverIp + '&port=' + serverPort)
    .then(response => response.json())
    .then(data => handleServerStatus(data));

    function handleServerStatus(data){
        if(data.status=='error'){
            console.log(data.error);
            return false;
        }

        const playerCounter = document.getElementById("playerCount");
        playerCounter.innerHTML = data.players.now;

        console.log(data.players.now)
    } 
}

initServerData("92.119.148.8", "25565");


// Streams
async function data(){
    try {
        const streams = await fetch('https://ocrsmp-api-4978f3c8954d.herokuapp.com/streams')
            .then(res => res.json())
    
        for(const stream of streams.online) {
            console.log(stream);
            watchingTableItems.insertAdjacentHTML(
                'beforeend',
                `<div class="watchingTableItem">
                    <p>${stream.user_name}</p>
                    <p>${stream.type}</p>
                    <p>${stream.viewer_count}</p>
                    <a href="https://twitch.tv/${stream.user_name}">Visit Channel <i class="material-icons">arrow_outward</i></a>
                </div>`
            )
        }

        for(const stream of streams.offline) {
            console.log(stream);
            watchingTableItems.insertAdjacentHTML(
                'beforeend',
                `<div class="watchingTableItem notLive">
                    <p>${stream.display_name}</p>
                    <p>Not Live</p>
                    <p>N/A</p>
                    <a href="https://twitch.tv/${stream.display_name}">Visit Channel <i class="material-icons">arrow_outward</i></a>
                </div>`
            )
        }
            
    } catch (error) {
        console.log(error);
    }
}

const watchingTableItems = document.querySelector(".watchingTableItems");

data();
