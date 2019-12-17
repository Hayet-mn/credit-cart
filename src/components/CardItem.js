import React from "react";
import Logo from "./images/logo.jpg";
import Puce from "./images/puce.jpg";



const formatNumberForCard = cardNumber =>
    cardNumber.concat("*".repeat(16 - cardNumber.length))

const formatdateForCard = dateCard =>
dateCard.concat("*".repeat(5 - dateCard.length))    
    

const CardItem = (props) => 

<div className="creditCard">

<h3 className="CompanyName">Company name</h3>
<div> <img className="puce" src={Puce} alt="img" /></div>
<div className="carte">
<div> 
<p>{formatNumberForCard(props.items[0])}</p>
<p className="dateexp">{formatdateForCard(props.items[1])}</p>
<p>{(props.items[2])} </p> 
</div>
<div> <img className="logo" src={Logo} alt="img" /></div>
</div>

</div>

    

export default CardItem;
