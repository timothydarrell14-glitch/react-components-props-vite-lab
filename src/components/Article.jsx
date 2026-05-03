import React from "react";

function Article(prop) {

    prop.post.forEach(() => {

        return (
            <article id={prop.post.id}>
                <h3>{prop.post.title}</h3>
                <small>{prop.post.date}</small>
                <p>{prop.post.preview}</p>
            </article>
        )

    })
}

export default Article