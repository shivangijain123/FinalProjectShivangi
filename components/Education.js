import React, { useState } from 'react';
import styles from '../styles/Education.module.css';
import Image from 'next/image'; // Import the Image component from 'next/image'
import img1 from '..public/images/pic2.jpg';
import v3 from '..public/images/pic3.jpg';
import v1 from '..public/images/pic4.jpg';

const Education = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const toggleCard = (index) => {
        if (selectedCard === index) {
            setSelectedCard(null);
        } else {
            setSelectedCard(index);
        }
    }

    const schools = [
        {
            name: "New Jersey Institute of Technology",
            image: v1,
            description: "Ms in Management, Business Analytics"
        },
        {
            name: "Dr. Graham's Homes",
            image: img1,
            description: "My role and achievements at University B."
        },
        {
            name: "Techno India University",
            image: v3,
            description: "My role and achievements at University C."
        }
    ];

    return (
        <div className={styles.educationContainer} id="Education">
            <h2 className={styles.educationTitle}>Education</h2>
            <div className={styles.cardsContainer}>
                {schools.map((school, index) => (
                    <div key={index} className={`${styles.card} ${selectedCard === index ? styles.active : ''}`}>
                        <div 
                            className={styles.front} 
                            onClick={() => toggleCard(index)}
                        >
                            <Image src={school.image} alt={school.name} width={300} height={200} />
                        </div>
                        <div className={styles.back}>
                            <p>{school.description}</p>
                        </div>
                        <p className={styles.schoolName}>{school.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
