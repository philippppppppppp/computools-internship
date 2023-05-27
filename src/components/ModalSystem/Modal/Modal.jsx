import { useDispatch } from 'react-redux';
import { hideModalAction } from '../../../store/actions/modalActions';
import { stopPropagation } from '../../../utils/events';
import { ReactComponent as CrossIcon } from '../../../assets/cross.svg';
import styles from './Modal.module.css';

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const hideModal = () => dispatch(hideModalAction());
  return (
    <div className={styles.root} onClick={hideModal}>
      <div className={styles.wrapper}>
        <div className={styles.modal} onClick={stopPropagation}>
          <CrossIcon className={styles.crossIcon} onClick={hideModal} />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
