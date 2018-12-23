import React from 'react';

export default function AddButton(props) {

    return (
        
        <div>
         <button onClick={props.onSubmit} type="submit" className="btn btn-primary">Add</button>
        </div>  
        )
            
            
    }
