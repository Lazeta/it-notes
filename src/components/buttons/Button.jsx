import styles from "./Button.module.css";

const Button = ({type}) => {
    return (
        <button className={`${styles.button}`} type={type}>Add Note</button>
    );
};

export default Button;