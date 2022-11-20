const categoryDiv = document.getElementById("categoryDiv");
const categoriesData = JSON.parse(sessionStorage.getItem("categories"));
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
                    <div class="game-containerMain"  onclick="setGamesObj('${categoryKey}',${index})">
                        <div class="game-imgContainer">
                            <img src="${game?.thumbnailUrl}" width="100%" alt="">
                        </div>
                        <div class="game-title">
                            <h4>${game?.title}</h4>
                        </div>
                    </div>
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
    } aaa()
}


const aaa = () => {
    fetch(`https://games.gamepix.com/games?sid=0Z2MR&order=d`)
        .then((response) => response.json())
        .then((data) => {
            let a = JSON.stringify(data)
            var arr = []
            data?.data.forEach((e) => {
                var obj = {
                    id: "1TS9S",
                    isSpecial: true,
                    ...e
                }

                var aaa = {
                    "id": e?.id,
                    "isSpecial": false,
                    "title": e?.title,
                    "creation": e?.creation,
                    "author": "",
                    "thumbnailUrl": e?.thumbnailUrl,
                    "thumbnailUrl100": e?.thumbnailUrl100,
                    "url": e?.url,
                    "description": e?.description,
                    "category": e?.category,
                    "categories": e?.categories,
                    "min_android_version": e?.min_android_version,
                    "rkScore": e?.rkScore
                }
                arr.push(aaa)
                console.log(aaa, "aaa");
            });
            console.log(data);
            console.log(arr);
        });
    ;


    let obj2 = {
        "id": "1TS9S",
        "isSpecial": true,
        "title": "Stickman Prison Counter Assault",
        "creation": "2022-08-21T17:12:46.154Z",
        "author": "",
        "thumbnailUrl": "https://games.assets.gamepix.com/1TS9S/thumbnail/small.png",
        "thumbnailUrl100": "https://games.assets.gamepix.com/1TS9S/thumbnail/xsmall.png",
        "url": "https://play.gamepix.com/stickman-assault-prison-strike ",
        "description": "Play as stickman prisoner or police in this free prison strike game.\n\nThe prison strike in stick city is out of control - the every stickman prisoner has a gun and is trying to escape jail! Luckily, the police swat team is launching a counter attack and shoot any terrorist stickmen.\n\n◘ Play as either a stickman prisoner or police ( swat )\n◘ Assault - style level\n◘ Easy shooting controls, lots of guns!\n◘ Lots of camping and counter - attack points\n◘ 3D stickman models",
        "category": "Adventure",
        "categories": [
            "Adventure"
        ],
        "min_android_version": 5.1,
        "rkScore": 0.7854574895142932
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


