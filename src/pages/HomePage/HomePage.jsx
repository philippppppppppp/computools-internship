import Categories from '../../components/Categories/Categories';
import Coupons from '../../components/Coupons/Coupons';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <main className={styles.root}>
      <div className={styles.topSection}>
        <div className={styles.titles}>
          <h1 className={styles.title}>Groceries Delivered in 90 Minute</h1>
          <h3 className={styles.subtitle}>
            Get your healthy foods & snacks delivered at your doorsteps all day
            everyday
          </h3>
        </div>
      </div>
      <Coupons />
      <div className={styles.wrapper}>
        <Categories />
      </div>
    </main>
  );
};

export default HomePage;
