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

                    data?.forEach((game, index) => {
                        if (params.has('id')) {

                            // console.log(game, "rowData", params.get('id'));
                            if (game?.id === params.get('id')) {
                                // console.log(game);
                                sessionStorage.setItem('game',  (game));
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
                    location.assign("/home")
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

    objKey?.forEach((key) => {
        headerCategory.innerHTML += `
      <div class="header-categoryConatiner" onclick="{setCategoryObj('${key}')}">
          <p>${key}</p>
      </div>
      `;
        ;
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
