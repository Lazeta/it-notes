import styles from "./Button.module.css";

const Button = ({type, title, onClick, className, style}) => {
    return (
        <button className={`${styles.button} ${className}`} onClick={onClick} type={type} style={style}>{title}</button>
    );
};

export default Button;