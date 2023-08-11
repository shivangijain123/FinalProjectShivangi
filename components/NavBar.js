// components/NavBar.js

import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" legacyBehavior>
          <a className={styles.logo}>Shivangi Jain</a>
        </Link>
        <ul className={styles.menu}>
          <li>
            <Link href="/" legacyBehavior>
              <a className={styles.menuItem}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="#AboutMe" legacyBehavior>
              <a className={styles.menuItem}>About</a>
            </Link>
          </li>
          <li>
            <Link href="#Education" legacyBehavior>
              <a className={styles.menuItem}>Education</a>
            </Link>
          </li>
          <li>
            <Link href="#Experience" legacyBehavior>
              <a className={styles.menuItem}>Experience</a>
            </Link>
          </li>
          <li>
            <Link href="#ContactMe" legacyBehavior>
              <a className={styles.menuItem}>Resume</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
