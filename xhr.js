// May 13, 2020

// Implement get, post, put, delete, patch
// Using xhr

// Get user details with id = 1
var url = "https://jsonplaceholder.typicode.com/users/1";
var XMLHttpRequest = require("xhr2");
var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);

xhr.onload = function() {
  var users = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "200") {
    console.table(users);
  } else {
    console.error(users);
  }
};
xhr.send(null);

/* output =
│ (index)  │    street     │   suite    │     city      │   zipcode    │                 geo                 │       name        │               catchPhrase                │              bs               │         Values          │
├──────────┼───────────────┼────────────┼───────────────┼──────────────┼─────────────────────────────────────┼───────────────────┼──────────────────────────────────────────┼───────────────────────────────┼─────────────────────────┤
│    id    │               │            │               │              │                                     │                   │                                          │                               │            1            │
│   name   │               │            │               │              │                                     │                   │                                          │                               │     'Leanne Graham'     │
│ username │               │            │               │              │                                     │                   │                                          │                               │         'Bret'          │
│  email   │               │            │               │              │                                     │                   │                                          │                               │   'Sincere@april.biz'   │
│ address  │ 'Kulas Light' │ 'Apt. 556' │ 'Gwenborough' │ '92998-3874' │ { lat: '-37.3159', lng: '81.1496' } │                   │                                          │                               │                         │
│  phone   │               │            │               │              │                                     │                   │                                          │                               │ '1-770-736-8031 x56442' │
│ website  │               │            │               │              │                                     │                   │                                          │                               │     'hildegard.org'     │
│ company  │               │            │               │              │                                     │ 'Romaguera-Crona' │ 'Multi-layered client-server neural-net' │ 'harness real-time e-markets' │ 
*/

// // Post a new user with the given name
var url = "https://jsonplaceholder.typicode.com/users";

var data = {};
data.name = "Anna";
var json = JSON.stringify(data);

var XMLHttpRequest = require("xhr2");
var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
xhr.onload = function() {
  var users = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "201") {
    console.table(users);
  } else {
    console.error(users);
  }
};
xhr.send(json);

/*
output =
├─────────┼────────┤
│  name   │ 'Anna' │
│   id    │   11   │
└─────────┴────────┘
*/

// // update name for user id = 5
var url = "https://jsonplaceholder.typicode.com/users/5";
var data = {};
data.name = "John doe";
var json = JSON.stringify(data);

var XMLHttpRequest = require("xhr2");
var xhr = new XMLHttpRequest();
xhr.open("PUT", url, true);
xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
xhr.onload = function() {
  var users = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "200") {
    console.table(users);
  } else {
    console.error(users);
  }
};
xhr.send(json);

/*
output = 
 ─────────┬────────────┐
│ (index) │   Values   │
├─────────┼────────────┤
│  name   │ 'John doe' │
│   id    │     5      │
└─────────┴────────────┘

*/

// // patch data with new name and email
var url = "https://jsonplaceholder.typicode.com/users/5";
var data = {};
data.name = "John";
data.email = "none";
var json = JSON.stringify(data);

var XMLHttpRequest = require("xhr2");
var xhr = new XMLHttpRequest();
xhr.open("PATCH", url, true);
xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
xhr.onload = function() {
  var users = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "200") {
    console.table(users);
  } else {
    console.error(users);
  }
};
xhr.send(json);

/*
output =
┌──────────┬────────────────┬─────────────┬──────────────┬─────────┬─────────────────────────────────────┬───────────────┬────────────────────────────────────────┬────────────────────────────────────┬─────────────────┐
│ (index)  │     street     │    suite    │     city     │ zipcode │                 geo                 │     name      │              catchPhrase               │                 bs                 │     Values      │
├──────────┼────────────────┼─────────────┼──────────────┼─────────┼─────────────────────────────────────┼───────────────┼────────────────────────────────────────┼────────────────────────────────────┼─────────────────┤
│    id    │                │             │              │         │                                     │               │                                        │                                    │        5        │
│   name   │                │             │              │         │                                     │               │                                        │                                    │     'John'      │
│ username │                │             │              │         │                                     │               │                                        │                                    │    'Kamren'     │
│  email   │                │             │              │         │                                     │               │                                        │                                    │     'none'      │
│ address  │ 'Skiles Walks' │ 'Suite 351' │ 'Roscoeview' │ '33263' │ { lat: '-31.8129', lng: '62.5342' } │               │                                        │                                    │                 │
│  phone   │                │             │              │         │                                     │               │                                        │                                    │ '(254)954-1289' │
│ website  │                │             │              │         │                                     │               │                                        │                                    │ 'demarco.info'  │
│ company  │                │             │              │         │                                     │ 'Keebler LLC' │ 'User-centric fault-tolerant solution' │ 'revolutionize end-to-end systems' │                 │
└──────────┴────────────────┴─────────────┴──────────────┴─────────┴─────────────────────────────────────┴───────────────┴────────────────────────────────────────┴────────────────────────────────────┴─────────────────┘

*/

// // Delete user with id = 5
var url = "https://jsonplaceholder.typicode.com/users/5";
var XMLHttpRequest = require("xhr2");
var xhr = new XMLHttpRequest();
xhr.open("DELETE", url, true);
xhr.onload = function() {
  var users = JSON.parse(xhr.responseText);
  if (xhr.readyState == 4 && xhr.status == "200") {
    console.table(users);
  } else {
    console.error(users);
  }
};
xhr.send(null);
