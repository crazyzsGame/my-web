let categories = {};
let objKey,
    gamee4 = {};
const categoriesDiv = document.getElementById("main-div");

$("#main-div").hide();
function mathRamdom(max, min) {
    return `${`${Math.random() * (max - min) + min}`.split(".")[0]}`;
}
const params = new URLSearchParams(window.location.search);
if (params.has("url") && params.has("name") && params.has("image")) {
    sessionStorage.setItem("isDataLoaded", false);
}

if (params.has("id")) {
    sessionStorage.setItem("isDataLoaded", false);
}

const apiCall = () => {
    try {

        let SpecialGame = [];

        const isDataLoaded = sessionStorage.getItem("isDataLoaded");
        const iscategories = sessionStorage.getItem("categories");
        if (iscategories == null && isDataLoaded == null) {
            window.location.replace("start.html");
        }

        fetch(`/data/api.json`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                sessionStorage.setItem("rowData", JSON.stringify(data));
                data?.forEach((game, index) => {
                    if (game?.isSpecial) {
                        const specialObj = {
                            games: {
                                ...game,
                            },
                            GameIndex: null,
                            gameName: "candy_slash",
                        };
                        SpecialGame.push(specialObj);
                    }

                    categories[game?.category] = [];
                    gamee4[game?.category] = [];
                });
                objKey = Object.keys(categories);
                var categoriesData = '';
                objKey?.forEach((key, index) => {
                    categoriesData += `
                        <div class="categories-container">
                            <div class="categories-titleContainer">
                                <div class="categories-title">
                                    <h4>${key} Game</h4>
                                </div>
                                <div class="ViewMore-Container" onclick="setCategoryObj('${key}')">
                                    <p>View All</p>
                                </div>
                            </div>
                            <div class="categories-main"  id="${key}"></div>
                        </div>
                    `;
                    ;
                    if (index === 1) {

                        categoriesData += `
                        <div class="categories-container">
                            <div class="categories-titleContainer">
                                <div class="categories-title">
                                    
                                </div>
                                <!-- <div class="ViewMore-Container" onclick="setCategoryObj('Adventure')">
                                    <p>View All</p>
                                </div> -->
                            </div>
                            <div class="categories-main" id="">
                                <a class="game-containerMain" target="_blank" href="https://6237.play.gamezop.com/" id="gameDiv0">
                                    <div class="game-imgContainer">
                                        <img src="assets/creatives/5e35b54b-de52-4403-b480-438021518833.png" style="object-fit: fill;" width="100%" alt="">
                                    </div>
                                    <div class="game-title">
                                        <h4></h4>
                                    </div>
                                </a>

                                <a class="game-containerMain" target="_blank" href="https://6238.play.quizzop.com/" id="gameDiv1">
                                    <div class="game-imgContainer">
                                        <img src="assets/creatives/7dbbaf82-788e-437e-a0dd-e95661464db9.png" style="object-fit: fill;" width="100%" alt="">
                                    </div>
                                    <div class="game-title">
                                        <h4></h4>
                                    </div>
                                </a>

                                <a class="game-containerMain" target="_blank" href="https://6237.play.gamezop.com/" id="gameDiv2">
                                    <div class="game-imgContainer">
                                        <img src="assets/creatives/6edbd013-33ff-4562-a5a6-5eac8a154073.png" style="object-fit: fill;" width="100%" alt="">
                                    </div>
                                    <div class="game-title">
                                        <!-- <h4>Funny Shooter - Destroy all enemies</h4> -->
                                    </div>
                                </a>

                                <a class="game-containerMain" target="_blank" href="https://6237.play.gamezop.com/" id="gameDiv3">
                                    <div class="game-imgContainer">
                                        <img src="assets/creatives/7e843767-a898-48e2-8f0c-3956f251367e.png" style="object-fit: fill;" width="100%" alt="">
                                    </div>
                                    <div class="game-title">
                                        <!-- <h4>Rabbit Samurai 2</h4> -->
                                    </div>
                                </a>

                                <a class="game-containerMain" target="_blank" href="https://6237.play.gamezop.com/" id="gameDiv4">
                                    <div class="game-imgContainer">
                                        <img src="assets/creatives/8d459a93-2d4a-48dc-83a1-030077d5b75d.png" style="object-fit: fill;" width="100%" alt="">
                                    </div>
                                    <div class="game-title">
                                        <!-- <h4>Pro Obunga vs CreepEnder</h4> -->
                                    </div>
                                </a>
                            </div>
                        </div>
                      `;
                    }
                    if (index === 3) {

                        categoriesData += `
                        <div class="categories-container">
                            <div class="categories-titleContainer">
                                <div class="categories-title">
                                    
                                </div>
                                <!-- <div class="ViewMore-Container" onclick="setCategoryObj('Adventure')">
                                    <p>View All</p>
                                </div> -->
                            </div>
                            <div class="categories-main" id="">
                                <a class="game-containerMain" target="_blank" href="https://6237.play.gamezop.com/" id="gameDiv0">
                                    <div class="game-imgContainer">
                                        <img src="assets/creatives/8e5ebc17-0723-4a51-a48d-3c30047256bb.png" style="object-fit: fill;" width="100%" alt="">
                                    </div>
                                    <div class="game-title">
                                        <h4></h4>
                                    </div>
                                </a>

                                <a class="game-containerMain" target="_blank" href="https://6238.play.quizzop.com/" id="gameDiv1">
                                    <div class="game-imgContainer">
                                        <img src="assets/creatives/9b2d8716-ba8b-40b6-9575-ed79dcc5c9d8.png" style="object-fit: fill;" width="100%" alt="">
                                    </div>
                                    <div class="game-title">
                                        <h4></h4>
                                    </div>
                                </a>

                                <a class="game-containerMain" target="_blank" href="https://6237.play.gamezop.com/" id="gameDiv2">
                                    <div class="game-imgContainer">
                                        <img src="assets/creatives/9cc51d28-763c-4b48-94b6-43f098670c08.png" style="object-fit: fill;" width="100%" alt="">
                                    </div>
                                    <div class="game-title">
                                        <!-- <h4>Funny Shooter - Destroy all enemies</h4> -->
                                    </div>
                                </a>

                                <a class="game-containerMain" target="_blank" href="https://6238.play.quizzop.com/" id="gameDiv3">
                                    <div class="game-imgContainer">
                                        <img src="assets/creatives/24f2de77-95bb-4b41-9c72-262a7f9963e5.png" style="object-fit: fill;" width="100%" alt="">
                                    </div>
                                    <div class="game-title">
                                        <!-- <h4>Rabbit Samurai 2</h4> -->
                                    </div>
                                </a>

                                <a class="game-containerMain" target="_blank" href="https://6238.play.quizzop.com/" id="gameDiv4">
                                    <div class="game-imgContainer">
                                        <img src="assets/creatives/33e5a4a7-e993-4b03-be0e-34b7266e5558.png" style="object-fit: fill;" width="100%" alt="">
                                    </div>
                                    <div class="game-title">
                                        <!-- <h4>Pro Obunga vs CreepEnder</h4> -->
                                    </div>
                                </a>
                            </div>
                        </div>
                      `;
                    }
                   
                    if (index === 5) {

                        categoriesData += `
                        <div class="categories-container">
                            <div class="categories-titleContainer">
                                <div class="categories-title">
                                    
                                </div>
                                <!-- <div class="ViewMore-Container" onclick="setCategoryObj('Adventure')">
                                    <p>View All</p>
                                </div> -->
                            </div>
                            <div class="categories-main" id="">
                                <a class="game-containerMain" target="_blank" href="https://6237.play.gamezop.com/" id="gameDiv0">
                                    <div class="game-imgContainer">
                                        <img src="assets/creatives/062b42d3-2249-4173-912d-98217bbe6afd.png" style="object-fit: fill;" width="100%" alt="">
                                    </div>
                                    <div class="game-title">
                                        <h4></h4>
                                    </div>
                                </a>

                                <a class="game-containerMain" target="_blank" href="https://6237.play.gamezop.com/" id="gameDiv1">
                                    <div class="game-imgContainer">
                                        <img src="assets/creatives/67f9247e-a942-458d-80d4-65fd87a34df4.png" style="object-fit: fill;" width="100%" alt="">
                                    </div>
                                    <div class="game-title">
                                        <h4></h4>
                                    </div>
                                </a>

                                <a class="game-containerMain" target="_blank" href="https://6238.play.quizzop.com/" id="gameDiv2">
                                    <div class="game-imgContainer">
                                        <img src="assets/creatives/83e0e435-627d-45e8-9c6e-003718742ede.png" style="object-fit: fill;" width="100%" alt="">
                                    </div>
                                    <div class="game-title">
                                        <!-- <h4>Funny Shooter - Destroy all enemies</h4> -->
                                    </div>
                                </a>

                                <a class="game-containerMain" target="_blank" href="https://6237.play.gamezop.com/" id="gameDiv4">
                                <div class="game-imgContainer">
                                <img src="assets/creatives/314af315-7a94-4830-8f7b-6f27fff46f97.png" style="object-fit: fill;" width="100%" alt="">
                                </div>
                                <div class="game-title">
                                <!-- <h4>Rabbit Samurai 2</h4> -->
                                </div>
                                </a>
                                
                                <a class="game-containerMain" target="_blank" href="https://6237.play.gamezop.com/" id="gameDiv3">
                                    <div class="game-imgContainer">
                                        <img src="assets/creatives/682a6015-c198-4862-b206-ea259489fb95.png" style="object-fit: fill;" width="100%" alt="">
                                    </div>
                                    <div class="game-title">
                                        <!-- <h4>Pro Obunga vs CreepEnder</h4> -->
                                    </div>
                                </a>
                            </div>
                        </div>
                      `;
                    }
                    if (index === 6) {

                        categoriesData += `
                        <div class="categories-container">
                            <div class="categories-titleContainer">
                                <div class="categories-title">
                                    
                                </div>
                                <!-- <div class="ViewMore-Container" onclick="setCategoryObj('Adventure')">
                                    <p>View All</p>
                                </div> -->
                            </div>
                            <div class="categories-main" id="">
                                <a class="game-containerMain" target="_blank" href="https://6237.play.gamezop.com/" id="gameDiv0">
                                    <div class="game-imgContainer">
                                        <img src="assets/creatives/713fee02-17d8-4d87-9ce5-036766858ded.png" style="object-fit: fill;" width="100%" alt="">
                                    </div>
                                    <div class="game-title">
                                        <h4></h4>
                                    </div>
                                </a>

                                <a class="game-containerMain" target="_blank" href="https://6237.play.gamezop.com/" id="gameDiv1">
                                    <div class="game-imgContainer">
                                        <img src="assets/creatives/5917c284-736b-49fd-a5ec-1045b4810e3e.png" style="object-fit: fill;" width="100%" alt="">
                                    </div>
                                    <div class="game-title">
                                        <h4></h4>
                                    </div>
                                </a>

                                <a class="game-containerMain" target="_blank" href="https://6237.play.gamezop.com/" id="gameDiv2">
                                    <div class="game-imgContainer">
                                        <img src="assets/creatives/28746518-101a-4337-a46c-c1d0908cfb0b.png" style="object-fit: fill;" width="100%" alt="">
                                    </div>
                                    <div class="game-title">
                                        <!-- <h4>Funny Shooter - Destroy all enemies</h4> -->
                                    </div>
                                </a>

                                <a class="game-containerMain" target="_blank" href="https://6237.play.gamezop.com/" id="gameDiv4">
                                <div class="game-imgContainer">
                                <img src="assets/creatives/92090680-8d2d-4882-9295-bb60326b3be9.png" style="object-fit: fill;" width="100%" alt="">
                                </div>
                                <div class="game-title">
                                <!-- <h4>Rabbit Samurai 2</h4> -->
                                </div>
                                </a>
                                
                                <a class="game-containerMain" target="_blank" href="https://6237.play.gamezop.com/" id="gameDiv3">
                                    <div class="game-imgContainer">
                                        <img src="assets/creatives/baf8a028-3d10-4116-89c7-f164cc5f8266.png" style="object-fit: fill;" width="100%" alt="">
                                    </div>
                                    <div class="game-title">
                                        <!-- <h4>Pro Obunga vs CreepEnder</h4> -->
                                    </div>
                                </a>
                            </div>
                        </div>
                      `;
                    }
                    if (index === 7) {

                        categoriesData += `
                        <div class="categories-container">
                            <div class="categories-titleContainer">
                                <div class="categories-title">
                                    
                                </div>
                                <!-- <div class="ViewMore-Container" onclick="setCategoryObj('Adventure')">
                                    <p>View All</p>
                                </div> -->
                            </div>
                            <div class="categories-main" id="">
                                <a class="game-containerMain" target="_blank" href="https://6237.play.gamezop.com/" id="gameDiv0">
                                    <div class="game-imgContainer">
                                        <img src="assets/creatives/de4e3baa-649f-4523-9d70-549a6584aa7e.png" style="object-fit: fill;" width="100%" alt="">
                                    </div>
                                    <div class="game-title">
                                        <h4></h4>
                                    </div>
                                </a>

                                <a class="game-containerMain" target="_blank" href="https://6237.play.gamezop.com/" id="gameDiv1">
                                    <div class="game-imgContainer">
                                        <img src="assets/creatives/ea86249d-eb56-4be1-b7ec-9dd842fe03bd.png" style="object-fit: fill;" width="100%" alt="">
                                    </div>
                                    <div class="game-title">
                                        <h4></h4>
                                    </div>
                                </a>

                                <a class="game-containerMain" target="_blank" href="https://6237.play.gamezop.com/" id="gameDiv2">
                                    <div class="game-imgContainer">
                                        <img src="assets/creatives/ecba6485-a322-4fea-98af-066efcceb788.png" style="object-fit: fill;" width="100%" alt="">
                                    </div>
                                    <div class="game-title">
                                        <!-- <h4>Funny Shooter - Destroy all enemies</h4> -->
                                    </div>
                                </a>

                                <a class="game-containerMain" target="_blank" href="https://6237.play.gamezop.com/" id="gameDiv4">
                                <div class="game-imgContainer">
                                <img src="assets/creatives/eb223c41-4c3b-4bf2-b591-25d6185d3d72.png" style="object-fit: fill;" width="100%" alt="">
                                </div>
                                <div class="game-title">
                                <!-- <h4>Rabbit Samurai 2</h4> -->
                                </div>
                                </a>
                                
                                <a class="game-containerMain" target="_blank" href="https://6237.play.gamezop.com/" id="gameDiv3">
                                    <div class="game-imgContainer">
                                        <img src="assets/creatives/0cf68e5d-46c6-47a2-9e0d-d91d391a9c04.png" style="object-fit: fill;" width="100%" alt="">
                                    </div>
                                    <div class="game-title">
                                        <!-- <h4>Pro Obunga vs CreepEnder</h4> -->
                                    </div>
                                </a>
                            </div>
                        </div>
                      `;
                    }
                    data?.forEach((game, index) => {
                        if (params.has('id')) {

                            // console.log(game, "rowData", params.get('id'));
                            if (game?.id === params.get('id')) {
                                // console.log(game);
                                sessionStorage.setItem('game', (game));
                                location.assign('games.html');
                                return
                            }
                        }

                        if (key == game?.category) {
                            categories[key].push(game);
                        }


                        if (key == game?.category) {
                            /// 4games
                            const categoriesLength = categories[key].length;
                            gamee4[key][0] = categories[key][0];
                            gamee4[key][1] = categories[key][1];
                            gamee4[key][2] = categories[key][2];
                            gamee4[key][3] = categories[key][3];
                            gamee4[key][4] = categories[key][4];
                            // gamee4[key][5] = categories[key][5];
                        }
                    });
                });

                sessionStorage.setItem("categoriesData", categoriesData);
                sessionStorage.setItem('gamee4', JSON.stringify(gamee4));
                sessionStorage.setItem("categories", JSON.stringify(categories));
                localStorage.setItem("categories", JSON.stringify(categories));

                if (!params.has("id") || !params.has("category")) {
                    location.replace("/home")
                }
                if (params.has("url") && params.has("name") && params.has("image")) {

                    const gameObj = {
                        title: params.get("name"),
                        url: params.get("url"),
                        thumbnailUrl: params.get("image"),
                        thumbnailUrl100: params.get("image"),
                        description: "",
                    };
                    sessionStorage.setItem("game", JSON.stringify(gameObj));
                    // location.assign("games.html");
                }


            })
            .catch((e) => {
                console.log(e);
            });

    } catch (e) {
        console.log(e);
    }
};

