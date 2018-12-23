import React from 'react';

export default function NoteInput(props) {

    return (
        <div>
        <li className="list-group-item">
            <label htmlFor="exampleFormControlTextarea1">NOTES:</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={props.name} onChange={props.onNotesChange} name="notes"></textarea>
        </li>
        </div> 
         
        )
            
            
    }