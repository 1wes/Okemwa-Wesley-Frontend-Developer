import React from "react";
import './search.css';
import SelectInputField from "./select";

const Filters=()=>{

    return(
        <React.Fragment>
            <h1>Search Form</h1>
            <form>
                <div className="input-element"><SelectInputField/></div>
                <div className="input-element"><SelectInputField/></div>
                <div className="input-element"><SelectInputField/></div>
                <div className="input-element"><button>Search</button></div>
            </form>
        </React.Fragment>
    )
}
export default Filters;