import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    cardInfos: [
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
    playAgain: (state, action) => {
      state.cardInfos = state.initialCardInfos;
      state.gameFinished = false;
      state.pointsArr.push(state.points);
      state.points = 0;
    },
  },
});

export const { toggleCard, playAgain, checkOpenedCards } = gameSlice.actions;
export default gameSlice.reducer;
