const iframeDiv = document.getElementById("iframeDiv");
const alsoPlayGameDiv = document.getElementById("alsoPlayGameDiv")
const gameLoad = () => {
    try {


        const gameData = JSON.parse(sessionStorage.getItem("game"));
        if (`${gameData}` == 'null') {
            location.replace("/")
            return
        }
        // console.log("iframeDiv", gameData);

        iframeDiv.innerHTML = `
        <iframe src="${gameData?.url}" frameborder="0" width="99.7%" height="94%" style="margin: 0.1%;" id="iframe"></iframe>
        <div class="iframeContro-container" id="iframeContro-container">
            <div class="iframeGame-img" style="width: 20%; display: flex; align-items: center;">
                <div style="width: 20%; margin: 1%; margin-right: 3%;">
                    <img src="${gameData?.thumbnailUrl100}" width="100%" alt="">
                </div>
                <div>${gameData?.title}</div>
            </div>
            <div onclick="fullscreen()">
                <svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14yq2cq" style="fill: #fff; margin-left: 20px;"
                    focusable="false" aria-hidden="true" viewBox="0 0 24 24" width="24" height="24">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M4 2C2.89543 2 2 2.89543 2 4V8C2 8.55228 2.44772 9 3 9C3.55228 9 4 8.55228 4 8V5.41421L7.79289 9.20711C8.18342 9.59763 8.81658 9.59763 9.20711 9.20711C9.59763 8.81658 9.59763 8.18342 9.20711 7.79289L5.41421 4H8C8.55228 4 9 3.55228 9 3C9 2.44772 8.55228 2 8 2H4ZM16 2C15.4477 2 15 2.44772 15 3C15 3.55228 15.4477 4 16 4H18.5858L14.7929 7.79289C14.4024 8.18342 14.4024 8.81658 14.7929 9.20711C15.1834 9.59763 15.8166 9.59763 16.2071 9.20711L20 5.41421V8C20 8.55228 20.4477 9 21 9C21.5523 9 22 8.55228 22 8V4C22 2.89543 21.1046 2 20 2H16ZM16 20L18.5858 20L14.7929 16.2071C14.4024 15.8166 14.4024 15.1834 14.7929 14.7929C15.1834 14.4024 15.8166 14.4024 16.2071 14.7929L20 18.5858V16C20 15.4477 20.4477 15 21 15C21.5523 15 22 15.4477 22 16V20C22 21.1046 21.1046 22 20 22L16 22C15.4477 22 15 21.5523 15 21C15 20.4477 15.4477 20 16 20ZM4 18.5858L7.79289 14.7929C8.18342 14.4024 8.81658 14.4024 9.20711 14.7929C9.59763 15.1834 9.59763 15.8166 9.20711 16.2071L5.41421 20H8C8.55228 20 9 20.4477 9 21C9 21.5523 8.55228 22 8 22H4C2.89543 22 2 21.1046 2 20V16C2 15.4477 2.44772 15 3 15C3.55228 15 4 15.4477 4 16L4 18.5858Z">
                    </path>
                </svg>
            </div>
        </div>
        `;
        ;

        setAlsoPlayGame(gameData?.category)
    } catch (error) {
        console.log(error);
    }
}

const setAlsoPlayGame = (key) => {
    try {
        // console.log(alsoPlayGameDiv, key);

        const categories = JSON.parse(localStorage.getItem("categories"))[key];
        categories.forEach((game, index) => {
            if (index < 10) {
                alsoPlayGameDiv.innerHTML += `
                <a class="game-containerMain" href="/?id=${game?.id}" id="gameDiv${index}">
                    <div class="game-imgContainer">
                        <img src="${game?.thumbnailUrl}" width="100%" alt="">
                    </div>
                    <div class="game-title">
                        <h4>${game?.title}</h4>
                    </div>
                </a>
            `
            }
        });
    } catch (error) {
        console.log(error);
    }
}


/// fullscreen iframe--------------------------------------------------------------------------------------//
// detect enter or exit fullscreen mode
let isFullscreen;
function fullscreen() {
    try {


        // check if fullscreen mode is available

        if (
            document.fullscreenEnabled ||
            document.webkitFullscreenEnabled ||
            document.mozFullScreenEnabled ||
            document.msFullscreenEnabled
        ) {
            // which element will be fullscreen
            var iframe = document.getElementById("iframeDiv");
            // Do fullscreen
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            }
            if (iframe.webkitRequestFullscreen) {
                iframe.webkitRequestFullscreen();
            }
            if (iframe.mozRequestFullScreen) {
                iframe.mozRequestFullScreen();
            }
            if (iframe.msRequestFullscreen) {
                iframe.msRequestFullscreen();
            }

            isFullscreen = true;
        } else {
            document.getElementById("iframeDiv").innerHTML =
                "Your browser is not supported";
        }
    } catch (error) {
        console.log(error);
    }
}

document.addEventListener("webkitfullscreenchange", fullscreenChange);
document.addEventListener("mozfullscreenchange", fullscreenChange);
document.addEventListener("fullscreenchange", fullscreenChange);
document.addEventListener("MSFullscreenChange", fullscreenChange);

function fullscreenChange() {
    try {


        if (isFullscreen) {
            document.getElementById("iframeContro-container").style.display = "none";
            document.getElementById("iframe").style.height = "100%";
            document.getElementById("iframe").style.width = "100%";
            isFullscreen = false;
        } else {
            document.getElementById("iframe").style.height = "94%";
            document.getElementById("iframe").style.width = "99.7%";
            document.getElementById("iframeContro-container").style.display = "flex";
        }

        if (
            document.fullscreenEnabled ||
            (document.webkitIsFullScreen &&
                document.mozFullScreen &&
                document.msFullscreenElement)
        ) {
            // console.log("enter fullscreen");
            return;
        }

        // console.log("exit fullscreen");

        // force to reload iframe once to prevent the iframe source didn't care about trying to resize the window
        // comment this line and you will see
        var iframe = document.getElementById("iframeDiv");
        iframe.src = iframe.src;
    } catch (error) {
        console.log(error);
    }
}
//---------------------------------------------------------------------------------//
