import React, { ReactElement } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  children: ReactElement;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  return isOpen ? (
    <div className={styles.layer}>
      <div className={styles.modalContainer}>{children}</div>
    </div>
  ) : null;
};

export default Modal;
