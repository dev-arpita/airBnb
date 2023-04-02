import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.img} className="card--image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.ratingScore}</span>
                <span className="gray">{props.ratingCount} </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.text}</p>
            <p><span className="bold">{props.cost}</span> / person</p>
        </div>
    )
}
