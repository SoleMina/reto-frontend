import React, { useState } from 'react';
import styles from './Accordion.module.css';
import data from '@/accordion.json';

const Accordion = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const [number, setNumber] = useState<Number | null>(null);

  const handleAccordion = (id: number) => {
    setNumber(id);
    setOpen(!open);
  };
  return (
    <div className={styles.accordion}>
      {data.length > 0 &&
        data.map((item) => (
          <div key={item.id}>
            <h1
              onClick={() => handleAccordion(item.id)}
              className={styles.title}
            >
              {item.title}
            </h1>
            {item.id === number && open && (
              <div className={styles.accordionItem}>
                <p>{item.paragraph}</p>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Accordion;
