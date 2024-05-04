import styles from "./css_style.module.css";
import logo from "../../assets/imges/logo.jpg";

const Header = () => {
  const attributes = [
    "Platform",
    "Plans",
    "Enterprise",
    "Resources",
    "Education",
  ];
  return (
    <nav className={styles.NavBar}>
      <div className={styles.logoAttribute}>
        <section>
          <img src={logo} className={styles.logo} alt="" />
        </section>
        <section>
          <ul className={styles.ulTag}>
            {attributes.map((items, index) => {
              return <li key={index}>{items}</li>;
            })}
          </ul>
        </section>
      </div>
      <section className={styles.HeaderBtns}>
        <button className={styles.contactBtn}>Contact Us</button>
        <button className={styles.LogBtn}>Log in</button>
        <button className={styles.signIn}>Sign Up</button>
      </section>
    </nav>
  );
};

export default Header;
