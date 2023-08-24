import React, {useState} from "react";
import './paginate.css';

const PageNumbers=({paginate, capsulesPerPage, totalCapsules})=>{

    const [active, setActive]=useState(false);

    const pageNumber=[];

    for (let number=1; number<=Math.ceil(totalCapsules/capsulesPerPage); number++){
        pageNumber.push(number);
    }

    // if(active){
    //     let elements=document.getElementsByClassName("page-number");

    //     for(let i=0; i<elements.length;i++){
    //         elements[i].classList.add("active")
    //     }
    // }

    const displayedNumber=pageNumber.map((number)=>{

        return (
            <li key={number} onClick={()=>{paginate(number)
            setActive(true)}} className="page-number"> 
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