// import React from "react";
function Article(prop) {

    let date = "January 1, 1970"

        return (
            <article key={prop.index} >
                <h3>{prop.title}</h3>
                <small>{prop.date || date}</small>
                <p>{prop.preview}</p><small>{prop.minutes} minutes</small>

                
            </article>
        )
}

export default Article