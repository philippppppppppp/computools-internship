import Button from '../Button/Button';
import styles from './FacebookButton.module.css';
import { ReactComponent as FacebookIcon } from '../../assets/facebook_icon.svg';
import classNames from 'classnames';

const FacebookButton = ({ className, ...props }) => {
  return (
    <Button
      className={classNames({
        [className]: className,
        [styles.root]: !className,
      })}
      {...props}
    >
      <FacebookIcon className={styles.icon} /> Continue with Facebook
    </Button>
  );
};

export default FacebookButton;
