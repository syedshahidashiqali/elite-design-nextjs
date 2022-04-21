import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import Box from "./Box";
import ButtonMain from "../ButtonMain";
import FsLightbox from "fslightbox-react";

function Portfolio({ setShow }) {
  const images = [
    "/images/small/small1.webp",
    "/images/small/small2.webp",
    "/images/small/small3.webp",
    "/images/small/small4.webp",
    "/images/small/small5.webp",
    "/images/small/small6.webp",
    "/images/small/small7.webp",
    "/images/small/small8.webp",
    "/images/small/small9.webp",
    "/images/small/small10.webp",
    "/images/small/small11.webp",
    "/images/small/small12.webp",
  ];

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }
  return (
    <div className={styles.portfolioMainWrapper}>
      <Container>
        <Row>
          <Col className="text-center" lg={12} md={12} sm={12} xs={12}>
            <div
              className={styles.textWrapper}
              data-aos="zoom-in-down"
              data-aos-duration="500"
              data-aos-easing="linear"
            >
              <h4>Our Services For Startups</h4>
              <h5>SME & Entrepreneurs</h5>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          {images.map((img, index) => (
            <Col
              lg={3}
              md={3}
              sm={6}
              xs={12}
              key={index}
              onClick={() => openLightboxOnSlide(index + 1)}
            >
              <Box src={img} />
            </Col>
          ))}
        </Row>
        <FsLightbox
          toggler={lightboxController.toggler}
          sources={images}
          slide={lightboxController.slide}
          type="image"
        />
        <Row>
          <Col className="text-center mt-5" md={12} sm={12} xs={12}>
            <ButtonMain text="LET'S GET STARTED" setShow={setShow} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
