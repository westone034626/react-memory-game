import React, { ReactElement, useEffect, useRef } from 'react';
import styles from './Modal.module.css';

interface ModalProps {
  isOpen: boolean;
  children: ReactElement;
  onClose: () => void;
  maskClosable?: boolean;
  closable?: boolean;
}

const useObserveOutsideClick = (f: () => void) => {
  const ref = useRef(null);
  const handleClick = (e: MouseEvent) => {
    // @ts-ignore
    if (e.target?.contains(ref.current)) f();
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
  return ref;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  children,
  onClose,
  maskClosable = false,
  closable = false,
}) => {
  const modalRef = useObserveOutsideClick(() => {
    maskClosable && onClose();
  });
  return isOpen ? (
    <div ref={modalRef} className={styles.layer}>
      <div className={styles.modalContainer}>
        {closable && (
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
