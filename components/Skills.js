import styles from '../styles/Skills.module.css';

const Skills = () => {
    const skillsData = [
        { category: "Visualization", tools: ["Tableau", "PowerBI"] },
        { category: "Data", tools: ["Hadoop", "SQL"] },
        { category: "Wireframing", tools: ["Figma", "Adobe XD"] },
        { category: "Product Analytics", tools: ["Smartlook", "Mixpanel"] },
        { category: "Management", tools: ["Jira", "Confluence", "Miro"] },
        { category: "Front End", tools: ["HTML", "CSS", "JavaScript"] },
        { category: "Products", tools: ["Sprints", "Product Roadmap"] },
        { category: "Documentation", tools: ["PRD", "BRD", "User Story"] }
    ];

    return (
        <div className={styles.skillsSection}>
            <h2 className={styles.skillsHeading}>Skills</h2>
            <div className={styles.skillsContainer}>
                {skillsData.map(skill => (
                    <div className={styles.card} key={skill.category}>
                        <div className={styles.skillCategory}>{skill.category}</div>
                        <ul className={styles.skillList}>
                            {skill.tools.map(tool => (
                                <li key={tool}>{tool}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
