import React, { useState } from 'react';
import styles from '../styles/Education.module.css';

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
            image: "/images/pic4.png",
            description: "Ms in Management, Business Analytics"
        },
        {
            name: "Dr. Graham's Homes",
            image: "/images/pic2.png",
            description: "My role and achievements at University B."
        },
        {
            name: "Techno India University",
            image: "/images/pic3.png",
            description: "My role and achievements at University C."
        }
    ];

    return (
        <div className={styles.educationContainer} id="Education">
            <h2 className={styles.educationTitle}>Education</h2>
            <div className={styles.cardsContainer}>
                {schools.map((school, index) => (
                    <div key={index}>
                        <div 
                            className={styles.card} 
                            onClick={() => toggleCard(index)}
                            style={{ transform: selectedCard === index ? 'rotateY(180deg)' : 'none' }}
                        >
                            <div className={styles.front}>
                                <img src={school.image} alt={school.name} />
                            </div>
                            <div className={styles.back}>
                                <p>{school.description}</p>
                            </div>
                        </div>
                        <p className={styles.schoolName}>{school.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Education;
