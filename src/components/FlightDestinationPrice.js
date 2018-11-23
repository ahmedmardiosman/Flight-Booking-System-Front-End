import "../App.css";
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

import {url} from "./constants";

class FlightDestinationPrice extends Component {
  constructor(props) {
    super(props);
    this.state = { destinationId: "" };
    this.state = { priceOfAdultTicket: "" };
    this.state = { priceOfChildTicket: "" };
    this.state = { priceOfOapTicket: "" };
    this.state = { priceOfTickets: "" };
  }
  getDestinationPrice = e => {
    e.preventDefault();
    
    const destinationId = e.target.elements.destinationid.value;
    const adultTickets = e.target.elements.adultticket.value;
    const childTickets = e.target.elements.childticket.value;
    const oapTickets = e.target.elements.oapticket.value;

    

    if (destinationId
       ) {
      axios
        .get(
          url +  `:8080/FlightBookingSystemAPI/api/QAFBS/getFlightDestination/${destinationId}`
        )
        .then(res => {
          console.log(res);

          const destinationId = res.data.destinationId;
          this.setState({ destinationId });
          const destCountry = res.data.destCountry;
          this.setState({ destCountry });
          const destinationCountry = res.data.destCountry;
          this.setState({ destinationCountry });
          const destCity = res.data.destCity;
          this.setState({ destCity });
          const destinationCity = res.data.destCity;
          this.setState({ destinationCity });
          const destDistance = res.data.destDistance;
          this.setState({ destDistance });
          const destPrice = res.data.destPrice;
          this.setState({ destPrice });

          const priceOfAdultTicket = destPrice * 1.2;
          this.setState({ priceOfAdultTicket });
          const priceOfChildTicket = destPrice * 0.9;
          this.setState({ priceOfChildTicket });
          const priceOfOapTicket = destPrice * 0.8;
          this.setState({ priceOfOapTicket });

          const priceOfTickets =
            priceOfAdultTicket * adultTickets +
            priceOfChildTicket * childTickets +
            priceOfOapTicket * oapTickets;

          this.setState({ priceOfTickets });
          
        })
        .catch(error => {
          alert("Destination not found,\nPlease try again!!");
        });
    } else {
      alert("Please Enter Destination ID")
    };
  };

  render() {
    return (
<div>
      <header>
      <h1>Calculate Price for Destination</h1>
    </header>

    <Form horizontal onSubmit={this.getDestinationPrice}>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right"> Please enter the destination ID : </p>
            </Col>
            <Col sm={2}>
              <FormControl
                type="number"
                name="destinationid"
                placeholder="Destination ID..."
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right"> Please enter how many adult tickets you would like : </p>
            </Col>
            <Col sm={2}>
              <FormControl
                type="number"
                name="adultticket"
                placeholder="Adult Tickets..."
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right"> Please enter how many child tickets you would like : </p>
            </Col>
            <Col sm={2}>
              <FormControl
                type="number"
                name="childticket"
                placeholder="Child Tickets..."
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              <p align="right"> Please enter how many OAP tickets you would like (must be over 65
          years old) : </p>
            </Col>
            <Col sm={2}>
              <FormControl
                type="number"
                name="oapticket"
                placeholder="OAP Tickets..."
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={3} sm={5}>
              <Button bsStyle="primary" type="submit">
              Estimate Flight Price
              </Button>
            </Col>
          </FormGroup>
        </Form>
      


        {this.state.destinationId ? (
          <h2>Flight Information</h2>
        ) : (
          <p />
        )}

<Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.destinationId ? (<p align="right">Destination ID :</p>) :(<p/>)        }
            </Col>
            <Col sm={2}>
                {this.state.destinationId ? (<p align="left">{this.state.destinationId}</p>) :(<p/>)
                }
            </Col>
          </FormGroup>

<FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.destCountry ? (<p align="right">Destination Country :</p>) :(<p/>)        }
            </Col>
            <Col sm={2}>
                {this.state.destCountry ? (<p align="left">{this.state.destCountry}</p>) :(<p/>)
                }
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.destCity ? (<p align="right">Destination City :</p>) :(<p/>)        }
            </Col>
            <Col sm={2}>
                {this.state.destCity ? (<p align="left">{this.state.destCity}</p>) :(<p/>)
                }
            </Col>
          </FormGroup>

           <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.destDistance ? (<p align="right">Destination Distance :</p>) :(<p/>)        }
            </Col>
            <Col sm={2}>
                {this.state.destDistance ? (<p align="left">{this.state.destDistance}km</p>) :(<p/>)
                }
            </Col>
          </FormGroup>
       
          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.destPrice ? (<p align="right">Destination Ticket Average Price :</p>) :(<p/>)        }
            </Col>
            <Col sm={2}>
                {this.state.destPrice ? (<p align="left">£{this.state.destPrice}</p>) :(<p/>)
                }
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.priceOfAdultTicket ? (<p align="right">The price of an Adult ticket is :</p>) :(<p/>)        }
            </Col>
            <Col sm={2}>
                {this.state.priceOfAdultTicket ? (<p align="left">£{this.state.priceOfAdultTicket}</p>) :(<p/>)
                }
            </Col>
          </FormGroup>

           <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.priceOfChildTicket ? (<p align="right">The total price of a Child ticket is :</p>) :(<p/>)        }
            </Col>
            <Col sm={2}>
                {this.state.priceOfChildTicket ? (<p align="left">£{this.state.priceOfChildTicket}</p>) :(<p/>)
                }
            </Col>
          </FormGroup>
       
          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.priceOfOapTicket ? (<p align="right">The total price of an OAP ticket is :</p>) :(<p/>)        }
            </Col>
            <Col sm={2}>
                {this.state.priceOfOapTicket ? (<p align="left">£{this.state.priceOfOapTicket}</p>) :(<p/>)
                }
            </Col>
          </FormGroup>
       
          <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
              {this.state.priceOfTickets ? (<p align="right">The total price of the flight is :</p>) :(<p/>)        }
            </Col>
            <Col sm={2}>
                {this.state.priceOfTickets ? (<p align="left">£{this.state.priceOfTickets}</p>) :(<p/>)
                }
            </Col>
          </FormGroup>
          </Form>
      
      </div>
    );
  }
}

export default FlightDestinationPrice;
