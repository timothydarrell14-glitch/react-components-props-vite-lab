import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About"
import Article from "./Article"
import List from "./Article-list";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name = {blogData.name} />
      <About image = {blogData.image} />
      <About alt = "Blog Logo" />
      <About text = {blogData.about}  />
      <One post = {blogData.posts[0]} />
      <Two post = {blogData.posts[1]} />
      <Three post = {blogData.posts[2]} />
    </div>
  );
}

export default App;
