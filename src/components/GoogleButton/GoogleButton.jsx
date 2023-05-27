import Button from '../Button/Button';
import styles from './GoogleButton.module.css';
import { ReactComponent as GoogleIcon } from '../../assets/google_icon.svg';
import classNames from 'classnames';

const GoogleButton = ({ className, ...props }) => {
  const signinViaGoogle = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/connect/google`;
  };
  return (
    <Button
      className={classNames({
        [className]: className,
        [styles.root]: !className,
      })}
      {...props}
      onClick={signinViaGoogle}
    >
      <GoogleIcon className={styles.icon} /> Continue with Google
    </Button>
  );
};

export default GoogleButton;
