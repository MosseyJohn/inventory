import React from 'react';

export default function ClientInput(props) {

    return (
        
        <div>
        <div className="card-header">
            <label htmlFor="inputEmail4">Client Name</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="First and Last" value={props.name} onChange={props.onInputChange} name="name"  />
        </div>
        <div className="card-header">
            <label htmlFor="inputPassword4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="name@email.com" onChange={props.onInputChange} name="email" />
        </div>
            <div className="card-header">
            <label htmlFor="inputPassword4">Phone Number</label>
            <input type="email" className="form-control" id="inputEmail4" placeholder="(000) 000-0000"  onChange={props.onInputChange}  name="phone"/>
        </div>
        </div>  
        )
            
            
    }
 