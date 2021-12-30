import React from 'react';
import styles from './Card.module.css';
import { CardProps } from '../App';

interface CardComponentProps {
  card: CardProps;
  handleChoice: (arg1: CardProps) => void;
}

const Card: React.FC<CardComponentProps> = ({ card, handleChoice }) => {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div>
      <div
        className={styles.card}
        style={{ backgroundImage: `url(${card.src})` }}
      ></div>
      <div
        className={styles.card}
        style={{ backgroundImage: 'url(../img/cover.png)' }}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Card;
