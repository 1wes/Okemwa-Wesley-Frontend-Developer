import React from 'react';
import './select.css';

const SelectInputField=({children, value, onChange, optionValue, label})=>{

    return(
        <>
            <label>{label}</label>
            <select value={value} onChange={onChange} className='select-field'>
                <option value={optionValue} hidden disabled >Filter</option>
            </select>
        </>
    )
}
export default SelectInputField;