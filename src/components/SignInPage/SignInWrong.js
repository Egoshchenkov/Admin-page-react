import React, { useState } from 'react';
import styles from './SignInWrong.module.scss';
import axios from 'axios';

const SignIn = (props) => {
    const [fields, setFields] = useState({
        username: '',
        password: '',
    });

    function handleChange(event) {
        const newFields = {...fields};
        newFields[event.target.id] = event.target.value;
        setFields(newFields);
        return newFields
    }

    function checkUser() {
            axios.get("http://localhost:3004/posts")
            .then(response => {
                response.data.forEach(account => {
                    if (fields.username === account.username && fields.password === account.password) {
                        props.history.replace('/data')
                    }
                });
            })

    }

    return <div className={styles.SignInGrid}>
        <div className={styles.item1}>
            <div>Username<input onChange={handleChange} type="text" id="username"></input></div>
            <div>Password<input onChange={handleChange} type="Password" id="password"></input></div>
            <div className={styles.WrongLogin}>Неверный логин или пароль</div>
        </div>
        <div className={styles.item2}><button onClick={checkUser}>Sign In</button></div>
    </div>
}

export default SignIn;