// load the mysql library
var mysql = require('promise-mysql');

// create a connection to our Cloud9 server
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root', // CHANGE THIS :)
    password : '',
    database: 'reddit_api',
    connectionLimit: 10
});

// load our API and pass it the connection
var RedditAPI = require('./reddit');

var myReddit = new RedditAPI(connection);

// We call this function to create a new user to test our API
// The function will return the newly created user's ID in the callback
// myReddit.createUser({
//     username: 'Hamlet',
//     password: 'abc123'
// })
//     .then(newUserId => {
//         // Now that we have a user ID, we can use it to create a new post
//         // Each post should be associated with a user ID
//         console.log('New user created! ID=' + newUserId);

//         return myReddit.createPost({
//             title: 'Hello Reddit! This is my first post',
//             url: 'http://www.digg.com',
//             userId: newUserId
//         });
//     })
//     .then(newPostId => {
//         // If we reach that part of the code, then we have a new post. We can print the ID
//         console.log('New post created! ID=' + newPostId);
//     })
//     .catch(error => {
//         console.log(error.stack);
//     });
    
    
// myReddit.getAllPosts().then(function(result) {
//     console.log(result)
// })

// myReddit.createVote({
//     postId:5151,
//     userId:5929,
//     voteDirection:-1
// }).then(function(result){console.log(result)})

//myReddit.getAllSubreddits().then(console.log);


//myReddit.createComment({
//       postId:5151,
//        userId:5929,
//        text:"wonderful post"
//}).then(function(result){console.log});

myReddit.getAllComments(5151, 4).then(function(result){
        console.log(result);
})