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

class GetFlightDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { customerId: "" };
    this.state = { userName: "" };
  }
  getFlight = e => {
    e.preventDefault();

    const flightId = e.target.elements.flightid.value;

    if (flightId) {
      axios
        .get(
          url +  `:8080/FlightBookingSystemAPI/api/QAFBS/getFlight/${flightId}`
        )
        .then(res => {
          console.log(res);

          const flightId = res.data.flightId;
          this.setState({ flightId });
          const customerId = res.data.customerId;
          this.setState({ customerId });
          const destinationCountry = res.data.destinationCountry;
          this.setState({ destinationCountry });
          const destinationCity = res.data.destinationCity;
          this.setState({ destinationCity });
          const priceOfFlight = res.data.priceOfFlight;
          this.setState({ priceOfFlight });
          const cardNumber = res.data.cardNumber;
          this.setState({ cardNumber });
          const expiryDate = res.data.expiryDate;
          this.setState({ expiryDate });
          const cvv = res.data.cvv;
          this.setState({ cvv });
        })
        .catch(error => {
          alert(
            "Flight ID Does Not Exist.\n Please Try Again Or Register Customer."
          );
        });
    } else {
      alert("Please Enter Flight ID");
    }
  };

  render() {
    return (
      <div>
        <header>
          <h1>Search for Flight Details by Flight ID</h1>
        </header>
        <Form horizontal onSubmit={this.getFlight}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Please enter a FlightID : </p>
            </Col>
            <Col sm={2}>
              <FormControl
                type="number"
                name="flightid"
                placeholder="Flight ID..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={5}>
              <Button bsStyle="primary" type="submit">
                Get Flight Information
              </Button>
            </Col>
          </FormGroup>
        </Form>

        {this.state.flightId ? <h2>Flight Details</h2> : <p />}

        <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.flightId ? <p align="right">Flight ID :</p> : <p />}
            </Col>
            <Col sm={2}>
              {this.state.flightId ? (
                <p align="left">{this.state.flightId}</p>
              ) : (
                <p />
              )}
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.customerId ? (
                <p align="right">Customer ID :</p>
              ) : (
                <p />
              )}
            </Col>
            <Col sm={2}>
              {this.state.customerId ? (
                <p align="left">{this.state.customerId}</p>
              ) : (
                <p />
              )}
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.destinationCountry ? (
                <p align="right">Destination Country :</p>
              ) : (
                <p />
              )}
            </Col>
            <Col sm={2}>
              {this.state.destinationCountry ? (
                <p align="left">{this.state.destinationCountry}</p>
              ) : (
                <p />
              )}
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.destinationCity ? (
                <p align="right">Destination City :</p>
              ) : (
                <p />
              )}
            </Col>
            <Col sm={2}>
              {this.state.destinationCity ? (
                <p align="left">{this.state.destinationCity}</p>
              ) : (
                <p />
              )}
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.priceOfFlight ? (
                <p align="right">Price of Flight :</p>
              ) : (
                <p />
              )}
            </Col>
            <Col sm={2}>
              {this.state.priceOfFlight ? (
                <p align="left"> £{this.state.priceOfFlight}</p>
              ) : (
                <p />
              )}
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.cardNumber ? (
                <p align="right">Card Number :</p>
              ) : (
                <p />
              )}
            </Col>
            <Col sm={2}>
              {this.state.cardNumber ? (
                <p align="left">{this.state.cardNumber}</p>
              ) : (
                <p />
              )}
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.expiryDate ? (
                <p align="right">Expiry Date :</p>
              ) : (
                <p />
              )}
            </Col>
            <Col sm={2}>
              {this.state.expiryDate ? (
                <p align="left">{this.state.expiryDate}</p>
              ) : (
                <p />
              )}
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.cvv ? <p align="right">CVV :</p> : <p />}
            </Col>
            <Col sm={2}>
              {this.state.cvv ? <p align="left">{this.state.cvv}</p> : <p />}
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default GetFlightDetails;
