import React from "react";
import "../App.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

import axios from "axios";

import {
  ButtonToolbar,
  DropdownButton,
  MenuItem,
  Button,
  Navbar,
  Nav,
  NavItem,
  PageHeader,
  FormControl,
  Form,
  Col,
  FormGroup,
  ControlLabel
} from "react-bootstrap";

import {url} from "./constants";

import BrowseFlight from "./BrowseFlights/BrowseFlights";

import FlightDestinationsPrice from "./FlightDestinationPrice";

import BookFlight from "./Create/BookFlight";

import RegisterationPage from "./Create/RegistrationPage";

import GetCustomerDetails from "./Read/GetCustomerDetails";

import GetFlightDetails from "./Read/GetFlightDetails";

import GetAllCustomers from "./Read/GetAllCustomers";

import GetAllFlights from "./Read/GetAllFlights";

import UpdateCustomer from "./Update/UpdateCustomer";

import UpdateFlight from "./Update/UpdateFlight";

import DeleteCustomer from "./Delete/DeleteCustomer";

import DeleteFlight from "./Delete/DeleteFlight";

function Authentication() {
  return (
    <Router>
      <div>
        <h3>
          <AuthButton />
        </h3>
        <ButtonToolbar>
          <DropdownButton
            bsStyle="primary"
            bsSize="large"
            title="Admin Options"
            id="dropdown-size-large"
          >
            <MenuItem eventKey="1">
              <Link to="/BookFlight" exact>
                Book Flight
              </Link>
            </MenuItem>
            <MenuItem eventKey="2" href="/Registration">
              <Link to="/Registration" exact>
                Register Customer
              </Link>
            </MenuItem>
            <MenuItem eventKey="3">
              <Link to="/GetCustomerInfo" exact>
                Get Customer Information
              </Link>
            </MenuItem>
            <MenuItem eventKey="4">
              <Link to="/GetFlightInfo" exact>
                Get Flight Information
              </Link>
            </MenuItem>
            <MenuItem eventKey="5">
              <Link to="/GetAllCustomers" exact>
                Get All Customers
              </Link>
            </MenuItem>
            <MenuItem eventKey="6">
              <Link to="/GetAllFlights" exact>
                Get All Flights
              </Link>
            </MenuItem>
            <MenuItem eventKey="7">
              <Link to="/UpdateCustomerInfo" exact>
                Update Customer Information
              </Link>
            </MenuItem>
            <MenuItem eventKey="8">
              <Link to="/UpdateFlightInfo" exact>
                Update Flight Information
              </Link>
            </MenuItem>
            <MenuItem eventKey="9">
              <Link to="/DeleteCustomerInfo" exact>
                Delete Existing Customer Information
              </Link>
            </MenuItem>
            <MenuItem eventKey="10">
              <Link to="/DeleteFlightInfo" exact>
                Delete Flight Booking
              </Link>
            </MenuItem>
          </DropdownButton>
        </ButtonToolbar>
        <h1>Welcome to QA Flight Booking System</h1>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <h1>QA Flight Booking System</h1>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1}>
              <Link to="/BrowseFlights" exact>
                <h1>Browse Flights</h1>
              </Link>
            </NavItem>
            <NavItem eventKey={2}>
              <Link to="/EstimateFlightPrice" exact>
                <h1>Estimate a Flight Price</h1>
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
        ;
        <Route path="/BrowseFlights" component={BrowseFlight} />
        <Route
          path="/EstimateFlightPrice"
          component={FlightDestinationsPrice}
        />
        <Route path="/Login" component={Login} />
        <PrivateRoute path="/BookFlight" component={BookFlight} />
        <PrivateRoute path="/Registration" component={RegisterationPage} />
        <PrivateRoute path="/GetCustomerInfo" component={GetCustomerDetails} />
        <PrivateRoute path="/GetFlightInfo" component={GetFlightDetails} />
        <PrivateRoute path="/GetAllCustomers" component={GetAllCustomers} />
        <PrivateRoute path="/GetAllFlights" component={GetAllFlights} />
        <PrivateRoute path="/UpdateCustomerInfo" component={UpdateCustomer} />
        <PrivateRoute path="/UpdateFlightInfo" component={UpdateFlight} />
        <PrivateRoute path="/DeleteCustomerInfo" component={DeleteCustomer} />
        <PrivateRoute path="/DeleteFlightInfo" component={DeleteFlight} />
      </div>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(({ history }) =>
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome Admin User!{" "}
      <Button
        bsStyle="warning"
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        {" "}
        Log out
      </Button>
    </p>
  ) : (
    <p>Admin is not logged in.</p>
  )
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/Login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { customerId: "" };
    this.state = { password: "" };
    this.state = { redirectToReferrer: false };
  }

  login = e => {
    e.preventDefault();

    const adminId = e.target.elements.adminid.value;
    const password = e.target.elements.password.value;

    axios
      .get(
      url +  `:8080/FlightBookingSystemAPI/api/QAFBS/getAdminAccount/${adminId}`
      )
      .then(res => {
        console.log(res);

        const adminNameFromDB = res.data.adminName;
        this.setState({ adminNameFromDB });

        const passwordFromDB = res.data.password;
        this.setState({ passwordFromDB });

        if (passwordFromDB == password) {
          alert(adminNameFromDB + " is logged in as Admin");
          console.log("Login Successful");
          fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
          });
        } else {
          console.log("login unSuccessful");
          alert("Incorrect Password. \nPlease Try Again");
        }
      })
      .catch(error => {
        alert("Admin ID does not Exist.\nPlease try again!!");
      });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <header>
          <h1>Admin Login</h1>
        </header>
        <Form horizontal onSubmit={this.login}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right"> Please enter Admin ID number : </p>
            </Col>
            <Col sm={2}>
              <FormControl
                type="number"
                name="adminid"
                placeholder="Admin ID..."
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right"> Please enter Admin password : </p>
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
              <Button bsStyle="primary" type="submit">
                Log In
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Authentication;
