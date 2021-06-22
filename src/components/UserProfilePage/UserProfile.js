import React, { useRef, useEffect } from 'react';
import styles from './UserProfile.module.scss';
import { NavLink } from "react-router-dom";
import axios from 'axios';

const UserProfile = (props) => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const emailRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const cityRef = useRef();
    const countryRef = useRef();
    const companyRef = useRef();
    const postalCodeRef = useRef();
    const aboutRef = useRef();

    useEffect(() => {
        let dataBase = JSON.parse(localStorage.selectedUser);
        usernameRef.current.value = dataBase.username;
        passwordRef.current.value = dataBase.password;
        emailRef.current.value = dataBase.email;
        firstNameRef.current.value = dataBase.firstName;
        lastNameRef.current.value = dataBase.lastName;
        cityRef.current.value = dataBase.city;
        countryRef.current.value = dataBase.country;
        companyRef.current.value = dataBase.company;
        postalCodeRef.current.value = dataBase.postalCode;
        aboutRef.current.value = dataBase.aboutMe;
    }, [])

    function saveChanges() {
        axios.put("http://localhost:3004/posts/" + localStorage.row, {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
            email: emailRef.current.value,
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            city: cityRef.current.value,
            country: countryRef.current.value,
            company: companyRef.current.value,
            postalCode: postalCodeRef.current.value,
            aboutMe: aboutRef.current.value,
        });
    }

    return <div className={styles.UserProfileGrid}>
        <nav className={styles.nav}>
            <div className={styles.navName}>App</div>
            <ul>
                <li><NavLink to="/registration">Registration</NavLink></li>
                <li><NavLink to="/userprofile">User profile</NavLink></li>
                <li><NavLink to="/data">Data</NavLink></li>
            </ul>
        </nav>
        <div className={styles.item1}>
            <div>Username<input ref={usernameRef} type="text" id="Username"></input></div>
            <div>Password<input ref={passwordRef} type="Password" id="Password"></input></div>
            <div>Email<input ref={emailRef} type="text" id="Email"></input></div>
            <div>First name<input ref={firstNameRef} type="text" id="First name"></input></div>
            <div>Last name<input ref={lastNameRef} type="text" id="Last name"></input></div>
        </div>
        <div className={styles.item2}>
            <div>City<input ref={cityRef} type="text" id="City"></input></div>
            <div>Country<input ref={countryRef} type="text" id="Country"></input></div>
            <div>Company<input ref={companyRef} type="text" id="Company"></input></div>
            <div>Postal code<input ref={postalCodeRef} type="text" id="Postal code"></input></div>
            <div>About me<input ref={aboutRef} type="text" id="About me"></input></div>
        </div>
        <div className={styles.item3}><button onClick={saveChanges}>Save</button></div>
    </div>
}

export default UserProfile;