import React, { Component } from 'react';
import CheckBoxOptions from './components/checkboxOptions';
import SelectorOptions from './components/selectorOptions';
import ClientInput from './components/clientInput';
import NoteInput from './components/noteInput';
import AddButton from './components/addButton';
import CardFormat from './components/cardFormat';
import API from "../../utils/API";

const yearOptions = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"];
const extOptions = ["White", "Black", "Metallic White", "Metallic Black","Silver", "Grey", "Light Blue", "Dark Blue", "Red", "Palladium"];
const intOptions = ["Black", "Beige", "Black/Beige", "Grey", "Black/Red", "Chalk"];
const optionsOptions = ["LCA", "Pano Roof", "Nav", "CarPlay", "Ventillated Seats", "Heated Seats", "Leather", "BOSE", "Burmeister", "Chrono", "21inch Wheels"];
const models = ["911", "Cayenne", "Boxster", "Cayman", "Panamera", "Macan"];
const trim = ["Base", "S", "GTS", "hybrid", "Turbo", "Turbo S", "GT4", "GT3", "GT3RS"]
const price = ["$30k", "$40k", "$50k", "$60k", "$70k", "$80k", "$90k", "$100k", "$110k", "$120k", "$130k", "$140k", "$150k+"]


export default class AddClient extends Component {
 
    state = {
      name: "",
      email: "",
      phone: "",
      model: "",
      trim: "",
      min: 0,
      max: 0,
      year: [],
      int: [],
      ext: [],
      options: [],
      notes: "",
    }

    componentDidMount() {
      this.loadCustomers();
    }

    loadCustomers = () => {
      API.getCustomers()
        .then(res => 
        this.setState({ name: "", model: "" })
        )
        .catch(err => console.log(err));
    }

    onInputChange = event => {
      this.setState({[event.target.name]: event.target.value})
    }


    onSubmit = event => {
      event.preventDefault();
      if (this.state.name && this.state.model) {
        API.saveCustomer({
          name: this.state.name,
          model: this.state.model
        })
          .then(res => this.loadCustomers())
          .catch(err => console.log(err));
      }
      console.log(this.state)
    }

    onCheckGroupChange = (name, values) => {
      this.setState({[name]: values})
    }

    onNotesChange = event => {
      this.setState({[event.target.name]: event.target.value})
    }

    render () {
        return (
          <div>
            <h1> Add Client </h1>
            <CardFormat>
            <ClientInput
              name= {this.state.name}
              email={this.state.email}
              phone={this.state.phone}
              onInputChange={this.onInputChange}
            />
            <CheckBoxOptions 
              title="Ext:"
              options={extOptions}
              name="ext"
              values= {this.state.ext}
              onCheckGroupChange={this.onCheckGroupChange}
            />
            <CheckBoxOptions 
              title="Year:"
              options={yearOptions}
              name="year"
              values= {this.state.year}
              onCheckGroupChange={this.onCheckGroupChange}
            />
            <CheckBoxOptions 
              title="Int:"
              options={intOptions}
              name="int"
              values= {this.state.int}
              onCheckGroupChange={this.onCheckGroupChange}
            />
            <CheckBoxOptions 
              title="Extras:"
              options={optionsOptions}
              name="options"
              values= {this.state.options}
              onCheckGroupChange={this.onCheckGroupChange}
            />
            <SelectorOptions
                title='Model:'
                options={models}
                name="model"
                values= {this.state.model}
                onInputChange={this.onInputChange}
            />
            <SelectorOptions
                title='Trim:'
                options={trim}
                name="trim"
                values= {this.state.trim}
                onInputChange={this.onInputChange}
            />
            <SelectorOptions
                title='Min Price:'
                options={price}
                name="min"
                values= {this.state.min}
                onInputChange={this.onInputChange}
            />
            <SelectorOptions
                title="Max Price:"
                options={price}
                name="max"
                values= {this.state.max}
                onInputChange={this.onInputChange}
            />
            <NoteInput
                notes={this.state.notes}
                onNotesChange={this.onNotesChange}
            />
            <AddButton
              onSubmit = {this.onSubmit}
            />
            </CardFormat>

        
              
          
          </div>
          
          
            
          
        )
      }
    }