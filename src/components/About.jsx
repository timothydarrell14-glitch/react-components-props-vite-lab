// import React from "react";

function About(prop){
    let fallBackImage = 'https://via.placeholder.com/215'

    return (
        <aside>
            <img src={prop.image || fallBackImage} alt="blog logo"></img>
            <p>{prop.about}</p>
        </aside>
    )
}export default About