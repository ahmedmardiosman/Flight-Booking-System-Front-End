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

class RegisterationPage extends Component {
  addUser = e => {
    e.preventDefault();

    const userName = e.target.elements.username.value;
    const firstName = e.target.elements.firstname.value;
    const secondName = e.target.elements.secondname.value;
    const adressLine1 = e.target.elements.adressline1.value;
    const adressLine2 = e.target.elements.adressline2.value;
    const postcode = e.target.elements.postcode.value;
    const townOrCity = e.target.elements.townorcity.value;
    const telephoneNumber = e.target.elements.telephonenumber.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (
      userName &&
      firstName &&
      secondName &&
      adressLine1 &&
      adressLine2 &&
      postcode &&
      townOrCity &&
      telephoneNumber &&
      email &&
      password
    ) {
      axios
        .post(url +  `:8080/FlightBookingSystemAPI/api/QAFBS/createUser`, {
          userName,
          firstName,
          secondName,
          adressLine1,
          adressLine2,
          postcode,
          townOrCity,
          telephoneNumber,
          email,
          password
        })
        .then(res => {
          console.log(res);
          alert(firstName +" " + secondName + " has been Registered.")
        });
    } else {
      alert("Please Fill in All Fields");
    }
  };

  render() {
    return (
      <div>
        <header>
          <h1>Register A Customer on Database</h1>
        </header>
        <Form horizontal onSubmit={this.addUser}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Please enter your desired username : </p>
            </Col>
            <Col sm={3}>
              <FormControl
                type="text"
                name="username"
                placeholder="Desired Username..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Please enter your first name : </p>
            </Col>
            <Col sm={3}>
              <FormControl
                type="text"
                name="firstname"
                placeholder="First Name..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Please enter your Second name : </p>
            </Col>
            <Col sm={3}>
              <FormControl
                type="text"
                name="secondname"
                placeholder="Second Name..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Please enter your first adress line : </p>
            </Col>
            <Col sm={3}>
              <FormControl
                type="text"
                name="adressline1"
                placeholder="Adress Line 1..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Please enter your second adress line : </p>
            </Col>
            <Col sm={3}>
              <FormControl
                type="text"
                name="adressline2"
                placeholder="Adress Line 1..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Please enter your postcode : </p>
            </Col>
            <Col sm={3}>
              <FormControl
                type="text"
                name="postcode"
                placeholder="Postcode..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Please enter your Town or City : </p>
            </Col>
            <Col sm={3}>
              <FormControl
                type="text"
                name="townorcity"
                placeholder="Town or City..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Please enter your telephone number : </p>
            </Col>
            <Col sm={3}>
              <FormControl
                type="text"
                name="telephonenumber"
                placeholder="Telephone Number..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Please enter your Email : </p>
            </Col>
            <Col sm={3}>
              <FormControl type="email" name="email" placeholder="Email..." />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={4}>
              <p align="right"> Please enter your password : </p>
            </Col>
            <Col sm={3}>
              <FormControl
                type="text"
                name="password"
                placeholder="Password..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={5}>
              <Button bsStyle="success" type="submit">
                Register Customer
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default RegisterationPage;
