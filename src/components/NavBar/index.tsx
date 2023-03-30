import React from 'react';
import styles from './NavBar.module.css';
import ArrowDown from '../../../assets/images/Arrow-Down.svg';
import Image from 'next/image';
import { conditionalName } from '../../../utils/cases';

const NavBar = ({ data}: any) => {
    const [open, setOpen] = React.useState<boolean>(false);
    const [isShow, setIsShow] = React.useState<boolean>(false);
    const [hoveredSubMenu, setHoveredSubMenu] = React.useState<null>(null);

    const handleShowSubmenu = () => {
        setIsShow(true);
    }
    const handleCloseSubmenu = () => {
        setIsShow(false);
    }
    let items: Array<any> = [];
    items.push(data.lista[0]);
    items = items[0];
    console.log(items, 'items');
  return (
    <div>
        <nav className={styles.main__navbar}>
            <a href="/">
                <h1>Tu PruTec</h1>
            </a>
            <div className={styles.user}>
                <a>Nombre Usuario</a>
                <Image
                src={ArrowDown}
                alt='Logo'
                width='25'
                height='25'
                />
            </div>
        </nav>
        <nav className={styles.secondary__navbar}>
                {data.lista.map((item: any, index: number) => {
                    return (
                        <ul key={index}>
                            {
                                Object.entries(item).map(([key, value]: any) => {
                                    console.log(key, 'key');
                                    console.log(value, 'value');
                                    return (
                                        <li key={key}>
                                            <a className={styles.links} onMouseOver={handleShowSubmenu}>
                                                {conditionalName(key)}
                                            </a>
                                            <ul className={`${styles.sublinks} ${isShow && value.length > 0 && styles.mt}`}  onMouseLeave={handleCloseSubmenu}>{
                                                isShow && value.map((el: any)  => {
                                                    return (
                                                        Object.entries(el).map(([llave, valor]: any) => {
                                                            return(
                                                                <li key={llave} className={hoveredSubMenu === llave ? styles.hovered : styles.unhovered}>
                                                                    <a>{conditionalName(llave)}</a>
                                                                </li>
                                                                )
                                                            })
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    )
                })}
        </nav>
    </div>
  )
}

export default NavBar;