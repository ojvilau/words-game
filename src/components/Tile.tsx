import styles from "./Tile.module.css";

type TileProps = {
  color: "valid" | "invalid" | "deselected";
  onClick: () => void;
  text: string;
};

const bgColorMap = {
  valid: "linear-gradient(#B1EA4F, #459623)",
  invalid: "linear-gradient(#F5515F, #A0051C)",
  deselected: "linear-gradient(#FACF5B, #F77221)",
};

export default function Tile({ color, onClick, text }: TileProps) {
  return (
    <button
      onClick={onClick}
      className={styles.tile}
      style={{
        background: bgColorMap[color],
        border: color === "deselected" ? "2px solid #F5515F" : "none",
      }}
    >
      {text}
    </button>
  );
}
