import styles from "./css_style.module.css";
import data from "../../data/data.json";
import Card from "./Card.jsx";
const CardSection = ()=>{
    console.log(data);
    return(
            <section className={styles.CardSection}>
                {
                    data.map((item, index)=>{
                        return <Card key={index} url={item.url} count={item.count} desc={item.desc} />
                    })
                }
            </section>
    )
}

export default CardSection;