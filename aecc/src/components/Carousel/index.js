import React, { Component } from 'react';
import './styles.css';
import { Carousel } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <section>
          <div className="carouselBackground"> 
                <Carousel interval={600} keyboard={false} pauseOnHover={true}>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={"images/home/fondo1.JPG"}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block w-100"
                            src={"images/home/fondo2.JPG"}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={"images/home/fondo3.JPG"}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item  >
                        <img 
                            className="d-block w-100"
                            src={"images/home/fondo4.JPG"}
                            alt="Fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item  >
                        <img 
                            className="d-block w-100"
                            src={"images/home/fondo5.JPG"}
                            alt="Fifth slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>     
      </section>
    );
  }
}