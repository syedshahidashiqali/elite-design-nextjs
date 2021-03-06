import { faPhone, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";

function Header({ setChatShow }) {
  return (
    <div className={styles.header} fixed="top">
      <div className={styles.navigation}>
        <Container>
          <Row>
            <Col md={2} sm={2} xs={4}>
              <div className={styles.logo}>
                <video className="img-fluid" autoPlay loop muted playsInline>
                  <source src="/videos/logo.webm" type="video/webm" />
                </video>
              </div>
            </Col>
            <Col lg={10} md={10} sm={10} xs={8}>
              <div className={styles.callright}>
                <div className={styles.callTag}>
                  <a href="tel:+15122715131">
                    <FontAwesomeIcon icon={faPhone} />
                    <span>+1 (512) 271-5131</span>
                  </a>
                </div>
                <div className={styles.ChatLink} onClick={setChatShow}>
                  <a href="#">
                    <FontAwesomeIcon icon={faComment} />
                    <span>Live chat</span>
                  </a>
                </div>
                <div className={styles.clearfix}></div>
              </div>
              <div className={styles.clearfix}></div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Header;
