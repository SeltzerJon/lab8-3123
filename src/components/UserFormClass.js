import React, { Component } from 'react'
import './UserFormClass.css';
export default class UserFormClass extends Component {
    constructor(props) {
        super(props)
        this.provinces = ['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador','Northwest Territories',
        'Nova Scotia','Alberta','Nunavut','Ontario','Prince Edward Island','Quebec','Saskatchewan','Yukon']
        this.state = {
            email: '',
            name: '',
            address: '',
            address2: '',
            city: '',
            province: '',
            postalCode: '',
            checkbox: ""
        }
    }

    onValueChanged = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onCheckboxChange = (event) => {
        this.setState({ checkbox: event.target.checked });
    };

    onSubmitForm = (event) => {
        event.preventDefault()
        const formInfo = `
        Email: ${this.state.email}
        Full Name: ${this.state.name}
        Address: ${this.state.address}
        Address 2: ${this.state.address2}
        City: ${this.state.city}
        Province: ${this.state.province}
        Postal Code: ${this.state.postalCode}`;
        // alert(`Form submitted ${formInfo}`);

            this.setState({formInfo});
    }

    render() {
    return (
        <div>
            <h1>Data Entry</h1>
                <form onSubmit={(e) => this.onSubmitForm(e)}>
                    <label htmlFor="email">Email</label>
                    <input
                        name='email'
                        type="text"
                        onChange={(e) => this.onValueChanged(e)}
                        placeholder="Enter Email" />
                    <label for="name">Name</label>
                    <input 
                        name='name'
                        type="text"
                        onChange={(e) => this.onValueChanged(e)} 
                        placeholder="Enter Full Name" />
                    <label for="name">Address</label>
                     <input 
                        name='address'
                        type="text"
                        onChange={(e) => this.onValueChanged(e)} 
                        placeholder="Enter Address" />
                    <label for="name">Address 2</label>
                    <input 
                        name='address2'
                        type="text"
                        onChange={(e) => this.onValueChanged(e)} 
                        placeholder="Enter Address" />
                    <label for="name">City</label>
                    <input 
                        name='city'
                        type="text"
                        onChange={(e) => this.onValueChanged(e)} 
                        placeholder="Enter City" />
                    <select name='province' onChange={(e) => this.onValueChanged(e)}>
                        {
                            this.provinces.map((province) => (
                                 <option key={province} value={province}>{province}</option>
                            ))
                        }
                    </select>
                    <label for="name">Postal Code</label>
                    <input 
                        name='postalCode'
                        type="text"
                        onChange={(e) => this.onValueChanged(e)} 
                        placeholder="Enter Postal Code" />
                    <label htmlFor="checkbox">Agree to terms & Conditions?</label>
                    <input
                        name="checkbox"
                        type="checkbox"
                        onChange={this.onCheckboxChange}
                        checked={this.state.checkbox}
                    />
                    <input
                        name='btnSubmit'
                        type="submit"
                        value="Submit" />
                </form>
                {this.state.formInfo && (
          <div>
            <pre style={{ fontSize: '24px' }}>{this.state.formInfo}</pre>
          </div>
        )}
      </div>
    );
  }
}
