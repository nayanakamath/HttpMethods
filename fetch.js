// May 13, 2020

// Implement get, post, put, delete, patch
// Using fetch

// GET retrieve user with id =5
const fetch = require("node-fetch");
fetch("https://jsonplaceholder.typicode.com/users/5")
  .then(response => response.json())
  .then(json => console.log(json));

/* output =  
{ id: 5,
  name: 'Chelsey Dietrich',
  username: 'Kamren',
  email: 'Lucio_Hettinger@annie.ca',
  address:
   { street: 'Skiles Walks',
     suite: 'Suite 351',
     city: 'Roscoeview',
     zipcode: '33263',
     geo: { lat: '-31.8129', lng: '62.5342' } },
  phone: '(254)954-1289',
  website: 'demarco.info',
  company:
   { name: 'Keebler LLC',
     catchPhrase: 'User-centric fault-tolerant solution',
     bs: 'revolutionize end-to-end systems' } }
 */

// POST adds a random id to the new object
//const fetch = require("node-fetch");
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    userId: 1,
    id: 100,
    title: "adding new id",
    body: "none"
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then(response => response.json())
  .then(json => console.log(json));

/*
output= { userId: 1, id: 101, title: 'adding new id', body: 'none' }
  */

// put method to update title and body in this example
//const fetch = require("node-fetch");
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    userId: 1,
    id: 1,
    title: "updated",
    body: "123......."
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then(response => response.json())
  .then(json => console.log(json));

/*
output = { userId: 1, id: 1, title: 'updated', body: '123.......' }
*/

// PATCH to the resource id = 1
//update the title for the specified id
//const fetch = require("node-fetch");
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  body: JSON.stringify({
    title: "new title"
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then(response => response.json())
  .then(json => console.log(json));

/* output = 
{ userId: 1,
  id: 1,
  title: 'new title',
  body:
   'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto' }
*/

//DELETE user with id = 1
//const fetch = require("node-fetch");
fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "DELETE"
});
