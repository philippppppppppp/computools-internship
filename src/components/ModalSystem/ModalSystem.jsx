import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { SIGNUP_MODAL, SIGNIN_MODAL } from '../../store/reducers/modalReducer';
import { modalSelector } from '../../store/selectors';
import SigninModal from './SigninModal/SigninModal';
import SignupModal from './SignupModal/SignupModal';

const ModalSystem = () => {
  const currentModal = useSelector(modalSelector);
  if (!currentModal) {
    return null;
  }
  let modal;
  if (currentModal === SIGNUP_MODAL) {
    modal = <SignupModal />;
  }
  if (currentModal === SIGNIN_MODAL) {
    modal = <SigninModal />;
  }
  return createPortal(modal, document.getElementById('modal'));
};

export default ModalSystem;
