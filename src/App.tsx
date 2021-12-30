import { useEffect, useState } from 'react';
import styles from './App.module.css';

const cardImages = [
  { src: '../img/helmet-1.png' },
  { src: '../img/potion-1.png' },
  { src: '../img/ring-1.png' },
  { src: '../img/scroll-1.png' },
  { src: '../img/shield-1.png' },
  { src: '../img/sword-1.png' },
];

interface CardProps {
  src: string;
  id: number;
}

function App() {
  const [cards, setCards] = useState<CardProps[]>([]);
  const [turns, setTurns] = useState<number>(0);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index }));
    setCards(shuffledCards);
    setTurns((prev) => prev + 1);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className={styles.App}>
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
      {cards.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.cardGrid}>
          {cards.map((card) => (
            <div key={card.id}>
              <div
                className={styles.card}
                style={{ backgroundImage: `url(${card.src})` }}
              ></div>
              <div
                className={styles.card}
                style={{ backgroundImage: 'url(../img/cover.png)' }}
              ></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
