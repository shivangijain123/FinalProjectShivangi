import Link from 'next/link';
import styles from '/styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.linksContainer}>
                <Link href="#top">
                    <span>Home</span>
                </Link>
                <Link href="#AboutMe">
                    <span>About Me</span>
                </Link>
                <Link href="#Education">
                    <span>Education</span>
                </Link>
                <Link href="#Experience">
                    <span>Experience</span>
                </Link>
                <Link href="/privacy-policy.html">
                    <span>Privacy Policy</span>
                </Link>
            </div>
            
            <div className={styles.iconsContainer}>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="/path/to/linkedin-icon.png" alt="LinkedIn" />
                </a>
                <a href="https://www.notion.so" target="_blank" rel="noopener noreferrer">
                    <img src="/path/to/notion-icon.png" alt="Notion" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