const setData = async () => {
    try {

        // setHeader();
        const categoriesData = await sessionStorage.getItem("categoriesData");
        categoriesDiv.innerHTML += `${categoriesData}`;
        const gamee4 = await JSON.parse(sessionStorage.getItem("gamee4"));

        const objKey = Object.keys(gamee4);

        objKey?.forEach((key) => {

            const div = document.getElementById(`${key}`);
            // console.log(key, "key",gamee4[key]);
            gamee4[key]?.forEach((game, index) => {
                if (game?.category == key) {
                    // console.log(game?.id);
                    div.innerHTML += `
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
                }
            });
        });
        setSroll();
        // ShowPopup();
        $("#main-div").show();
    } catch (error) {
        console.log(error);
    }
};

// header
const setHeader = () => {
    $("#header").css("display", "flex");

    objKey = Object.keys(categories);
    const headerCategory = document.getElementById("headerCategory");

    objKey?.forEach((key, index) => {
        headerCategory.innerHTML += `
      <div class="header-categoryConatiner" onclick="{setCategoryObj('${key}')}">
          <p>${key}</p>
      </div>
      `;
    });
};
// ---header

// setSroll
const setSroll = async () => {
    const game = await JSON.parse(sessionStorage.getItem("specialGame"));
    const mostPlayedContainer = await document.getElementById("mostPlayedContainer");

    game?.forEach((games, index) => {
        if (index < 8) {
            mostPlayedContainer.innerHTML += `
                <div class="mostPlayed-game" onclick="setMostPlayed(${index})">
                    <img src="${games?.games?.thumbnailUrl}" width="100%" alt="earth_hero">
                    </div>
                    `;
            ;
            // <h4>${games?.games?.title}</h4>
        } else {
            return {};
        }
    });

    mostPlayedContainer.innerHTML += `
        <div class="mostPlayed-moreContainer">
            <a href="">
                <h4>
                    <div>
                        100+ More
                    </div>
                </h4>
            </a>
        </div>
        `;
    ;
};
// ---setSroll

const setGamesObj = (keys, index) => {
    try {
        const games = JSON.parse(sessionStorage.getItem("categories"));
        // console.log(keys);
        const game = games[keys][index];
        sessionStorage.setItem("game", JSON.stringify(game));
        location.assign("/game.html")
    } catch (error) {
        console.log(error);
    }
};

const setCategoryObj = (key) => {
    sessionStorage.setItem("categoryKey", JSON.stringify(key));
    location.assign("category.html");
};

const setMostPlayed = (key) => {
    const game = JSON.parse(sessionStorage.getItem("specialGame"));
    // console.log(game[key], key);
    sessionStorage.setItem("game", JSON.stringify(game[key].games));
    location.assign("game.html");
};

let isDropDown = false;

const dropDown = () => {
    isDropDown ? (isDropDown = false) : (isDropDown = true);
    if (isDropDown) {
        $("#minHeaderCategory").show();
    } else {
        $("#minHeaderCategory").hide();
    }
};
// setSearch
const setSearch = (isSearch) => {
    if (isSearch) {
        $("#search").show();
        const games = JSON.parse(sessionStorage.getItem("specialGame"));
        const searchShow = document.getElementById("searchShow");

        games?.forEach((game, index) => {
            if (index < 6) {
                searchShow.innerHTML += `
          <div class="search-game" onclick="setMostPlayed(${index})">
              <div class="search-gameImg">
                  <img src="${game?.games?.thumbnailUrl}" width="100%" alt="">
              </div>
              <div class="search-gameDescription-container">
                  <div class="search-gameName">
                      <p>${game?.games?.title}</p>
                  </div>
                  <div class="search-gameDescription">
                      <p>
                       ${game?.games?.description}
                      </p>
                  </div>
              </div>
          </div>
          `;
                ;
            } else {
                return {};
            }
        });
    } else {
        $("#search").hide();
    }
};
// ---setSearch

// document.onselectstart = new Function("return false");

if ('serviceWorker' in navigator) {
    try {
        navigator.serviceWorker.register("sw.js").then(r => {
            // console.log(r);
        }).catch(error => {
            console.log(error)
        })
    } catch (error) {
        console.log(error);
    }
}
// https://www.fiverr.com/users/ritikadhankecha/manage_gigs/new?wizard=0&tab=general