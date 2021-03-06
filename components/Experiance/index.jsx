import styles from "./index.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

function Experiance() {
  return (
    <div className={styles.experiance}>
      <Container>
        <Row>
          <Col md={3} sm={12} xs={12}>
            <div className={styles.experiancetext}>
              <span>
                Over 10 Years of Experience in the Website Design Industry
              </span>
            </div>
          </Col>
          <Col md={9} sm={12} xs={12}>
            <div className={styles.experiancafterimg}>
              <Image
                layout="responsive"
                width={40}
                height={5}
                src="/images/stats.webp"
                alt="Banner Image"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Experiance;
