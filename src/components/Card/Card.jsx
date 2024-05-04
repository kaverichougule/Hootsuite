import styles from "./css_style.module.css"
import PropTypes from "prop-types"
export default function Card(props){
    console.log(props);
    return (
            <section className={styles.singleCard}> 
                <img src={props.url} alt="" className={styles.CardImg} />
                <h2>{props.count}</h2>
                <p>{props.desc}</p>
            </section>
    )
}

Card.propTypes={
    url:PropTypes.string,
    count: PropTypes.string,
    desc: PropTypes.string
}

