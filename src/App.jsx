import { useState } from "react";
import "./App.css";
import CardTable from "./components/CardTable";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { playAgain } from "./features/game/gameSlice";

function App() {
  const [count, setCount] = useState(0);
  const points = useSelector((state) => state.game.points);
  const gameFinished = useSelector((state) => state.game.gameFinished);
  const result = points > 0;
  const dispatch = useDispatch();
  const highestScore = useSelector((state) =>
    Math.max(...[...state.game.pointsArr, 0])
  );

  return (
    <main className="">
      {!gameFinished && (
        <div className="p-2 sm:p-10">
          <h1
            className={` text-center font-bold text-2xl ${
              points < 0 ? "text-red-500" : result ? "text-blue-500" : ""
            }`}
          >
            Points: {points}
          </h1>
          <CardTable />
        </div>
      )}
      {gameFinished && (
        <div className="flex h-screen items-center justify-center flex-col">
          <h1 className="font-bold text-3xl ">
            {" "}
            Game Over! {result ? "You won!" : "You lost!"}
          </h1>
          <h2
            className={`text-xl font-semibold ${
              result ? "text-blue-500" : "text-red-500"
            }`}
          >
            Total Points: {points}
          </h2>
          <h2 className={`text-xl font-semibold`}>
            Highest Score: {highestScore}
          </h2>
          <button
            className={`p-2 mt-5 ${
              result
                ? "bg-blue-400 hover:bg-blue-500"
                : "bg-red-400 hover:bg-red-500"
            } px-3 rounded-md text-white font-semibold`}
            onClick={() => dispatch(playAgain())}
          >
            Play Again
          </button>
        </div>
      )}
      <footer className="text-center pb-10">Copyright (c) 2023 Emre Açar</footer>
    </main>
  );
}

export default App;
