/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1>DIO | Shopping</h1>
        <div className={styles.menuNavigation}>
          <Link to="/">
            <a>Home</a>
          </Link>
          <Link to="/">
            <a>Contact</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
