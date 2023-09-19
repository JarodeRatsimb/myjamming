import { useState, useEffect } from "react";
import styles from "../styles/Timer.module.css";
import Modal from "./Modal";

function Timer({ initialSeconds }) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <>
      <div className={styles.flexBox}>
        <h2 className={styles.flexItem}>Your session will Expire in:</h2>
        <p className={styles.flexItem}>
          {String(minutes).padStart(2, "0")}:
          {String(remainingSeconds).padStart(2, "0")}
        </p>
        <button
          className={`${styles.flexItem} ${styles.button}`}
          onClick={() => (window.location.href = window.location.origin)}
        >
          Log out
        </button>
      </div>
      {seconds === 0 ? (
        <Modal
          isOpen={true}
          message="Your session has expired..."
          time={true}
        />
      ) : null}
    </>
  );
}

export default Timer;
