const http = new easyHTTP;

// // Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts');

// // Callback
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
// {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// }
// });

// Get Single Post
// Callback
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
{
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
}
}); // it gives single post userId:1


