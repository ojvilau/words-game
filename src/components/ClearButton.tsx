import styles from "./ClearButton.module.css";

type ClearButtonProps = {
  onClick: () => void;
};

export default function ClearButton({ onClick }: ClearButtonProps) {
  return (
    <button onClick={onClick} className={styles.button}>
      clear word <span className={styles.icon}>X</span>
    </button>
  );
}
