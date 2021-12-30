import React from 'react';
import styles from './Card.module.css';
import { CardProps } from '../App';

interface CardComponentProps {
  card: CardProps;
  flipped: boolean;
  handleChoice: (arg1: CardProps) => void;
}

const Card: React.FC<CardComponentProps> = ({
  card,
  handleChoice,
  flipped,
}) => {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className={styles.card}>
      {flipped ? (
        <div
          className={`${styles.cardImage}`}
          style={{ backgroundImage: `url(${card.src})` }}
        ></div>
      ) : (
        <div
          className={`${styles.cardImage}`}
          style={{ backgroundImage: 'url(/react-memory-game/img/cover.png)' }}
          onClick={handleClick}
        ></div>
      )}
    </div>
  );
};

export default Card;
