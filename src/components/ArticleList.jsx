// import React from "react";
import Article from "./Article"

function List(prop){

    return(
        <main>
        {prop.posts.map((post, index) => (
            <Article key={index} date={post.date} title={post.title} preview={post.preview} minutes={post.minutes}   />
        ))}
    </main>
    )
}

export default List 