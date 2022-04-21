import { Nav } from "react-bootstrap";
import Image from "next/image";

function TabItem({ eventKey, img, normText, boldText }) {
  return (
    <Nav.Item>
      <Nav.Link eventKey={eventKey}>
        <div className="tabInnerWrapper">
          <Image
            src={img}
            layout="intrinsic"
            width={50}
            height={50}
            alt="icon"
          />
          <div className="tabInnerTextWrapper">
            <span>{normText}</span>
            <h3>{boldText}</h3>
          </div>
        </div>
      </Nav.Link>
    </Nav.Item>
  );
}

export default TabItem;
