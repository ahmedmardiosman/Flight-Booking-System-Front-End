import React, { Component } from "react";
import axios from "axios";

import {
  FormControl,
  Form,
  Col,
  FormGroup,
  ControlLabel,
  Button
} from "react-bootstrap";

import {url} from "../constants";

class UpdateFlight extends Component {
  updateFlight = e => {
    e.preventDefault();

    const flightId = e.target.elements.flightid.value;
    const customerId = e.target.elements.customerid.value;
    const destinationCountry = e.target.elements.destinationcountry.value;
    const destinationCity = e.target.elements.destinationcity.value;
    const priceOfFlight = e.target.elements.priceofflight.value;
    const cardNumber = e.target.elements.cardnumber.value;
    const expiryDate = e.target.elements.expirydate.value;
    const cvv = e.target.elements.cvv.value;

    if (
      flightId &&
      customerId &&
      destinationCountry &&
      destinationCity &&
      priceOfFlight &&
      cardNumber &&
      expiryDate &&
      cvv
    ) {
      axios
        .put(
          url +  `:8080/FlightBookingSystemAPI/api/QAFBS/updateFlight/${flightId}`,
          {
            customerId,
            destinationCountry,
            destinationCity,
            priceOfFlight,
            cardNumber,
            expiryDate,
            cvv
          }
        )
        .then(res => {
          console.log(res);
          alert("Flight Details Updated Successfully")
        });
    } else{
      alert("Please fill in All Fields")
    };
  };

  render() {
    return (
      <div>
        <header>
          <h1>Update Flight Information on Database</h1>
        </header>
        <Form horizontal onSubmit={this.updateFlight}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right">
                {" "}
                Please enter the flight ID of the flight :{" "}
              </p>
            </Col>
            <Col sm={2}>
              <FormControl type="number" name="flightid" placeholder="Flight ID..." />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right">
                Please enter the customer ID of the Customer :{" "}
              </p>
            </Col>
            <Col sm={2}>
              <FormControl type="number" name="customerid" placeholder="Customer ID..."/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right">Please enter the destination country : </p>
            </Col>
            <Col sm={3}>
              <FormControl type="text" name="destinationcountry" placeholder="Destination Country..."/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right">Please enter the destination city : </p>
            </Col>
            <Col sm={3}>
              <FormControl type="text" name="destinationcity" placeholder="Destination City..."/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right">Please enter the price of the flight : </p>
            </Col>
            <Col sm={2}>
              <FormControl type="number" name="priceofflight" placeholder="Price..."/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right">Please enter your card number : </p>
            </Col>
            <Col sm={3}>
              <FormControl type="number" name="cardnumber" placeholder="Card Number..."/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right">Please enter your expiry date : </p>
            </Col>
            <Col sm={2}>
              <FormControl type="number" name="expirydate" placeholder="Expiry date..."/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right">Please enter your cvv : </p>
            </Col>
            <Col sm={2}>
              <FormControl type="number" name="cvv" placeholder="CVV..."/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={5}>
              <Button bsStyle="warning" type="submit">
                Update User Information
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default UpdateFlight;
