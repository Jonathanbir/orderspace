import React from 'react';

import MenuClose from 'images/icon/menu-close.inline.svg';

import styles from './index.css'

const RegisterBoard = () =>{
    return (
        <div className={styles.registerBoard}>
            <MenuClose className={styles.closeBtn} />
            <div className={styles.registerInput}>
                <p>Member ID</p>
                <input type="text"/>
            </div>
            <div className={styles.registerInput}>
                <p>Pass Word</p>
                <input type="password"/>
            </div>
            <div className={styles.registerBtn}>
                Sing in
            </div>
        </div>
    );
}
export default RegisterBoard;