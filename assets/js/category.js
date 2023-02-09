const categoryDiv = document.getElementById("categoryDiv");
const categoriesData = JSON.parse(localStorage.getItem("categories"));
const categoryKey = JSON.parse(sessionStorage.getItem("categoryKey"))

let gamesIndex = 100;
let lastIndex = 0;
const setCategoryDiv = () => {
    try {

        if (`${categoriesData}` == 'null') {
            location.replace("/start.html")
            return
        }

        categoriesData[categoryKey]?.forEach((game, index) => {
            if (index >= lastIndex) {

                if (index <= gamesIndex) {

                    categoryDiv.innerHTML += `
                    <a class="game-containerMain" href="/?id=${game?.id}" id="gameDiv${index}">
                        <div class="game-imgContainer">
                            <img src="${game?.thumbnailUrl}" width="100%" alt="">
                        </div>
                        <div class="game-title">
                            <h4>${game?.title}</h4>
                        </div>
                    </a>
                `;
                    ;
                    lastIndex = index + 1
                }
            }

            // console.log(\\);
        });
        // categoryDiv.innerHTML += `
        //     <div id="loader">
        //         <div class="skeleton-card"></div>
        //         <div class="skeleton-card"></div>
        //         <div class="skeleton-card"></div>
        //         <div class="skeleton-card"></div>
        //         <div class="skeleton-card"></div>
        //     </div>
        //    `;
        // ;
    } catch (error) {
        console.log(error);
    }
}

const loader = (isLoader) => {
    if (!isLoader) {
        document.getElementById("loader").style.display = "none";
    } else {
        document.getElementById("loader").style.display = "flex";
    }
};

const gameIndexIncrement = () => {
    try {
        console.log(categoriesData[categoryKey]?.length);
        if (categoriesData[categoryKey]?.length - 1 >= gamesIndex) {
            gamesIndex += 8;
            if (lastIndex <= gamesIndex) {
                loader(true);
            }
            setCategoryDiv();
        } else {
            loader(false);
        }
    } catch (error) {
        console.log(error);
    }
};

window.onscroll = function (e) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
        gameIndexIncrement();
    }
};