import React from "react";

function About(prop){
    return (
        <aside>
            <img alt={prop.alt} src={prop.image} ></img>
            <p>{prop.text}</p>
        </aside>
    )
}export default About