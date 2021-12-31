import React from 'react';
import styles from './CompleteAlert.module.css';

interface CompleteAlertProps {
  turns: number;
  handleButton: () => void;
}

const CompleteAlert: React.FC<CompleteAlertProps> = ({
  turns,
  handleButton,
}) => {
  return (
    <div className={styles.container}>
      <h1>클리어</h1>
      <p>Turns: {turns}</p>
      <button onClick={handleButton}>다시 하기</button>
    </div>
  );
};

export default CompleteAlert;
