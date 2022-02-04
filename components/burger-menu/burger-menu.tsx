import { useRef } from "react";
import styles from "./burger-menu.module.css";

const BurgerMenu: React.FC<{
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  type?: "1" | "2";
}> = ({ type = "1", opened, setOpened }) => {
  const menu = useRef<HTMLButtonElement>(null);
  const clickHandler = () => {
    setOpened((current: boolean) => !current);
    menu.current?.classList.toggle("active");
  };

  return (
    <button
      className={`${styles.menu} z-40 plate plate4 relative`}
      onClick={() => clickHandler()}
      aria-label="Main Menu"
      ref={menu}
    >
      {type === "1" ? (
        <svg width="36" height="36" viewBox="0 0 100 100">
          <path
            className={`${styles.line} ${
              !opened ? styles.line1 : styles["line1-opened"]
            }`}
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path
            className={`${styles.line} ${
              !opened ? styles.line2 : styles["line2-opened"]
            }`}
            d="M 20,50 H 80"
          />
          <path
            className={`${styles.line} ${
              !opened ? styles.line3 : styles["line3-opened"]
            }`}
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      ) : (
        type === "2" && (
          <>
            <svg
              className="burger absolute"
              version="1.1"
              height="64"
              width="64"
              viewBox="0 0 100 100"
            >
              <path className="line line1" d="M 50,35 H 30" />
              <path className="line line2" d="M 50,35 H 70" />
              <path className="line line3" d="M 50,50 H 30" />
              <path className="line line4" d="M 50,50 H 70" />
              <path className="line line5" d="M 50,65 H 30" />
              <path className="line line6" d="M 50,65 H 70" />
            </svg>
            <svg
              className="x absolute"
              version="1.1"
              height="64"
              width="64"
              viewBox="0 0 100 100"
            >
              <path className="line" d="M 34,32 L 66,68" />
              <path className="line" d="M 66,32 L 34,68" />
            </svg>
          </>
        )
      )}
    </button>
  );
};

export default BurgerMenu;
