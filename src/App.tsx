import { useState } from "react";
import { words } from "../public/dictionary.json";
import { board } from "../public/test-board-2.json";
import { isAdjacent } from "./utils";
import ClearButton from "./components/ClearButton";
import Output from "./components/Output";
import Tile from "./components/Tile";

import styles from "./App.module.css";

function App() {
  const [[lettersSelected], setLettersSelected] = useState([new Map()]);

  const handleSelectLetter = (letter: string, position: number) => {
    const lastLetterPosition = Array.from(lettersSelected.keys())[lettersSelected.size - 1];

    if (lastLetterPosition === undefined || isAdjacent(lastLetterPosition, position)) {
      setLettersSelected([lettersSelected.set(position, letter)]);
    }
  };

  const currentWord = Array.from(lettersSelected.values()).join("");
  const isValidWord = words.includes(currentWord.toLowerCase());

  return (
    <main className={styles.container}>
      <div className={styles.gameContainer}>
        <div className={styles.clearContainer}>
          <ClearButton onClick={() => setLettersSelected([new Map()])} />
        </div>
        <div className={styles.gridContainer}>
          {board.map((letter, i) => (
            <Tile
              text={letter}
              onClick={() => handleSelectLetter(letter, i)}
              color={lettersSelected.get(i) === letter ? (isValidWord ? "valid" : "invalid") : "unselected"}
            />
          ))}
        </div>
        <div className={styles.outputContainer}>
          <Output word={currentWord} isValid={isValidWord} />
        </div>
      </div>
    </main>
  );
}

export default App;
