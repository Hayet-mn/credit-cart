import React, { Component } from 'react';
import CardItem from "./CardItem";



//format  number of card
const formatCardNumber = cardNumber => {
    
  if (cardNumber === "") return "";
return cardNumber.match(/.{1,4}/g).join(" ");
};

//check the expiry date of card
const ValidThru = ValidThru =>{
  

  let date = ValidThru.replace(/\D/g, "").slice(0, 4).match(/.{1,2}/g);
  if (!date) {
    return "";
  }
  if (date.length === 1) {
    let month = Number(date[0]);
    if (month > 12) date[0]= "12";
    if (month === 0 && date[0].length === 2) {
        date[0]= "0";
    }
  }
  
  return date.join("/");
}



class CreditCard extends Component {

    
constructor(props) {
    super(props)

    this.state = {
        number: '',
        name: '',
        expiry: '',
    
     }
  }
   //Card Number
 
   changeNumber = event =>{
    this.setState({
        
        number:(event.target.value).replace(/\D/g, "").slice(0, 16)});
  
}

  //Name of Card 
  
  changeName = event =>{
    this.setState({
        name:(event.target.value).trim().replace(/[^a-zA-Z]/g, "").toLocaleUpperCase().slice(0, 20)
    });
  
}

 
  //Expiration

  changeExpiration = event =>{
   this.setState({
        expiry:ValidThru(event.target.value)
    });
  
    }
 
  
  
   render() {
    return (
 <div  className="creditBank">


<CardItem items={[this.state.number,this.state.expiry,this.state.name]} />

        
<div className="InputCard">
<div className="Inputitem"><span>Card Number :</span> <input value={formatCardNumber(this.state.number)} onChange={this.changeNumber}  placeholder="Enter the Card Number" /></div>
 <div className="Inputitem"> <span>Name :</span> <input value={this.state.name} onChange={this.changeName} placeholder=" Enter the Name"/></div>
 <div className="Inputitem"> <span>Expiration Dates : </span> <input value={this.state.expiry} onChange={this.changeExpiration} placeholder="Enter the expiration dates"/></div>
            
</div>
        
       
</div>
          )
        }
      }
      export default CreditCard;