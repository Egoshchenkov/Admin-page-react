import axios from 'axios';

// function createNewAccount() {
    
//     axios.get("http://localhost:3004/posts")
//         .then(response => {
//             console.log("response", response.data);
//             console.log(response.data[0])
//         })
// }

export class Requests {
    //  createNewAccount(data) {
    //   return axios.post("http://localhost:3004/posts", data);
    // }
    getData() {
        return axios.get("http://localhost:3004/posts")
        .then(response => {
            // console.log("response", response.data);
            return response.data;
        })
    }
  }