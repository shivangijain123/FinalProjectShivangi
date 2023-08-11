import Link from 'next/link';
import styles from '/styles/Experience.module.css';

const Experience = () => {
    const experiences = [
        {
            company: "Brillio Technologies",
            role: "Senior Product Specialist",
            date: "Aug 2022- Jan 2023",
            link: "/experience/company-a"
        },
        {
            company: "Openhouse Technologies",
            role: "Associate Product Manager",
            date: "Jan 2022- Aug 2022",
            link: "/experience/company-b"
        },
        {
            company: "Mayel Lang Ro Lang",
            role: "Associate Product Manager",
            date: "March 2020- Aug 2021",
            link: "/experience/company-c"
        },
        {
            company: "Icosys Technologies",
            role: "Associate Marketing Manager",
            date: "Jan 2019 - Jan 2020",
            link: "/experience/company-d"
        }
    ];

    return (
        <div className={styles.experienceContainer} id="Experience">
            <div className={styles.titleContainer}>Experience</div>
            <div className={styles.boxesContainer}>
            {experiences.map((exp, index) => (
                <div 
                    key={index} 
                    className={styles.box} 
                    onClick={() => window.location.href = exp.link}
                 >
                    <h3>{exp.company}</h3>
                    <p>{exp.role}</p>
                    <p>{exp.date}</p>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Experience;
