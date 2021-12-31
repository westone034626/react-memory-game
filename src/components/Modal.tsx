import React from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  turns: number;
  handleButton: () => void;
}

const Modal: React.FC<ModalProps> = ({ turns, handleButton }) => {
  return (
    <div className={styles.layer}>
      <div className={styles.modalContainer}>
        <h1>클리어</h1>
        <p>Turns: {turns}</p>
        <button onClick={handleButton}>다시 하기</button>
      </div>
    </div>
  );
};

export default Modal;
