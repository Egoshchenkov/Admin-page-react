import { createStore } from "redux";
import axios from 'axios';

async function test () {
    const response = await axios.get("http://localhost:3004/posts/");
    localStorage.setItem("selectedUser", JSON.stringify(response.data));
    return response.data
}
console.log(test())
const initialState = {
    user: {},
    users: [],
    // name: 'Paul',
    // secondName: 'Petrov'
    // async test () {
    //     const response = await axios.get("http://localhost:3004/posts/");
    //     localStorage.setItem("selectedUser", JSON.stringify(response.data));
    //     console.log(response.data)
    //     return response.data
    // }
}
console.log(initialState.name)
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {...state, name: action.payload};

        case 'CHANGE_SECOND_NAME':
            return {...state, secondName: action.payload}; 
    }

    return state;
}

let store = createStore(reducer);

console.log(store.getState());

const changeName = {
    type: 'CHANGE_NAME',
    // payload: 'Ivan'
    async test () {
        const response = await axios.get("http://localhost:3004/posts/");
        localStorage.setItem("selectedUser", JSON.stringify(response.data));
        console.log(response.data)
        return response.data
    }
};

// const changeSecondName = {
//     type: 'CHANGE_SECOND_NAME',
//     payload: 'Ivanov'
// };

store.dispatch(changeName);

// console.log(store.getState());

// store.dispatch(changeSecondName);

// console.log(store.getState());

export default store;