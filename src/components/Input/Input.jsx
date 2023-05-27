import classNames from 'classnames';
import styles from './Input.module.css';
import { ReactComponent as ErrorIcon } from '../../assets/input_error.svg';

const Input = ({ className, classInput, error, touched, ...props }) => {
  return (
    <div className={classNames(className ?? styles.root)}>
      <input
        className={classNames({
          [classInput]: classInput,
          [styles.input]: !classInput,
          [styles.error]: error && touched,
        })}
        {...props}
      />
      {error && touched && (
        <div className={styles.errorWrapper}>
          <ErrorIcon className={styles.errorIcon} />
          <div className={styles.errorMessage}>{error}</div>
        </div>
      )}
    </div>
  );
};

export default Input;
