import React from "react";

function Cards(props) {
console.log(props);
    return <div>
        {/* SEE App.js CARDS */}
        <h1>ID: {props.id}</h1>
        <img alt={props.name} src={props.image} />

        

        </div>
}

export default Cards;