import React, { useState } from 'react';
import { CustomLink, DropBox } from '../';
import  styles from './Header.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {

    const [ links, setLinks ] = useState(false)

    const openTable = () => {
        setLinks(!links)
    }

    return ( 
        <>
        <header>
            <h1 className={styles.logo} >Gradient.ge</h1>
            <div className={styles.links_hamburger} >
            <div className={styles.links} >
            <CustomLink to='/' >Home Page</CustomLink>
            <CustomLink to='/git-hub'>Git Hub</CustomLink>
            </div>
            <GiHamburgerMenu onClick={openTable} className={styles.menu}/>
            </div>
        </header>
        {links && <DropBox/>}
        </>
    );
}
 
export default Header;