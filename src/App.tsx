import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Card from './components/Card';

const cardImages = [
  { src: '../img/helmet-1.png', matched: false },
  { src: '../img/potion-1.png', matched: false },
  { src: '../img/ring-1.png', matched: false },
  { src: '../img/scroll-1.png', matched: false },
  { src: '../img/shield-1.png', matched: false },
  { src: '../img/sword-1.png', matched: false },
];

export interface CardProps {
  src: string;
  id: number;
  matched: boolean;
}

function App() {
  const [isDisable, setIsDisable] = useState(false);
  const [cards, setCards] = useState<CardProps[]>([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState<CardProps | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<CardProps | null>(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index }));
    setCards(shuffledCards);
    setTurns(0);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setIsDisable(true);
      if (choiceOne.src !== choiceTwo.src) {
        setTimeout(resetTurn, 1000);
      } else {
        setCards(
          cards.map((card) => {
            return card.src === choiceOne.src
              ? { ...card, matched: true }
              : card;
          })
        );
        resetTurn();
      }
    }
  }, [choiceOne, choiceTwo]);

  const handleChoice = (card: CardProps) => {
    if (isDisable) return;
    choiceOne === null ? setChoiceOne(card) : setChoiceTwo(card);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev) => prev + 1);
    setIsDisable(false);
  };

  return (
    <div className={styles.App}>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      {cards.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.cardGrid}>
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={
                (choiceOne ? choiceOne.id === card.id : false) ||
                (choiceTwo ? choiceTwo.id === card.id : false) ||
                card.matched
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
