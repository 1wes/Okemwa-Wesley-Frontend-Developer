import React from "react";
import './capsule-card.css';

const Card=({name, missions, status, details})=>{

    return(
        <>
            <div className="card">
                <div className="name">
                    <h2>{name}</h2>
                </div>
                <div className="unique-details">
                    <div>
                        Missions: <span>{missions}</span>
                    </div>
                    <div>
                        Status: <span>{status}</span>
                    </div>
                </div>
                <p className="description">
                    {details}
                </p>
            </div>
        </>
    )
}
export default Card;