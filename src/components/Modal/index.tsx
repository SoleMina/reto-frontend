import React, { useState } from 'react';
import styles from './Modal.module.css';

interface Props {
  title: string;
  btn: string;
}

const Modal: React.FC<Props> = ({ title, btn }) => {
  const [openModal, setOpenModal] = useState<Boolean>(false);

  const handleModal = (): void => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div className={styles.btnModal}>
        <button onClick={handleModal}>{btn}</button>
      </div>
      {openModal && (
        <div className={styles.box} onClick={handleModal}>
          <div className={styles.modal}>
            <div className={styles.close}>
              <h1>{title}</h1>
              <button onClick={handleModal}>&times;</button>
            </div>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error,
                molestias odit? Possimus facilis maxime, laborum, molestias
                sequi voluptatibus molestiae repellendus dolores iste
                dignissimos corporis optio. Rem veritatis illum iste deserunt!
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error,
                molestias odit? Possimus facilis maxime, laborum, molestias
                sequi voluptatibus molestiae repellendus dolores iste
                dignissimos corporis optio. Rem veritatis illum iste deserunt!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
