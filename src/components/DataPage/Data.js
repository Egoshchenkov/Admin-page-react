import React from 'react';
import styles from './Data.module.scss';
import { NavLink } from "react-router-dom"
import Post from "./Post"
import axios from 'axios';

const Data = (props) => {

    let dataBase = JSON.parse(localStorage.data);

    let users = dataBase.map((user, index) =>
        <Post key={index} user={user} />
    )
    
    function deleteUser() {
        axios.delete("http://localhost:3004/posts/" + localStorage.row)
    }

    async function getuser () {
        // axios.get("http://localhost:3004/posts/" + localStorage.row).then(response => {
        //     localStorage.setItem("selectedUser", JSON.stringify(response.data));
        //     console.log(response.data)
        //     props.history.replace('/userprofile')
        // }) 
        const response = await axios.get("http://localhost:3004/posts/" + localStorage.row);
        localStorage.setItem("selectedUser", JSON.stringify(response.data));
        props.history.replace('/userprofile')
    }

    return <div className={styles.DataGrid}>
        <nav className={styles.nav}>
            <div className={styles.navName}>App</div>
            <ul>
                <li><NavLink to="/registration">Registration</NavLink></li>
                <li><NavLink to="/userprofile">User profile</NavLink></li>
                <li><NavLink to="/data">Data</NavLink></li>
            </ul>
        </nav>
        <div className={styles.DataBox}>
            <div className={styles.Row}>
                <div className={styles.checkBox}><input type="checkbox"></input></div>
                <div className={styles.id}>Id</div>
                <div className={styles.username}>Username</div>
                <div className={styles.email}>Email</div>
                <div className={styles.firstName}>First name</div>
                <div className={styles.lastName}>Last name</div>
                <div className={styles.city}>City</div>
                <div className={styles.country}>Country</div>
                <div className={styles.company}>Company</div>
                <div className={styles.postalCode}>Postal code</div>
            </div>
            <div className={styles.users}>
            {users}
            </div>
            <div>
                <div className={styles.deleteButton}><button onClick={deleteUser}>Delete</button></div>
                <div className={styles.editButton}><button onClick={getuser}>Edit</button></div>
            </div>
        </div>
    </div>
}

export default Data;