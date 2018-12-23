import React from 'react';

export default function CardFormat(props) {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card" style={{width: "18rem"}}>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>

         
        )
            
            
    }







