import React, { useEffect } from 'react';
import styles from './NavBar.module.css';
import ArrowDown from '../../../assets/images/Arrow-Down.svg';
import Image from 'next/image';
import { conditionalName } from '../../../utils/cases';
import Link from 'next/link';

const NavBar = ({ data }: any) => {
  //Create state
  const [isShow, setIsShow] = React.useState<boolean>(false);
  const [hoveredSubMenu, setHoveredSubMenu] = React.useState<
    string | undefined
  >('');
  const [hoveredSubSubMenu, setHoveredSubSubMenu] = React.useState<
    string | undefined
  >('');

  //Show submenu
  const handleShowSubmenu = (
    type = 'menu',
    menu?: string,
    submenu?: string
  ) => {
    setIsShow(true);
    type == 'menu' ? setHoveredSubMenu(menu) : setHoveredSubSubMenu(submenu);
  };

  //Hide submenu
  const handleCloseSubmenu = (
    type = 'menu',
    menu?: string,
    submenu?: string
  ) => {
    setIsShow(false);
    type == 'menu' ? setHoveredSubMenu(menu) : setHoveredSubSubMenu(submenu);
  };
  let items: Array<any> = [];
  items.push(data.lista[0]);
  items = items[0];

  useEffect(() => {
    console.log(hoveredSubMenu, 'hoveredSubMenu');
  }, [hoveredSubMenu]);

  return (
    <div>
      <nav className={styles.main__navbar}>
        <Link href="/">
          <h1>Tu PruTec</h1>
        </Link>
        <div className={styles.user}>
          <Link href="/">Nombre Usuario</Link>
          <Image src={ArrowDown} alt="Logo" width="25" height="25" />
        </div>
      </nav>
      <nav className={styles.secondary__navbar}>
        {data.lista.map((item: any, index: number) => {
          return (
            <ul key={index}>
              {Object.entries(item).map(([key, value]: any) => {
                return (
                  <li
                    key={key}
                    onMouseOver={() => handleShowSubmenu('menu', key)}
                    onMouseLeave={() => handleCloseSubmenu('menu', key)}
                  >
                    <Link href="/" className={styles.links}>
                      {conditionalName(key)}
                    </Link>
                    {hoveredSubMenu === key && isShow && value.length > 0 && (
                      <ul className={`${styles.sublinks}`}>
                        {hoveredSubMenu == key &&
                          isShow &&
                          value.map((el: any) => {
                            return Object.entries(el).map(
                              ([keysecond, valuesecond]: any) => {
                                return (
                                  <li
                                    key={keysecond}
                                    onMouseOver={() =>
                                      handleShowSubmenu(
                                        'submenu',
                                        key,
                                        keysecond
                                      )
                                    }
                                  >
                                    <Link href="/">
                                      {conditionalName(keysecond)}
                                    </Link>
                                    {hoveredSubSubMenu === keysecond &&
                                      isShow &&
                                      valuesecond.length < 1 && (
                                        <ul className={styles.subsubmenu}>
                                          <li>
                                            <Link href="/">New item</Link>
                                          </li>
                                        </ul>
                                      )}
                                  </li>
                                );
                              }
                            );
                          })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </nav>
    </div>
  );
};

export default NavBar;
