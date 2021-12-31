import React, { ReactElement } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  children: ReactElement;
  onClose?: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose }) => {
  return isOpen ? (
    <div className={styles.layer}>
      <div className={styles.modalContainer}>
        {onClose && (
          <div onClick={onClose} className={styles.closeButton}>
            X
          </div>
        )}
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;
