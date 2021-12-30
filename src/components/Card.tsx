import React from 'react';
import styles from './Card.module.css';
import { CardProps } from '../App';

const Card: React.FC<CardProps> = ({ src }) => {
  return (
    <div>
      <div
        className={styles.card}
        style={{ backgroundImage: `url(${src})` }}
      ></div>
      <div
        className={styles.card}
        style={{ backgroundImage: 'url(../img/cover.png)' }}
      ></div>
    </div>
  );
};

export default Card;
