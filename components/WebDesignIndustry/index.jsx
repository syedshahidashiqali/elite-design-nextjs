import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TabItem from "./TabItem";
import TabContentItem from "./TabContentItem";

function WebDesIndustry({ setChatShow, setShow, setData }) {
  return (
    <div className="webDesignMainWrapper">
      <Container>
        <Row>
          <Col md={12} sm={12} xs={12}>
            <div className="headingTextWrapper">
              <h5 data-aos="fade-down">Web Design Industry</h5>
              <p data-aos="fade-up">
                If you are on the lookout for a website that aligns with your
                business and connects with the customers at the same time, you
                have come to the right platform. Take our word for it Elite
                Design Hub website solutions are up a notch from what other
                digital agencies have to offer! results.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <div className="mainTabsWrapper">
            <Tab.Container defaultActiveKey="custom">
              <Row>
                <Col lg={4} xl={3} md={12}>
                  <div className="serviceTabWrapper">
                    <Nav variant="pills" className="flex-column">
                      <TabItem
                        eventKey="custom"
                        img="/images/svg/icon1.svg"
                        normText="CUSTOM"
                        boldText="WEBSITE"
                      />
                      <TabItem
                        eventKey="content"
                        img="/images/svg/icon2.svg"
                        normText="CONTENT"
                        boldText="MANAGEMENT SYSTEM"
                      />
                      <TabItem
                        eventKey="ecommerce"
                        img="/images/svg/icon3.svg"
                        normText="E-COMMERCE"
                        boldText="DESIGN"
                      />
                      <TabItem
                        eventKey="static"
                        img="/images/svg/icon4.svg"
                        normText="STATIC WEBSITE"
                        boldText="DESIGN"
                      />
                    </Nav>
                  </div>
                </Col>
                <Col lg={8} xl={9} md={12}>
                  <div className="serviceTabContentWrapper">
                    <Tab.Content>
                      <Tab.Pane eventKey="custom">
                        <TabContentItem
                          setChatShow={setChatShow}
                          setData={setData}
                          setShow={setShow}
                          head="CUSTOM WEBSITE"
                          para="Do you want to enhance your sales and spice your marketing strategies on a website? 
                        Look no further. Our team of developers and designers has the ability and exposure to create an 
                        engaging and appealing website for any business. Our websites can be used for mobile devices 
                        without compromising on the user experience one bit. To ensure client satisfaction and maximum 
                        return on investment, we design customized, easy-to-use, and lead-generating websites."
                          imgs={[
                            "/images/website-1.webp",
                            "/images/website-2.webp",
                          ]}
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="content">
                        <TabContentItem
                          setChatShow={setChatShow}
                          setData={setData}
                          setShow={setShow}
                          head="CMS ??? CONTENT MANAGEMENT SYSTEM"
                          para="Every business needs a strong Content Management System (CMS). CMS is essential for 
                        accurate and relevant information. We offer website development solutions for leading CMS 
                        platforms such as WordPress, Joomla, and Drupal."
                          imgs={[
                            "/images/website-3.webp",
                            "/images/website-4.webp",
                          ]}
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="ecommerce">
                        <TabContentItem
                          setChatShow={setChatShow}
                          setData={setData}
                          setShow={setShow}
                          head="E-COMMERCE"
                          para="A well-designed E-commerce website is essential to the success of online stores. 
                        Contrary to the common assumption, a good design goes beyond just graphics and other 
                        aesthetic elements. A professional is required to provide the necessary information, 
                        brand enhancement, visibility of text, etc. to make a site user-friendly. Get the 
                        pitch-perfect website for your brand with our impeccable E-commerce web design and 
                        development service."
                          imgs={[
                            "/images/website-5.webp",
                            "/images/website-6.webp",
                          ]}
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="static">
                        <TabContentItem
                          setChatShow={setChatShow}
                          setData={setData}
                          setShow={setShow}
                          head="STATIC WEBSITE DESIGN"
                          para="Elite Design Hub has the expertise to create a stunning static website. 
                        Our creative team will create a design that will appeal to your clients and keep 
                        them connected to your website for a long time. Rest assured, with our static website, 
                        you will be able to keep the bounce rate under control."
                          imgs={[
                            "/images/website-7.webp",
                            "/images/website-8.webp",
                          ]}
                        />
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default WebDesIndustry;
