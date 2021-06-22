import React, { useState } from 'react';
import styles from './SignIn.module.scss';
import axios from 'axios';

const SignIn = (props) => {
    const [fields, setFields] = useState({
        username: '',
        password: '',
    });

    function handleChange(event) {
        const newFields = { ...fields };
        newFields[event.target.id] = event.target.value;
        setFields(newFields);
        return newFields
    }

    function checkUser() {
        axios.get("http://localhost:3004/posts")
            .then(response => {
                const { data } = response;

                if (data.some(({ username, password}) =>
                    fields.username === username && fields.password === password
                )) {
                    localStorage.setItem("data", JSON.stringify(response.data))             
                    // console.log(response.data)
                    props.history.replace('/data')
                }

                // response.data.forEach(account => {
                //     if (fields.username === account.username && fields.password === account.password) {
                //         localStorage.setItem("data", JSON.stringify(response.data))             
                //         console.log(response.data)
                //         props.history.replace('/data')
                //     }
                //     else props.history.replace('/wronglogin')
                // })
                
                else props.history.replace('/wronglogin')
            });
    }

    return <div className={styles.SignInGrid}>
        <div className={styles.item1}>
            <div>Username<input onChange={handleChange} type="text" id="username"></input></div>
            <div>Password<input onChange={handleChange} type="Password" id="password"></input></div>
        </div>
        <div className={styles.item2}><button onClick={checkUser}>Sign In</button></div>
    </div>
}

export default SignIn;