import React from 'react';

export default function SelectorOptions(props) {

    const optionList = props.options.map((option, idx) =>{
        
        return (
            <option key={idx}>
                {option}
            </option>
        )
        
    })
    
    return (
            <div>
            <li className="list-group-item">{props.title}
            <label htmlFor="inputState"></label>
            <select name={props.name} id="inputState" className="form-control" value={props.value} onChange={props.onInputChange}>
                <option defaultValue>Choose...</option>
                {optionList}
            </select>
            </li>
            </div>
    

)

}