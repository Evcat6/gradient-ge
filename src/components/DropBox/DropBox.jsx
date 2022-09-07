import React from 'react';
import styles from './DropBox.module.css';
import { CustomLink } from '../'

const DropBox = () => {
    return (
        <div className={styles.drop_box} >
            <CustomLink to='/' >Home Page</CustomLink>
            <CustomLink to='/git-hub'>Git Hub</CustomLink>
        </div>
    )
}

export default DropBox;