import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Card from './components/Card';
import Modal from './components/Modal';

const cardImages = [
  { src: `${process.env.PUBLIC_URL}/img/helmet-1.png`, matched: false },
  { src: `${process.env.PUBLIC_URL}/img/potion-1.png`, matched: false },
  { src: `${process.env.PUBLIC_URL}/img/ring-1.png`, matched: false },
  { src: `${process.env.PUBLIC_URL}/img/scroll-1.png`, matched: false },
  { src: `${process.env.PUBLIC_URL}/img/shield-1.png`, matched: false },
  { src: `${process.env.PUBLIC_URL}/img/sword-1.png`, matched: false },
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
  const [isDone, setIsDone] = useState(true);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index }));
    setCards(shuffledCards);
    setTurns(0);
    setChoiceOne(null);
    setChoiceTwo(null);
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
  }, [choiceOne, choiceTwo, cards]);

  useEffect(() => {
    if (cards.length && cards.every((card) => card.matched)) {
      setIsDone(true);
    }
  }, [cards]);

  const handleChoice = (card: CardProps) => {
    if (isDisable) return;
    choiceOne === null ? setChoiceOne(card) : setChoiceTwo(card);
  };

  const handleModalButton = () => {
    setIsDone(false);
    shuffleCards();
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
      <button onClick={shuffleCards}>다시 하기</button>
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
      <p>Turns: {turns}</p>
      {isDone && <Modal turns={turns} handleButton={handleModalButton} />}
    </div>
  );
}

export default App;
