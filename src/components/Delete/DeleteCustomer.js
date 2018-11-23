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

class DeleteCustomer extends Component {
  deleteCustomer = e => {
    e.preventDefault();

    const customerId = e.target.elements.customerid.value;

    if (customerId) {
      axios
        .delete(
          url +  `:8080/FlightBookingSystemAPI/api/QAFBS/deleteUser/${customerId}`
        )
        .then(res => {
          console.log(res);
          alert("Customer Successfully Deleted !!");
        });
    } else return;
  };

  render() {
    return (
      <div>
        <header>
          <h1>Delete Customer and All Information from Database</h1>
        </header>

        <Form horizontal onSubmit={this.deleteCustomer}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right">
                {" "}
                Please enter the customer ID of the customer you would like to
                delete :{" "}
              </p>
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
            <Col smOffset={3} sm={5}>
              <Button bsStyle="danger" type="submit">
                Delete Customer
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default DeleteCustomer;
