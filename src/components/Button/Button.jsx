import classNames from 'classnames';
import styles from './Button.module.css';

const Button = ({ className, children, ...props }) => {
  return (
    <button
      className={classNames({
        [className]: className,
        [styles.root]: !className,
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
