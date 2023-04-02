import React from "react"

export default function Joke(props) {
    return (
        <div>
           <h3 style={{display: props.setup ? block : none}}>{props.setup}</h3>
            <p>Punchline: {props.punchline}</p>
            <hr />
        </div>
    )
}
// {props.setup && <h3>Setup: {props.setup}</h3>}  // AND conditional
//<h3 style={{display: props.setup ? block : none}}>{props.setup}</h3> // Ternary conditional
