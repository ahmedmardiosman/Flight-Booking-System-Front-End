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

class GetCustomerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { customerId: "" };
    this.state = { userName: "" };
  }
  getCustomer = e => {
    e.preventDefault();

    const customerId = e.target.elements.customerid.value;

    if (customerId) {
      axios
        .get(
          url +  `:8080/FlightBookingSystemAPI/api/QAFBS/getUser/${customerId}`
        )
        .then(res => {
          console.log(res);

          const customerId = res.data.customerId;
          this.setState({ customerId });
          const userName = res.data.userName;
          this.setState({ userName });
          const firstName = res.data.firstName;
          this.setState({ firstName });
          const secondName = res.data.secondName;
          this.setState({ secondName });
          const adressLine1 = res.data.adressLine1;
          this.setState({ adressLine1 });
          const adressLine2 = res.data.adressLine2;
          this.setState({ adressLine2 });
          const postcode = res.data.postcode;
          this.setState({ postcode });
          const townOrCity = res.data.townOrCity;
          this.setState({ townOrCity });
          const telephoneNumber = res.data.telephoneNumber;
          this.setState({ telephoneNumber });
          const email = res.data.email;
          this.setState({ email });
          const password = res.data.password;
          this.setState({ password });
        })
        .catch(error => {
          alert(
            "Customer ID Does Not Exist.\n Please Try Again Or Register Customer."
          );
        });
    } else {
      alert("Please Enter Customer ID");
    }
  };

  render() {
    return (
      <div>
        <header>
          <h1>Search for Customer Details by Customer ID</h1>
        </header>
        <Form horizontal onSubmit={this.getCustomer}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Please enter a CustomerID : </p>
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
              <Button bsStyle="primary" type="submit">
                Get Customer Information
              </Button>
            </Col>
          </FormGroup>
        </Form>

        {this.state.customerId ? <h2>Customer Details</h2> : <p />}

        <Form horizontal>
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
              {this.state.userName ? <p align="right">Username :</p> : <p />}
            </Col>
            <Col sm={2}>
              {this.state.userName ? (
                <p align="left">{this.state.userName}</p>
              ) : (
                <p />
              )}
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.firstName ? <p align="right">First Name :</p> : <p />}
            </Col>
            <Col sm={2}>
              {this.state.firstName ? (
                <p align="left">{this.state.firstName}</p>
              ) : (
                <p />
              )}
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.secondName ? (
                <p align="right">Second Name :</p>
              ) : (
                <p />
              )}
            </Col>
            <Col sm={2}>
              {this.state.secondName ? (
                <p align="left">{this.state.secondName}</p>
              ) : (
                <p />
              )}
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.adressLine1 ? (
                <p align="right">Adress Line 1 :</p>
              ) : (
                <p />
              )}
            </Col>
            <Col sm={2}>
              {this.state.adressLine1 ? (
                <p align="left">{this.state.adressLine1}</p>
              ) : (
                <p />
              )}
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.adressLine2 ? (
                <p align="right">Adress Line 2 :</p>
              ) : (
                <p />
              )}
            </Col>
            <Col sm={2}>
              {this.state.adressLine2 ? (
                <p align="left">{this.state.adressLine2}</p>
              ) : (
                <p />
              )}
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.postcode ? <p align="right">Postcode :</p> : <p />}
            </Col>
            <Col sm={2}>
              {this.state.postcode ? (
                <p align="left">{this.state.postcode}</p>
              ) : (
                <p />
              )}
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.townOrCity ? (
                <p align="right">Town or City :</p>
              ) : (
                <p />
              )}
            </Col>
            <Col sm={2}>
              {this.state.townOrCity ? (
                <p align="left">{this.state.townOrCity}</p>
              ) : (
                <p />
              )}
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.telephoneNumber ? (
                <p align="right">Telephone Number :</p>
              ) : (
                <p />
              )}
            </Col>
            <Col sm={2}>
              {this.state.telephoneNumber ? (
                <p align="left">{this.state.telephoneNumber}</p>
              ) : (
                <p />
              )}
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.email ? <p align="right">Email :</p> : <p />}
            </Col>
            <Col sm={2}>
              {this.state.email ? (
                <p align="left">{this.state.email}</p>
              ) : (
                <p />
              )}
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.password ? <p align="right">Password :</p> : <p />}
            </Col>
            <Col sm={2}>
              {this.state.password ? (
                <p align="left">{this.state.password}</p>
              ) : (
                <p />
              )}
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default GetCustomerDetails;
