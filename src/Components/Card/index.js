import React from "react";
import "./Cards.css"

function Cards(props) {
    console.log(props);
    return <div className="card">
                        {props.name}
        {/* SEE App.js CARDS */}
            <div className="img-container">
                <img className="img-thumbnail img-responsive" alt={props.name} src={props.image} onClick={() => props.clickPic(props.id)}/>
            </div>
        </div>

}

export default Cards;