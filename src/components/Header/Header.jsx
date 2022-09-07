import React, { useState } from 'react';
import { CustomLink, DropBox } from '../';
import  styles from './Header.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/all';

const Header = () => {

    const [ links, setLinks ] = useState(false)

    const openTable = () => {
        setLinks(!links)
    }

    return ( 
        <div classame='header'>
        <header>
            <h1 className={styles.logo} >Gradient.ge</h1>
            <div className={styles.links_hamburger} >
            <div className={styles.links} >
            <CustomLink to='/' >Home Page</CustomLink>
            <CustomLink to='/git-hub'>Git Hub</CustomLink>
            </div>
            {!links && <GiHamburgerMenu onClick={openTable} className={styles.menu}/>}
            {links && <IoCloseSharp onClick={openTable} className={styles.menu}/>}
            </div>
        </header>
        {links && <DropBox/>}
        </div>
    );
}
 
export default Header;