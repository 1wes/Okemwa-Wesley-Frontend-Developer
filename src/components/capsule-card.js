import React from "react";
import './capsule-card.css';

const Card=({name, missions, status, details, onClick, serial, type, id, laaunchDate, landings, reuse, missionNames})=>{

    const closePopUp=()=>{

        const popup=document.getElementById("popup");

        popup.classList.add("close-popup")
    }

    return(
        <>
            <div className="card" onClick={onClick}>
                <div>
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
                <div className="item-pop-up" id="popup">
                    <ul className="additional-data">
                        <li>Capsule serial : <span>{serial}</span></li>
                        <li>Capsule type : <span>{type}</span></li>
                        <li>Capsule ID : <span>{id}</span></li>
                        <li>Status : <span>{status}</span></li>
                        <li>Original launch : <span>{laaunchDate}</span></li>
                        <li>Missions : {missionNames}</li>
                        <li>Landings : <span>{landings}</span></li>
                        <li>Reuse count : <span>{reuse}</span></li>
                    </ul>

                    <button className="close" onClick={closePopUp}>Close</button>
                </div>
            </div>
        </>
    )
}
export default Card;