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

class BookFlight extends Component {
  addFlight = e => {
    e.preventDefault();

    const customerId = e.target.elements.customerid.value;
    const destinationCountry = e.target.elements.destinationcountry.value;
    const destinationCity = e.target.elements.destinationcity.value;
    const priceOfFlight = e.target.elements.priceofflight.value;
    const cardNumber = e.target.elements.cardnumber.value;
    const expiryDate = e.target.elements.expirydate.value;
    const cvv = e.target.elements.cvv.value;

    if (
      customerId &&
      destinationCountry &&
      destinationCity &&
      priceOfFlight &&
      cardNumber &&
      expiryDate &&
      cvv
    ) {
      axios
        .post(url +  `:8080/FlightBookingSystemAPI/api/QAFBS/createFlight`, {
          customerId,
          destinationCountry,
          destinationCity,
          priceOfFlight,
          cardNumber,
          expiryDate,
          cvv
        })
        .then(res => {
          console.log(res);
          alert("Flight Successfully Booked!!");
        })
        .catch(error => {
          alert(
            "Customer ID Does Not Exist.\n Please Try Again Or Register Customer."
          );
        });
    } else {
      alert("Please Fill All Fields!!");
    }
  };

  render() {
    return (
      <div>
        <header>
          <h1>Book Flight</h1>
        </header>
        <Form horizontal onSubmit={this.addFlight}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Please enter your customer ID : </p>
            </Col>
            <Col sm={2}>
              <FormControl
                type="number"
                name="customerid"
                placeholder="Customer ID..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Please enter your destination country : </p>
            </Col>
            <Col sm={3}>
              <FormControl
                type="text"
                name="destinationcountry"
                placeholder="Destination Country..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Please enter your destination city : </p>
            </Col>
            <Col sm={3}>
              <FormControl
                type="text"
                name="destinationcity"
                placeholder="Destination City..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Please enter your price of flight : </p>
            </Col>
            <Col sm={2}>
              <FormControl
                type="number"
                name="priceofflight"
                placeholder="Price..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Please enter your card number : </p>
            </Col>
            <Col sm={3}>
              <FormControl
                type="number"
                name="cardnumber"
                placeholder="Card Number..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Please enter your expiry date : </p>
            </Col>
            <Col sm={2}>
              <FormControl
                type="number"
                name="expirydate"
                placeholder="Expiry Date..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Please enter your cvv : </p>
            </Col>
            <Col sm={2}>
              <FormControl type="number" name="cvv" placeholder="CVV..." />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={5}>
              <Button bsStyle="success" type="submit">
                Book Flight
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default BookFlight;
