import React from "react";
import './paginate.css';

const PageNumbers=({paginate, capsulesPerPage, totalCapsules})=>{

    const pageNumber=[];

    for (let number=1; number<=Math.ceil(totalCapsules/capsulesPerPage); number++){
        pageNumber.push(number);
    }

    const displayedNumber=pageNumber.map((number)=>{

        return (
            <li key={number} onClick={()=>paginate(number)} className="page-number"> 
                {number}
            </li>
        )
    })

    return(
        <React.Fragment>
            <section className="page-numbers">
                <ul className="numbering-wrapper">
                    {displayedNumber}
                </ul>
            </section>
        </React.Fragment>
    )
}
export default PageNumbers;