import React, { useEffect } from "react";
import styles from "../styles/Modal.module.css";

function Modal({
  isOpen,
  onClose,
  message,
  handleClickRedirect,
  handleClickNew,
  time,
}) {
  useEffect(() => {
    if (time)
      setTimeout(() => {
        window.location.href = window.location.origin;
      }, 3000);
  }, [time]);

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        {time ? (
          <span className={styles.close} onClick={onClose}>
            &times;
          </span>
        ) : null}
        <p>{message}</p>
        {message === "Your Playlist has been created successfully!" ? (
          <div className={styles.dialogue}>
            <button className={styles.button} onClick={handleClickRedirect}>
              Go to PlayList
            </button>
            <button className={styles.button} onClick={handleClickNew}>
              Make another PlayList
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Modal;
