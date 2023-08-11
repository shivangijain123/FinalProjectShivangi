import React from 'react';
import Image from 'next/image'; // Import the Image component
import styles from '../styles/AboutMe.module.css';

const AboutMe = () => {
    return (
        <div className={styles.aboutMeContainer} id="AboutMe">
            {/* Use the Image component for the background image */}
            <Image
                src="/images/pic1.jpg"
                alt="Background Image"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
            />
            <h2 className={styles.aboutMeTitle}>About me</h2>
            <p className={styles.aboutMeDescription}>
                Passionate product manager with a sound technical foundation, constantly seeking opportunities to learn and grow. Dedicated to delivering user-centric solutions, conducting market research, and leveraging data and design to continuously optimize product experiences and drive business success.
            </p>
        </div>
    );
}

export default AboutMe;
