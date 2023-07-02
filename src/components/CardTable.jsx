import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

const CardTable = () => {
  const cardInfos = useSelector((state) => state.game.cardInfos)

  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 gap-2 xsm:gap-3 sm:gap-5 xsm:grid-cols-5 sm:px-5 py-10">
      {/* Map over cards */}
      {cardInfos.map((cardInfo, index) => (
        <Card cardInfo={cardInfo} key={index} />
      ))}
    </div>
  );
};

export default CardTable;
