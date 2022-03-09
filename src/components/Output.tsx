import styles from "./Output.module.css";

type OutputProps = {
  word: string;
  isValid: boolean;
};

export default function Output({ word, isValid }: OutputProps) {
  return (
    <div className={styles.container}>
      <span className={styles.output} style={{ color: isValid ? "#7ED321" : "#D0021B" }}>
        {word} &nbsp;
      </span>
      {word && (
        <span className={styles.result} style={{ color: isValid ? "#7ED321" : "#D0021B" }}>
          {isValid ? "valid" : "invalid"}
        </span>
      )}
    </div>
  );
}
