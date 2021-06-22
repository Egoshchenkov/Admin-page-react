import React, { useState } from 'react';
import styles from './SignUp.module.scss';
import axios from 'axios';

const SignUp = (props) => {
    const [fields, setFields] = useState({
        username: '',
        password: '',
        email: '',
        firstName: '',
        lastName: '',
        city: '',
        country: '',
        company: '',
        postalCode: '',
        aboutMe: ''
    });

    function handleChange(event) {
        const newFields = { ...fields };
        newFields[event.target.name] = event.target.value;
        setFields(newFields);
    }

    function createNewAccount() {
        return axios.post("http://localhost:3004/posts", fields);
    }

    return <div className={styles.SignUpGrid}>
        <div className={styles.item1}>
            <div>Username<input onChange={handleChange} type="text" name="username"></input></div>
            <div>Password<input onChange={handleChange} type="password" name="password"></input></div>
            <div>Email<input onChange={handleChange} type="text" name="email"></input></div>
            <div>First name<input onChange={handleChange} type="text" name="firstName"></input></div>
            <div>Last name<input onChange={handleChange} type="text" name="lastName"></input></div>
        </div>
        <div className={styles.item2}>
            <div>City<input onChange={handleChange} type="text" name="city"></input></div>
            <div>Country<input onChange={handleChange} type="text" name="country"></input></div>
            <div>Company<input onChange={handleChange} type="text" name="company"></input></div>
            <div>Postal code<input onChange={handleChange} type="text" name="postalCode"></input></div>
            <div>About me<input onChange={handleChange} type="text" name="aboutMe"></input></div>
        </div>
        <div className={styles.item3}><button onClick={createNewAccount}>Register</button></div>
    </div>
}

export default SignUp;