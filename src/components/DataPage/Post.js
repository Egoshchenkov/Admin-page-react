import React from 'react';
import styles from './Data.module.scss';

import { useRef } from 'react';

const Post = (props) => {
    const rowRef = useRef();
    const checkboxRef = useRef();


    function selectRow() {
        if (checkboxRef.current.checked) {
            rowRef.current.classList.remove(styles.selectedRow)
            if (selectedCell !== undefined) {
            selectedCell.classList.remove(styles.selectedCell)
            }
        }
        else {
            rowRef.current.classList.add(styles.selectedRow)
            localStorage.setItem("row", checkboxRef.current.id);
        }
        checkboxRef.current.checked = !checkboxRef.current.checked ;

    }
    let selectedCell;

    function selectCell(event) {
        if (checkboxRef.current.checked && selectedCell !== undefined) {
            selectedCell.classList.remove(styles.selectedCell)
        }
        else {
            event.target.classList.add(styles.selectedCell)
        }
        selectedCell = event.target;
    }

    // const fields = Object.keys(props.user);

    // return <div>
    //     {fields.map((field,index) => (
    //         <div key={index} id={`checkbox_${field}`} className={styles[field]}>{props.user[field]}</div>
    //     ))}
    // </div>
    

    return <div>
            <div ref={rowRef} className={styles.Row} onClick={selectRow}>
                <div key={1} className={styles.checkBox}><input ref={checkboxRef} type="checkbox" id={props.user.id} onClick={selectRow}></input></div>
                <div key={2} className={styles.id} onClick={selectCell}>{props.user.id}</div>
                <div key={3} className={styles.username} onClick={selectCell}>{props.user.username}</div>
                <div key={4} className={styles.email} onClick={selectCell}>{props.user.email}</div>
                <div key={5} className={styles.firstName} onClick={selectCell}>{props.user.firstName}</div>
                <div key={6} className={styles.lastName} onClick={selectCell}>{props.user.lastName}</div>
                <div key={7} className={styles.city} onClick={selectCell}>{props.user.city}</div>
                <div key={8} className={styles.country} onClick={selectCell}>{props.user.country}</div>
                <div key={9} className={styles.company} onClick={selectCell}>{props.user.company}</div>
                <div key={10} className={styles.postalCode} onClick={selectCell}>{props.user.postalCode}</div>
            </div>
        </div>
}

export default Post;