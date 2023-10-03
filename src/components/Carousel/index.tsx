import React, { useEffect, useState } from 'react';
import styles from './Carousel.module.css';
import slider from '@/modal.json';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  //   const [number, setNumber] = useState<number>(1);

  const handleIncrease = (): void => {
    currentIndex < slider.length - 1 && setCurrentIndex(currentIndex + 1);
  };
  const handleDecrease = (): void => {
    currentIndex >= slider.length - 2 && setCurrentIndex(currentIndex - 1);
  };

  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  return (
    <div
      className={styles.general}
      style={{
        backgroundImage: `linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.2) 100%
          ), url(${slider[currentIndex].url})`,
        height: '75vh',
        width: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
      }}
    >
      <div>
        <i
          className="fa fa-arrow-circle-left"
          aria-hidden="true"
          onClick={handleDecrease}
        ></i>
        <h1>Get Your Best Experience!</h1>
        <i
          className="fa fa-arrow-circle-right"
          aria-hidden="true"
          onClick={handleIncrease}
        ></i>
        <div>
          {slider.map((item, index) => (
            <i
              className="fa fa-circle"
              aria-hidden="true"
              key={item.id}
              style={{ color: index === currentIndex ? 'gray' : '' }}
            ></i>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
