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

    <div className="AllCustomerInfo">

   

       <h2 align="left" >Customer ID : {props.customerId}</h2><br/>

       <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right">Username : </p> 
            </Col>
            <Col sm={2}>
                <p align="left">{props.userName}</p>
            </Col>
          </FormGroup>


           <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right">First Name : </p> 
            </Col>
            <Col sm={2}>
                <p align="left">{props.firstName}</p>
            </Col>
          </FormGroup>

<FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right"> Second Name : </p> 
            </Col>
            <Col sm={2}>
                <p align="left">{props.secondName}</p>
            </Col>
          </FormGroup>

<FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right"> Adress Line 1 :</p> 
            </Col>
            <Col sm={2}>
                <p align="left">{props.adressLine1}</p>
            </Col>
          </FormGroup>

<FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right"> Adress Line 2 :</p> 
            </Col>
            <Col sm={2}>
                <p align="left">{props.adressLine2}</p>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right"> Town or City :</p> 
            </Col>
            <Col sm={2}>
                <p align="left">{props.townOrCity}</p>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right">Postcode :</p> 
            </Col>
            <Col sm={2}>
                <p align="left">{props.postcode}</p>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right">Telephone Number :</p> 
            </Col>
            <Col sm={2}>
                <p align="left">{props.telephoneNumber}</p>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right">Email :</p> 
            </Col>
            <Col sm={2}>
                <p align="left">{props.email}</p>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right">Password :</p> 
            </Col>
            <Col sm={2}>
                <p align="left">{props.password}</p>
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

    {props.AllCustomerInfo.map(AllCustomerInfo=> <Info{...AllCustomerInfo}/>)}
  </div>



)
}


class GetAllCustomers extends Component {
 
  state = {
    details :[]
  }

  componentDidMount (){

    
      axios
        .get(
          url +  `:8080/FlightBookingSystemAPI/api/QAFBS/getAllUserAndFlightInformation`
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
          <h1>All Customer Details by Customer ID</h1>
        </header>

          <InfoList AllCustomerInfo = {this.state.details}/>
      </div>
    );
  }
}

export default GetAllCustomers;
