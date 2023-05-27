import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { currentUserSelector } from '../../store/selectors';
import { showSignupModalAction } from '../../store/actions/modalActions';
import { removeCurrentUserAction } from '../../store/actions/currentUserActions';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import styles from './Header.module.css';

const Header = () => {
  const user = useSelector(currentUserSelector);
  const [isPopupShown, setIsPopupShown] = useState(false);
  const popup = useRef(null);
  const showPopup = () => {
    setIsPopupShown(true);
  };
  useEffect(() => {
    const hidePopUp = (e) => {
      if (popup.current && popup.current.contains(e.target)) {
        return;
      }
      if (isPopupShown) {
        setIsPopupShown(false);
      }
    };
    document.body.addEventListener('click', hidePopUp);
    return () => document.body.removeEventListener('click', hidePopUp);
  }, [isPopupShown]);
  const dispatch = useDispatch();
  const showSignupModal = () => {
    dispatch(showSignupModalAction());
  };
  const logoutUser = () => {
    dispatch(removeCurrentUserAction());
  };
  return (
    <header className={styles.root}>
      <div className={styles.left}>
        <Link to='/'>
          <Logo className={styles.logo} />
        </Link>
        <div className={styles.search}>
          <Input
            classInput={styles.input}
            placeholder='Search your products from here'
          />
          <SearchIcon className={styles.searchIcon} />
        </div>
      </div>
      <div className={styles.right}>
        {user ? (
          <div className={styles.user__wrapper}>
            <div className={styles.user} onClick={showPopup}>
              <img
                className={styles.avatar}
                alt='user_avatar'
                src={
                  user.avatar ??
                  'https://www.sico.ca/cms/getmedia/0e6ddaf2-89ad-4b91-b10b-03e0299cd835/swatch_emerald-silk__6130-73-.png'
                }
              />
            </div>
            {isPopupShown && (
              <ul className={styles.popup} ref={popup}>
                <li className={styles.popup__item}>
                  <Link className={styles.popup__link} to='/'>
                    Profile
                  </Link>
                </li>
                <li className={styles.popup__item}>
                  <Link className={styles.popup__link} to='/'>
                    Checkout
                  </Link>
                </li>
                <li className={styles.popup__item}>
                  <Link className={styles.popup__link} to='/'>
                    Order
                  </Link>
                </li>
                <li className={styles.popup__item}>
                  <span className={styles.popup__link} onClick={logoutUser}>
                    Logout
                  </span>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <Button onClick={showSignupModal}>Join</Button>
        )}
      </div>
    </header>
  );
};

export default Header;
