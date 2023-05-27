import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import Modal from '../Modal/Modal';
import { showSigninModalAction } from '../../../store/actions/modalActions';
import { registerUserAction } from '../../../store/actions/currentUserActions';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import GoogleButton from '../../GoogleButton/GoogleButton';
import FacebookButton from '../../FacebookButton/FacebookButton';
import styles from './SignupModal.module.css';
import sharedStyles from '../Shared.module.css';

const SignupModal = () => {
  const dispatch = useDispatch();
  const showSigninModal = () => {
    dispatch(showSigninModalAction());
  };
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit({ username, email, password }) {
      dispatch(registerUserAction({ username, email, password }))
        .then(() => toast.success('Successful signup!'))
        .catch((err) => toast.error(err));
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required field'),
      email: Yup.string().email('Invalid email').required('Required field'),
      password: Yup.string()
        .min(6, 'Password length from 6 to 25 characters')
        .max(25, 'Password length from 6 to 25 characters')
        .required('Required field'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Both password need to be the same')
        .required('Required field'),
    }),
  });
  return (
    <Modal>
      <h2 className={sharedStyles.title}>Sign Up</h2>
      <h4 className={sharedStyles.subtitle}>Welcome!</h4>
      <form className={sharedStyles.form} onSubmit={formik.handleSubmit}>
        <Input
          className={sharedStyles.input}
          placeholder='Your username'
          {...formik.getFieldProps('username')}
          error={formik.errors.username}
          touched={formik.touched.username}
        />
        <Input
          className={sharedStyles.input}
          placeholder='Your email'
          {...formik.getFieldProps('email')}
          error={formik.errors.email}
          touched={formik.touched.email}
        />
        <Input
          className={sharedStyles.input}
          type='password'
          placeholder='Your password'
          {...formik.getFieldProps('password')}
          error={formik.errors.password}
          touched={formik.touched.password}
        />
        <Input
          className={sharedStyles.input}
          type='password'
          placeholder='Confirm password'
          {...formik.getFieldProps('confirmPassword')}
          error={formik.errors.confirmPassword}
          touched={formik.touched.confirmPassword}
        />
        <div className={styles.terms}>
          By signing up, you agree to Pickbazar's{' '}
          <Link className={styles.termsLink} to='/'>
            Terms & Condtion
          </Link>
        </div>
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
        Already have an account?{' '}
        <span className={sharedStyles.link} onClick={showSigninModal}>
          Login
        </span>
      </div>
    </Modal>
  );
};

export default SignupModal;
