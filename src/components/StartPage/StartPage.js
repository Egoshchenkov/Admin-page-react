import React from 'react';
import logo from '../../logo.svg'
import styles from './StartPage.module.scss';
import { NavLink } from 'react-router-dom';
import store from '../../redux/store';

const StartPage = () => {
    function test() {
        console.log(store.getState());
        localStorage.clear()
        console.log(localStorage);
    }
    return <div className={styles.StartPageGrid}>
        <div className={styles.item1}>
            <img src={logo} className={styles.AppLogo} alt='logo'></img>
            <span className={styles.Welcome}>Welcome!</span>
        </div>
        <div className={styles.item2}>
            <NavLink to="/registration"><button>Sign up</button></NavLink>
            <NavLink to="/login"><button onClick={test}>Sign in</button></NavLink>
        </div>
    </div>
}

export default StartPage;