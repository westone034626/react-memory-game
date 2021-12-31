import { useEffect, useState } from 'react';
import styles from './App.module.css';
import Card from './components/Card';

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
      // cards가 전부 앞면이 되었을 때 호출되는 effect 함수
      console.log('done');
    }
  }, [cards]);

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
      <p>Turns: {turns}</p>
      {isDone && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,.6)',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgba(0,0,0,.95)',
              width: '100%',
              maxWidth: '370px',
              border: '3px solid rgba(255,255,255, 1)',
              borderRadius: '25px',
              boxSizing: 'border-box',
            }}
          >
            <h1>클리어</h1>
            <p>Turns: {turns}</p>
            <button style={{ marginBottom: '20px' }}>재도전</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
