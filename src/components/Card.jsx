import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toggleCard, checkOpenedCards } from "../features/game/gameSlice";
import { useDispatch } from "react-redux";

const Card = ({ cardInfo }) => {
  // window.onload = (e) => {
  //   var cards = document.querySelectorAll(".card");

  //   [...cards].forEach((card) => {
  //     card.addEventListener("click", function () {
  //       card.classList.toggle("is-flipped");
  //     });
  //   });
  // };
  const openedCards = useSelector((state) => state.game.openedCards);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      // toggling opening and closing state of the card
      toggleCard({
        id: cardInfo.id,
        opened: cardInfo.opened,
        found: cardInfo.found,
      })
    );
    if (openedCards.length === 1) {
      setTimeout(() => {
        dispatch(checkOpenedCards({id: cardInfo.id}));
      }, 700);
    }
  };

  return (
    <div className="main-container m-auto w-[50px] h-[60px] xsm:w-[60px] xsm:h-[80px] md:w-[80px] md:h-[100px]">
      <div
        onClick={handleClick}
        className={`card ${
          cardInfo.found ? "is-flipped" : cardInfo.opened ? "is-flipped" : ""
        }`}
      >
        <div className="card__face card__face--front text-3xl flex items-center justify-center rounded-md">
          ?
        </div>
        <div
          className={` ${
            cardInfo.found ? "bg-purple-600/70" : "bg-purple-600"
          } card__face  card__face--back flex items-center justify-center rounded-md`}
        >
          <img src={cardInfo.url} className="p-2" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
