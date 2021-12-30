import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Card from './components/Card';

const cardImages = [
  { src: '../img/helmet-1.png' },
  { src: '../img/potion-1.png' },
  { src: '../img/ring-1.png' },
  { src: '../img/scroll-1.png' },
  { src: '../img/shield-1.png' },
  { src: '../img/sword-1.png' },
];

export interface CardProps {
  src: string;
  id: number;
}

function App() {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [turns, setTurns] = useState<number>(0);
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
      if (choiceOne.src === choiceTwo.src) console.log('matched');
      else console.log('not matched');
      resetTurn();
    }
  }, [choiceOne, choiceTwo]);

  const handleChoice = (card: CardProps) => {
    choiceOne === null ? setChoiceOne(card) : setChoiceTwo(card);
  };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prev) => prev + 1);
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
            <Card key={card.id} {...card} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
