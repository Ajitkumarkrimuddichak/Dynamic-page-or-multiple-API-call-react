//Backend:-API data fetch and save database mongoose
//npm packege used :-mongoose,node-fetch,nodemon
import fetch from "node-fetch";
import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/apidata");
const postSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
});
const Post = mongoose.model("Post", postSchema);

async function getPosts() {
  const myPosts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const response = await myPosts.json();
  //console.log(response);
  for (let i = 0; i < response.length; i++) {
    const post = new Post({
      user_id: response[i]["userId"],
      id: response[i]["id"],
      title: response[i]["title"],
      body: response[i]["body"],
    });
    post.save();
  }
}
getPosts();
