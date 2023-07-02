import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    cardInfos: [
      {
        found: false,
        id: "UNc4HvgEBW0yCblEZXJsD",
        name: "ember",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ember.png",
      },
      {
        found: false,
        id: "52lcxolS95dBgwf4k8mnu",
        name: "vue",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/vue.png",
      },
      {
        found: false,
        id: "R9znd7yLUbAVk3qinhVdx",
        name: "yeoman",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yeoman.png",
      },
      {
        found: false,
        id: "EfgT9C9joT8ObYgBODl-d",
        name: "babel",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/babel.png",
      },
      {
        found: false,
        id: "ZluOYO33GAyS465zTQTFM",
        name: "angular2",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/angular2.png",
      },
      {
        found: false,
        id: "udCvmWBIyZ1cJM5TA5UAb",
        name: "browserify",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/browserify.png",
      },
      {
        found: false,
        id: "Q5NJzaX2OQvJnhA5r97nI",
        name: "yeoman",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yeoman.png",
      },
      {
        found: false,
        id: "oDH3YV8-c_vCo1C5gk6Vv",
        name: "nodejs",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/nodejs.png",
      },
      {
        found: false,
        id: "lLGCqUddYl0bWUhOy2bft",
        name: "gulp",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/gulp.png",
      },
      {
        found: false,
        id: "mBHNp2kBkg_wdKCf82UcX",
        name: "ionic",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ionic.png",
      },
      {
        found: false,
        id: "G-iEufQ4lYcAqhVCARE0_",
        name: "react",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/react.png",
      },
      {
        found: false,
        id: "E3u6PvCXDHlkZJs7jjlyW",
        name: "react",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/react.png",
      },
      {
        found: false,
        id: "YM5zY_drOxiounDsyygjQ",
        name: "grunt",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/grunt.png",
      },
      {
        found: false,
        id: "JIKg7Yu64g0LdiJmNLqsc",
        name: "grunt",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/grunt.png",
      },
      {
        found: false,
        id: "8JSh5s4u3hORRgoor1Ai0",
        name: "yarn",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yarn.png",
      },
      {
        found: false,
        id: "_9zK6F_5HUAj33QCTrJwO",
        name: "gulp",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/gulp.png",
      },
      {
        found: false,
        id: "eI6nDF9bdV4X8Miyf6bRD",
        name: "ionic",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ionic.png",
      },
      {
        found: false,
        id: "Qo9Ze2i5KrlaEXUHNfuJq",
        name: "meteor",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/meteor.png",
      },
      {
        found: false,
        id: "ZQ37z0IUGtKMftt7tPom6",
        name: "meteor",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/meteor.png",
      },
      {
        found: false,
        id: "DmoJhiwVMevEhtXEodujg",
        name: "nodejs",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/nodejs.png",
      },
      {
        found: false,
        id: "BmAk57xymBN5daCHf_TVt",
        name: "browserify",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/browserify.png",
      },
      {
        found: false,
        id: "6USolIYDlbeMV17r24tlm",
        name: "bower",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/bower.png",
      },
      {
        found: false,
        id: "XX4xRc-P4tVIIlAfaJ7xM",
        name: "ember",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ember.png",
      },
      {
        found: false,
        id: "NolkkGHh9RGxE9n9xl9ET",
        name: "yarn",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yarn.png",
      },
      {
        found: false,
        id: "xRHK6tbJL0IfVtLil5KaI",
        name: "phantomjs",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/phantomjs.png",
      },
      {
        found: false,
        id: "G0mnBsnOOcjNELGCQFX1g",
        name: "vue",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/vue.png",
      },
      {
        found: false,
        id: "50V-SS2W_fRiS4ZdG6JEI",
        name: "phantomjs",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/phantomjs.png",
      },
      {
        found: false,
        id: "yjxRCbnSKCbaxJL1tudnM",
        name: "bower",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/bower.png",
      },
      {
        found: false,
        id: "TKtDSXhAjejvyI-5KiVK-",
        name: "babel",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/babel.png",
      },
      {
        found: false,
        id: "Iii-QM81tM-9dSn9MxGa-",
        name: "angular2",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/angular2.png",
      },
    ],
    initialCardInfos: [
      {
        found: false,
        id: nanoid(),
        name: "angular2",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/angular2.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "vue",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/vue.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "react",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/react.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "grunt",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/grunt.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "phantomjs",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/phantomjs.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "ember",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ember.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "babel",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/babel.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "ionic",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ionic.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "gulp",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/gulp.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "meteor",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/meteor.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "yeoman",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yeoman.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "yarn",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yarn.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "nodejs",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/nodejs.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "bower",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/bower.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "browserify",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/browserify.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "angular2",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/angular2.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "vue",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/vue.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "react",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/react.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "grunt",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/grunt.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "phantomjs",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/phantomjs.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "ember",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ember.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "babel",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/babel.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "ionic",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/ionic.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "gulp",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/gulp.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "meteor",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/meteor.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "yeoman",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yeoman.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "yarn",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/yarn.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "nodejs",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/nodejs.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "bower",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/bower.png",
      },
      {
        found: false,
        id: nanoid(),
        name: "browserify",
        opened: false,
        url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/browserify.png",
      },
    ],
    url: "https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/",
    fileType: ".png",
    points: 0,
    openedCards: [],
    gameFinished: false,
    pointsArr: [],
  },
  reducers: {
    toggleCard: (state, action) => {
      const { id, opened } = action.payload;
      // If object not founded and there aren't more than 2 cards user can toggle opening state of the card
      if (!action.payload.found && state.openedCards.length < 2) {
        state.cardInfos = state.cardInfos.map((cardInfo) =>
          cardInfo.id === id
            ? { ...cardInfo, opened: !cardInfo.opened }
            : cardInfo
        );
        const card = state.cardInfos.find((cardInfo) => cardInfo.id === id);
        if (!opened) {
          state.openedCards.push(card);
        }
        if (opened) {
          const index = state.openedCards.findIndex((card) => card.id === id);
          state.openedCards.splice(index, 1);
        }
        console.log([...state.openedCards]);
      }
    },
    checkOpenedCards: (state, action) => {
      if (
        state.openedCards.length === 2 &&
        state.openedCards[0].id !== state.openedCards[1].id
      ) {
        if (state.openedCards[0].name === state.openedCards[1].name) {
          state.cardInfos = state.cardInfos.map((cardInfo) =>
            cardInfo.id === state.openedCards[0].id ||
            cardInfo.id === state.openedCards[1].id
              ? { ...cardInfo, found: true, opened: true }
              : { ...cardInfo }
          );
          state.points += 50;
        } else {
          state.cardInfos = state.cardInfos.map((cardInfo) =>
            cardInfo.id === state.openedCards[0].id ||
            cardInfo.id === state.openedCards[1].id
              ? { ...cardInfo, opened: false }
              : cardInfo
          );
          state.points -= 10;
        }
        state.openedCards = [];
      }

      const cardInfoObj = state.cardInfos.find(
        (cardInfo) => action.payload.id == cardInfo.id
      );

      console.log({
        id: cardInfoObj.id,
        name: cardInfoObj.name,
        opened: cardInfoObj.opened,
        found: cardInfoObj.found,
        allItems: state.cardInfos,
      });
      if (state.cardInfos.every((cardInfo) => cardInfo.found === true)) {
        state.gameFinished = true;
      }
    },
    closeAllCards: (state, action) => {
      state.cardInfos = state.cardInfos.map((cardInfo) => ({
        ...cardInfo,
        found: false,
        opened: false,
      }));
    },
    playAgain: (state, action) => {
      const renewedCards = [];
      const initialCardInfos = [...state.initialCardInfos];
      const maxLength = initialCardInfos.length;
      for (let i = 0; i < maxLength; i++) {
        const index = Math.ceil(Math.random() * (initialCardInfos.length - 1));
        renewedCards.push(initialCardInfos[index]);
        initialCardInfos.splice(index, 1);
        console.log(initialCardInfos);
      }
      state.cardInfos = renewedCards;
      state.gameFinished = false;
      state.pointsArr.push(state.points);
      state.points = 0;
      state.openedCards = [];
    },
    initGame: (state, action) => {
      const renewedCards = [];
      const initialCardInfos = [...state.initialCardInfos];
      const maxLength = initialCardInfos.length;
      for (let i = 0; i < maxLength; i++) {
        const index = Math.ceil(Math.random() * (initialCardInfos.length - 1));
        renewedCards.push(initialCardInfos[index]);
        initialCardInfos.splice(index, 1);
        console.log(initialCardInfos);
      }
      state.cardInfos = renewedCards;
    },
  },
});

export const { toggleCard, playAgain, checkOpenedCards, closeAllCards, initGame } =
  gameSlice.actions;
export default gameSlice.reducer;
