import React from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  turns: number;
}

const Modal: React.FC<ModalProps> = ({ turns }) => {
  return (
    <div className={styles.layer}>
      <div className={styles.modalContainer}>
        <h1>클리어</h1>
        <p>Turns: {turns}</p>
        <button>재도전</button>
      </div>
    </div>
  );
};

export default Modal;
