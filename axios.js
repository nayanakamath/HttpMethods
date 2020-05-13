// May 13, 2020

// Implement get, post, put, delete, patch
// Using axios

//get user details with id = 1
const axios = require("axios");
axios.get("https://jsonplaceholder.typicode.com/users/1").then(
  response => {
    console.log(response);
  },
  error => {
    console.log(error);
  }
);

/*
output = status: 200,
  statusText: 'OK',
data:
   { id: 1,
     name: 'Leanne Graham',
     username: 'Bret',
     email: 'Sincere@april.biz',
     address:
      { street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: [Object] },
     phone: '1-770-736-8031 x56442',
     website: 'hildegard.org',
     company:
      { name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets' } } }
*/

// post to create new todo
//const axios = require("axios");
axios
  .post("https://jsonplaceholder.typicode.com/todos", {
    userId: 1,
    id: 5,
    title: "hello task",
    completed: false
  })
  .then(
    response => {
      console.log(response);
    },
    error => {
      console.log(error);
    }
  );

/*
output =      method: 'post',
     data: '{"userId":1,"id":5,"title":"hello task","completed":false}'
*/

// put to update user id = 2
// const axios = require("axios");
axios
  .put("https://jsonplaceholder.typicode.com/users/1", {
    id: 1,
    name: "john",
    username: "abc",
    email: "abc@123.com"
  })
  .then(
    response => {
      console.log(response);
    },
    error => {
      console.log(error);
    }
  );

/*
output = status: 200,
  statusText: 'OK',
data:
      '{"id":1,"name":"john","username":"abc","email":"abc@123.com"}',
*/

// patch user id = 3 with new data
// const axios = require("axios");
axios
  .patch("https://jsonplaceholder.typicode.com/users/3", {
    id: 1,
    name: "Kay"
  })
  .then(
    response => {
      console.log(response);
    },
    error => {
      console.log(error);
    }
  );

/*
output =  url: 'https://jsonplaceholder.typicode.com/users/3',
     method: 'patch',
    data:
   { id: 1,
     name: 'Kay',
     username: 'Samantha',
     email: 'Nathan@yesenia.net',
     address:
      { street: 'Douglas Extension',
        suite: 'Suite 847',
        city: 'McKenziehaven',
        zipcode: '59590-4157',
        geo: [Object] },
     phone: '1-463-123-4447',
     website: 'ramiro.info',
     company:
      { name: 'Romaguera-Jacobson',
        catchPhrase: 'Face to face bifurcated interface',
        bs: 'e-enable strategic applications' } 
*/

// delete user id = 1
// const axios = require("axios");
axios.delete("https://jsonplaceholder.typicode.com/users/1");
