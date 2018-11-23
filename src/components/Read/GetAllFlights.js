import React, { Component } from "react";
import axios from "axios";

import {
  Form,
  Col,
  FormGroup,
  ControlLabel,
  Button
} from "react-bootstrap";

import {url} from "../constants";

const Info = (props) => {

  return (

    <div className="AllFlightInfo">

   

       <h2 align="left" >Flight ID : {props.flightId}</h2><br/>

       <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right">Customer ID </p> 
            </Col>
            <Col sm={2}>
                <p align="left">{props.customerId}</p>
            </Col>
          </FormGroup>


           <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right">Destination City : </p> 
            </Col>
            <Col sm={2}>
                <p align="left">{props.destinationCountry}</p>
            </Col>
          </FormGroup>

<FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right"> Destination City : </p> 
            </Col>
            <Col sm={2}>
                <p align="left">{props.destinationCity}</p>
            </Col>
          </FormGroup>

<FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right"> Price of Flight :</p> 
            </Col>
            <Col sm={2}>
                <p align="left">{props.priceOfFlight}</p>
            </Col>
          </FormGroup>

<FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right"> Card Number :</p> 
            </Col>
            <Col sm={2}>
                <p align="left">{props.cardNumber}</p>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right"> Expiry Date :</p> 
            </Col>
            <Col sm={2}>
                <p align="left">{props.expiryDate}</p>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right">CVV :</p> 
            </Col>
            <Col sm={2}>
                <p align="left">{props.cvv}</p>
            </Col>
          </FormGroup>
          
          </Form>
      

        <br/>
        <br/>

      </div>


  );
};

const InfoList = (props) =>{
return(

  <div>

    {props.AllFlightInfo.map(AllFlightInfo=> <Info{...AllFlightInfo}/>)}
  </div>



)
}


class GetAllFlights extends Component {
 
  state = {
    details :[]
  }

  componentDidMount (){

    
      axios
        .get(
          url +  `:8080/FlightBookingSystemAPI/api/QAFBS/getAllFlightsInformation`
        )
        .then(res => {
          const details = res.data;
          this.setState({details});     
        })
       
       

    
  };

  render() {
    return (
      <div>
        <header>
          <h1>All Flight Details by Flight ID</h1>
        </header>

          <InfoList AllFlightInfo = {this.state.details}/>
      </div>
    );
  }
}

export default GetAllFlights;
