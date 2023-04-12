import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  //Create date element to show current year
  const f: Date = new Date();
  const year = f.getFullYear();
  return (
    <div className={styles.footer}>
      <ul>
        <li className={styles.headliner}>Isotipo</li>
        <li>© {year} Progrez All rights reserved</li>
        <li className={styles.headliner}>Isotipo</li>
      </ul>
    </div>
  );
};

export default Footer;
