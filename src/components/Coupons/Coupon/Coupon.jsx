import styles from './Coupon.module.css';

const Coupon = ({
  title,
  description,
  buttonText,
  gradientColors,
  width,
  margin,
}) => {
  const style = {
    background: `linear-gradient(90deg, ${gradientColors.start} 0%, ${gradientColors.end} 100%)`,
    width: `${width}px`,
    marginRight: `${margin}px`,
  };
  return (
    <div className={styles.root} style={style}>
      <div className={styles.container}>
        <h3 className={styles.title}>{title}</h3>
        <h5 className={styles.subtitle}>{description}</h5>
        <p className={styles.button}>{buttonText}</p>
      </div>
    </div>
  );
};

export default Coupon;
