// ./components/AboutMe.js

import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
    return (
        <div className={styles.aboutMeContainer} id="AboutMe">
            <h2 className={styles.aboutMeTitle}>About me</h2>
            <p className={styles.aboutMeDescription}>
                Passionate product manager with a sound technical foundation, constantly seeking opportunities to learn and grow. Dedicated to delivering user-centric solutions, conducting market research, and leveraging data and design to continuously optimize product experiences and drive business success.
            </p>
        </div>
    );
}

export default AboutMe;
