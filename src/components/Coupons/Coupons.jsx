import { useState, useRef } from 'react';
import styles from './Coupons.module.css';
import { ReactComponent as ButtonLeftIcon } from '../../assets/coupons_left.svg';
import { ReactComponent as ButtonRightIcon } from '../../assets/coupons_right.svg';
import Coupon from './Coupon/Coupon';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { couponsSelector } from '../../store/selectors';

const Coupons = () => {
  const coupons = useSelector(couponsSelector);
  const [position, setPosition] = useState(0);
  const couponsDOM = useRef();
  const couponWidth = 790;
  const couponMargin = 40;
  const couponWithMargin = couponWidth + couponMargin;

  const scrollToLeft = () =>
    setPosition((pos) =>
      pos + couponWithMargin >= 0 ? 0 : pos + couponWithMargin
    );
  const scrollToRight = () =>
    setPosition((pos) => {
      const couponsWidth = couponsDOM.current.offsetWidth;
      const totalWidth =
        coupons.length * couponWidth + (coupons.length - 1) * couponMargin;
      return pos - couponWithMargin - couponsWidth <= -totalWidth
        ? couponsWidth - totalWidth
        : pos - couponWithMargin;
    });
  const couponsList = coupons?.map(
    ({ id, title, description, buttonText, gradientColors }, index) => (
      <Coupon
        key={id}
        title={title}
        description={description}
        buttonText={buttonText}
        gradientColors={gradientColors}
        width={couponWidth}
        margin={index === coupons.length - 1 ? 0 : couponMargin}
      />
    )
  );
  const wrapperTranslateStyle = {
    transform: `translateX(${position}px)`,
  };

  return (
    <div className={styles.root}>
      <div className={styles.coupons} ref={couponsDOM}>
        <div className={styles.wrapper} style={wrapperTranslateStyle}>
          {couponsList}
        </div>
      </div>
      <div
        className={classNames(styles.button, styles.buttonL)}
        onClick={scrollToLeft}
      >
        <ButtonLeftIcon className={styles.icon} />
      </div>
      <div
        className={classNames(styles.button, styles.buttonR)}
        onClick={scrollToRight}
      >
        <ButtonRightIcon className={styles.icon} />
      </div>
    </div>
  );
};

export default Coupons;
