// import React from "react";

function About(prop){
    return (
        <aside>
            <img src={prop.image} alt="blog logo"></img>
            <p>{prop.text}</p>
        </aside>
    )
}export default About