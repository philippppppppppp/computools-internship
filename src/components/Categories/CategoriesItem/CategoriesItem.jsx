import { useState } from 'react';
import classnames from 'classnames';
import styles from './CategoriesItem.module.css';

const CategoriesItem = ({ Icon, title, childCategories }) => {
  const [isOpenned, setIsOpenned] = useState(true);
  const toggleIsOpenned = () =>
    setIsOpenned((isChildrenOpenned) => setIsOpenned(!isChildrenOpenned));
  const children = childCategories?.map((c) => (
    <div key={c.id} className={styles.child}>
      {c.title}
    </div>
  ));
  return (
    <div className={classnames(styles.root, { [styles.openned]: isOpenned })}>
      <div className={styles.header} onClick={toggleIsOpenned}>
        <Icon className={styles.icon} />
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default CategoriesItem;
