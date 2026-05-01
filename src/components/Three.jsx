import React from "react";

function Three(props){
    return (
        <>
    <article id={props.post.id}>
    <h3>{props.post.title}</h3>
    <small>{props.post.date}</small>
    <p></p>
    </article>
    </>
    )
}

export default Three 