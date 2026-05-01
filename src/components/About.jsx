import React from "react";

function About(props) {
    return (
        <aside>
            <img src={props.image} alt={props.alt}></img>
            <p>{props.about}</p>
        </aside>
    )
}

export default About