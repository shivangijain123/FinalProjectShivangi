import styles from '/styles/ContactMe.module.css';

const ContactMe = () => {
    return (
        <div className={styles.contactContainer}>
            <h2 className={styles.contactTitle}>Contact Me</h2>
            <p className={styles.contactSubtitle}>Enter your email to receive my CV</p>

            <div id="mc_embed_signup">
                <form action="https://njit.us21.list-manage.com/subscribe/post?u=be22c7fe190f45b9a3f93ad61&amp;id=b738d59a42&amp;f_id=00aa58e1f0" 
                      method="post" 
                      id="mc-embedded-subscribe-form" 
                      name="mc-embedded-subscribe-form" 
                      className="validate" 
                      target="_blank">

                    <div id="mc_embed_signup_scroll">
                        <div className={styles.mcFieldGroup}>
                            <label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label>
                            <input type="email" 
                                name="EMAIL" 
                                className={`required email ${styles.emailInput}`} 
                                id="mce-EMAIL" 
                                required 
                                placeholder="Enter your email" />
                            <button type="submit" name="subscribe" id="mc-embedded-subscribe" className={styles.submitButton}>
                                Get CV
                            </button>
                        </div>
                        <div style={{position: "absolute", left: "-5000px"}}>
                            <input type="text" name="b_be22c7fe190f45b9a3f93ad61_b738d59a42" tabIndex="-1" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactMe;
