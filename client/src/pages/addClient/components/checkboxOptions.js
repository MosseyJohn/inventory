import React from 'react';

export default function CheckBoxOptions(props) {
  const onChange = (event) => {
  
    const values = props.values;

    const index = values.indexOf(event.target.value)
    if(index === -1) {
    values.push(event.target.value);
    }
    else {
      values.splice(index, 1);
    }
    
    props.onCheckGroupChange(props.name, values)

  }



  const formattedOptions = props.options.map(option =>{
    return (
      <div key={option} className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value={option} onChange={onChange} />
        <label className="form-check-label" htmlFor="inlineCheckbox1">{option}</label>
      </div>
    )
  })
  return (
    <li className="list-group-item">{props.title}
      <br/>
      {formattedOptions}
    </li>
  )
}