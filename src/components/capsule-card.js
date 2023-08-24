import React from "react";
import './capsule-card.css';

const MoreData=({serial, type, id, laaunchDate, landings, reuse, missionNames, status})=>{

    return(
        <React.Fragment>
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
                    <button className="close">Close</button>
                </div>
        </React.Fragment>
    )
}

const Card=({children,name, missions, status, details, onClick})=>{

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
                {children}
            </div>
        </>
    )
}
export{
    MoreData
}
export default Card;