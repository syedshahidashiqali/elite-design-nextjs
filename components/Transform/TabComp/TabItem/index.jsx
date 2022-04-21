import { Nav, Col } from "react-bootstrap";
import Image from "next/image";

function TabItem({ eventKey, img, text1, text2 }) {
  return (
    <Col lg={3} md={3} sm={6} xs={6}>
      <Nav.Item>
        <Nav.Link eventKey={eventKey}>
          <div className="transformTabInnerWrapper">
            <Image
              layout="intrinsic"
              width={40}
              height={40}
              src={img}
              alt="icon"
            />
            <span>
              {text1} <br /> {text2}
            </span>
          </div>
        </Nav.Link>
      </Nav.Item>
    </Col>
  );
}

export default TabItem;
