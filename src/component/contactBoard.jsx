import React, { Component } from 'react';
import ContactCard from "./contactCard";
import ContactForm from "./contactForm";
import classes from "./css/card.module.css";
class ContactBoard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cards :[{
                name: "Guy Doe",
                mobileNum: "112233445",
                workNum: "205467772",
                Email: "amel@somemail.com"
            }, {
                    name: "Some Doe",
                    mobileNum: "110232405",
                    workNum: "505467772",
                    Email: "mel@omemail.com"
                }, {
                    name: "John Doe",
                    mobileNum: "112233445",
                    workNum: "305467772",
                    Email: "amil@somemail.org"
                } , {
                    name: "Not Doe",
                    mobileNum: "112233445",
                    workNum: "105467772",
                    Email: "amel@mail.cm"
                }]
        }
    }
    addCard = (name, mobile, work, email) => {
        const newState = { ...this.state };
        const newCard = {
            name: name,
            mobileNum: mobile,
            workNum: work,
            Email: email
        };
        newState.cards = newState.cards.concat(newCard);
        this.setState(newState);
        
    }
    render() {
        const cards = () => this.state.cards.map((card) => {
            return(<ContactCard
                cusName={card.name}
                mobileNo={card.mobileNum}
                workNo={card.workNum}
                email = {card.Email}
                />);
        });            
        return (
            <div >
                <div className={classes.topPart}>
                <h2>Contact Cards</h2>
                    <div><ContactForm onSubmit={this.addCard} /></div>
                    </div>
                <div className={classes.board}>{cards()}</div>
            </div>);
    }

    }


export default ContactBoard;