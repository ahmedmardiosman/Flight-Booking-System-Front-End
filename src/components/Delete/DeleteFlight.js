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

class DeleteFlight extends Component {
  deleteFlight = e => {
    e.preventDefault();

    const flightId = e.target.elements.flightid.value;

    if (flightId) {
      axios
        .delete(
          url +  `:8080/FlightBookingSystemAPI/api/QAFBS/deleteFlight/${flightId}`
        )
        .then(res => {
          console.log(res);
          alert("Flight Successfully Deleted !!");
        });
    } else return;
  };

  render() {
    return (
      <div>
        <header>
          <h1>Delete Flight and All Information from Database</h1>
        </header>
        <Form horizontal onSubmit={this.deleteFlight}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right">
                {" "}
                Please enter the flight ID of the flight you would like to
                delete :{" "}
              </p>
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
              <Button bsStyle="danger" type="submit">
                Delete Flight
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default DeleteFlight;
