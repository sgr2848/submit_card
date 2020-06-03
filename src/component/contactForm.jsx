import React, { Component } from "react";

class ContactForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            mobileNum: "",
            workNum: "",
            Email: ""
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.name, this.state.mobileNum, this.state.workNum, this.state.Email);
    }
    handleChange = (event) => {
        const value = event.target.value;
        this.setState({
            ...this.state, [event.target.name]: value
        });
    }
    render() {
       return( <div>
            <form onSubmit={this.handleSubmit}>
               <input type="text" name="name" placeholder="someName" onChange={this.handleChange} value={this.state.name}></input>&emsp;
                <input type="text" name="mobileNum" placeholder="Mobile Number" onChange={this.handleChange} value={this.state.mobileNum}></input><br/>
               <input type="text" name="workNum" placeholder="Work Number" onChange={this.handleChange} value={this.state.workNum}></input><br/>  
               <input type="email" name="Email" placeholder="email address" onChange={this.handleChange} value={this.state.Email}></input><br/>
                <button>Add</button>
            </form>
        </div>)
    }
}
export default ContactForm;