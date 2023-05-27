import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Modal from '../Modal/Modal';
import { showSignupModalAction } from '../../../store/actions/modalActions';
import { authenticateUserAction } from '../../../store/actions/currentUserActions';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import GoogleButton from '../../GoogleButton/GoogleButton';
import FacebookButton from '../../FacebookButton/FacebookButton';
import styles from './SigninModal.module.css';
import sharedStyles from '../Shared.module.css';

const SignupModal = () => {
  const dispatch = useDispatch();
  const showSignupModal = () => {
    dispatch(showSignupModalAction());
  };
  const formik = useFormik({
    initialValues: {
      identifier: '',
      password: '',
    },
    onSubmit(values) {
      dispatch(authenticateUserAction(values))
        .then(() => toast.success('Successful signup!'))
        .catch((err) => toast.error(err));
    },
    validationSchema: Yup.object({
      identifier: Yup.string().required('Required field'),
      password: Yup.string().required('Required field'),
    }),
  });
  return (
    <Modal>
      <h2 className={sharedStyles.title}>Welcome Back</h2>
      <h4 className={sharedStyles.subtitle}>
        Login with your email or username & password
      </h4>
      <form className={sharedStyles.form} onSubmit={formik.handleSubmit}>
        <Input
          className={sharedStyles.input}
          placeholder='Your username or email'
          {...formik.getFieldProps('identifier')}
          error={formik.errors.identifier}
          touched={formik.touched.identifier}
        />
        <Input
          className={sharedStyles.input}
          type='password'
          placeholder='Your password'
          {...formik.getFieldProps('password')}
          error={formik.errors.password}
          touched={formik.touched.password}
        />
        <Button type='submit' className={sharedStyles.button}>
          Continue
        </Button>
      </form>
      <div className={sharedStyles.or}>
        <div className={sharedStyles.orText}>or</div>
      </div>
      <FacebookButton className={sharedStyles.facebookButton} />
      <GoogleButton className={sharedStyles.googleButton} />
      <div className={sharedStyles.toAnotherModal}>
        Don’t have account yet?{' '}
        <span className={sharedStyles.link} onClick={showSignupModal}>
          Sign Up
        </span>
      </div>
      <div className={styles.resetPassword}>
        Forgot your password?{' '}
        <span className={sharedStyles.link}>Reset It</span>
      </div>
    </Modal>
  );
};

export default SignupModal;
