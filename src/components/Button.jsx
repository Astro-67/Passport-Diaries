import styles from './Button.module.css';

export default function Button({ children, onClick, type = "default" }) {
  return (
    <button 
      onClick={onClick} 
      className={`${styles.btn} ${styles[type]}`} // Dynamically apply the type class
    >
      {children}
    </button>
  );
}