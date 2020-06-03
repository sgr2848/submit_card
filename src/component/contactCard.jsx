import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./css/card.module.css";

class ContactCard extends Component{
    render() {
        return (<div className={classes.card}>
            <h1>{this.props.cusName}</h1>
            <ul>
                <li>Mobile : {this.props.mobileNo}</li>
                <li>Work : {this.props.workNo}</li>
                <li>Email : {this.props.email}</li>
            </ul>
        </div>);
    }
}
ContactCard.propTypes = {
    name: PropTypes.string.isRequired,
    Mobile: PropTypes.string.isRequired,
    workNo: PropTypes.string,
    Email: PropTypes.string.isRequired
}
export default ContactCard;