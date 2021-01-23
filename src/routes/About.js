import React from "react";

function About(props){
    console.log(props);
    return(
        <div className="about__container">
            <span>
                "About this pagge: I built it because I love movies
            </span>
            <span>- 1984</span>
        </div>
    );
}

export default About;