import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About"
import Article from "./Article";
import List from "./Article-list";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} />
      <About alt="Blog Logo" />
      <About text={blogData.about} />
      <List post={blogData.posts} />
    </div>
  );
}

export default App;
