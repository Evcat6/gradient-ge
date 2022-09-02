import React from 'react'
import { CustomLink } from '../'
import  styles from './Header.module.css'

const Header = () => {
    return ( 
        <header>
            <h1 className={styles.logo} >Gradient.ge</h1>
            <div className={styles.links} >
            <CustomLink to='/' >Home Page</CustomLink>
            <CustomLink to='/git-hub'>Git Hub</CustomLink>
            </div>
        </header>
    );
}
 
export default Header;