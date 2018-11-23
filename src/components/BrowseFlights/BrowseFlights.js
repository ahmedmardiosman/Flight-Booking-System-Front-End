import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

import Berlin from "./Berlin.jpg";
import Japan from "./Japan.jpg";
import Egypt from "./Egypt.jpg";
import France from "./France.jpg";
import Australia from "./Australia.jpg";
import Brazil from "./Brazil.jpg";
import Mauritius from "./Mauritius.jpg";

class BrowseFlights extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Browse Flights </h1>
        </header>
        <center>
          <Carousel>
            <Carousel.Item>
              <img width={900} height={500} src={Berlin} />
              <Carousel.Caption>
                <font color="white">
                  <h3>Germany, Berlin</h3>
                  <h5>
                    932km From London, Average Ticket Price £100, Destination ID
                    : 1
                  </h5>
                </font>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} src={Japan} />
              <Carousel.Caption>
                <h3>Japan, Tokyo</h3>
                <h5>
                  9569km From London, Average Ticket Price £1000, Destination ID
                  : 2
                </h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} src={Egypt} />
              <Carousel.Caption>
                <h3>Egypt, Cairo</h3>
                <h5>
                  3515km From London, Average Ticket Price £500, Destination ID
                  : 3
                </h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} src={France} />
              <Carousel.Caption>
                <h3>France, Paris</h3>
                <h5>
                  343km From London, Average Ticket Price £80, Destination ID :
                  4
                </h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} src={Australia} />
              <Carousel.Caption>
                <h3>Australia, Sydney</h3>
                <h5>
                  17000km From London, Average Ticket Price £1400, Destination
                  ID : 5
                </h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} src={Brazil} />
              <Carousel.Caption>
                <h3>Brazil, Rio de Janeiro</h3>
                <h5>
                  8807km From London, Average Ticket Price £860, Destination ID
                  : 6
                </h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={900} height={500} src={Mauritius} />
              <Carousel.Caption>
                <h3>Mauritius, Port Louis</h3>
                <h5>
                  9744km From London, Average Ticket Price £920, Destination ID
                  : 7
                </h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          ;
        </center>
      </div>
    );
  }
}

export default BrowseFlights;
