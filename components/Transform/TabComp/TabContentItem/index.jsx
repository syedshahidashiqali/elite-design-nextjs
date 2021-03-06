import { Row, Col } from "react-bootstrap";
import ButtonMain from "../../../ButtonMain";
import Image from "next/image";

function TabContentItem({ head, para, img, setShow }) {
  return (
    <div className="transformTabContentWrapper">
      <Row>
        <Col lg={5} md={12} sm={12} xs={12}>
          <div
            className="transformTabContentTextWrapper"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h3>{head}</h3>
            <p>{para}</p>
            <ButtonMain text="LET'S GET STARTED" setShow={setShow} />
          </div>
        </Col>
        <Col lg={7} md={12} sm={12} xs={12}>
          <div
            className="transformTabContentImgWrapper"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <Image
              layout="intrinsic"
              width={250}
              height={250}
              className="img-fluid"
              src={img}
              alt="icon"
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default TabContentItem;
