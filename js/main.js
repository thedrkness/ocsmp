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

const openModalButton1 = document.querySelector(".open-modal1");
const openModalButton2 = document.querySelector(".open-modal2");
const openModalButton3 = document.querySelector(".open-modal3");
const openModalButton4 = document.querySelector(".open-modal4");
const openModalButton5 = document.querySelector(".open-modal5");


const modal1 = document.querySelector(".video-modal1");
const video1 = document.querySelector(".video-modal1 video");

const modal2 = document.querySelector(".video-modal2");
const video2 = document.querySelector(".video-modal2 video");

const modal3 = document.querySelector(".video-modal3");
const video3 = document.querySelector(".video-modal3 video");

const modal4 = document.querySelector(".video-modal4");
const video4 = document.querySelector(".video-modal4 video");

const modal5 = document.querySelector(".video-modal5");
const video5 = document.querySelector(".video-modal5 video");

openModalButton1.addEventListener("click", function onOpen() {
  modal1.showModal();
  video1.play();

  modal1.addEventListener("close", function onClose() {
    video1.pause();
  });
});

openModalButton2.addEventListener("click", function onOpen() {
  modal2.showModal();
  video2.play();

  modal2.addEventListener("close", function onClose() {
    video2.pause();
  });
});

openModalButton3.addEventListener("click", function onOpen() {
    modal3.showModal();
    video3.play();
  
    modal3.addEventListener("close", function onClose() {
      video3.pause();
    });
});
  

openModalButton4.addEventListener("click", function onOpen() {
  modal4.showModal();
  video4.play();

  modal4.addEventListener("close", function onClose() {
    video4.pause();
  });
  
});

openModalButton5.addEventListener("click", function onOpen() {
  modal5.showModal();
  video5.play();

  modal5.addEventListener("close", function onClose() {
    video5.pause();
  });
  
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
                    <a href="https://twitch.tv/${stream.user_name}"><p>Visit Channel </p><i class="material-icons">arrow_outward</i></a>
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
                    <a href="https://twitch.tv/${stream.display_name}"><p>Visit Channel </p> <i class="material-icons">arrow_outward</i></a>
                </div>`
            )
        }
            
    } catch (error) {
        console.log(error);
    }
}

const watchingTableItems = document.querySelector(".watchingTableItems");

data();
