import styles from "./css_style.module.css";

const Body=()=>{
    return(
        <>
            <div className={styles.heroSection}>
                <h1>See value from social sooner</h1>
                <div className={styles.heroSectionPara}>
                    <p>Our training and strategic services have helped</p>
                    <p>thousands of organizations succeed on social</p>
                </div>
                <button className={styles.reqDemo}>Request a Demo</button>
            </div>
        </>
    )
}

export default Body;