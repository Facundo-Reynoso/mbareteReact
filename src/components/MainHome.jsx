import React from "react";
import Slider from "./Slider";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css";
import { Button, Col, Row, Card, Image, Container } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import Conoce1 from "../assets/conoce1.jpg";
import Conoce2 from "../assets/conoce2.jpg";
import Conoce3 from "../assets/conoce3.jpg";

const MainHome = () => {
  return (
    <>
      {/* slider */}
      <Slider />
      {/* 1er div azul */}
      <div className="divAzul d-flex flex-column justify-content-center align-items-center">
        <h4>Somos mayoristas</h4>
        <a href="https://wa.me/+5401155959534">
          <Button className="whatsApp">
            Escribinos <FaWhatsapp />
          </Button>
        </a>
      </div>
      {/* 3 cards */}
      <div style={{ marginTop: "60px", marginBottom: "60px" }}>
        <h3 style={{ marginTop: "60px", marginBottom: "60px" }}>
          Conoce todos nuestros productos
        </h3>
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Card>
                <Image src={Conoce1} />
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card>
                <Image src={Conoce2} />
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card>
                <Image src={Conoce3} />
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* 2do div azul */}
      <div className="divAzul d-flex flex-column justify-content-center align-items-center">
        <h4>Hace tu pedido a nuestro Whatsapp y te lo enviamos en el dia</h4>
        <a href="https://wa.me/+5401155959534">
          <Button className="whatsApp">
            Escribinos <FaWhatsapp />
          </Button>
        </a>
      </div>
    </>
  );
};

export default MainHome;
