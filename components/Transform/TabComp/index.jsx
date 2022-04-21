import { Row, Tab, Nav } from "react-bootstrap";
import TabItem from "./TabItem";
import TabContentItem from "./TabContentItem";

function TabCom({ setShow }) {
  return (
    <div className="transformMainTabsWrapper">
      <Tab.Container defaultActiveKey="brief">
        <div
          className="transformServiceTabWrapper"
          data-aos="fade-down"
          data-aos-duration="2000"
        >
          <Nav variant="pills">
            <Row>
              <TabItem
                eventKey="brief"
                img="/images/tabicon1.webp"
                text1="CREATIVE"
                text2="BRIEF"
              />
              <TabItem
                eventKey="concepts"
                img="/images/tabicon2.webp"
                text1="INITIAL"
                text2="CONCEPTS"
              />
              <TabItem
                eventKey="revisions"
                img="/images/tabicon3.webp"
                text1="FEEDBACK /"
                text2="REVISION"
              />
              <TabItem
                eventKey="delivery"
                img="/images/tabicon4.webp"
                text1="FINAL"
                text2="DELIVERY"
              />
            </Row>
          </Nav>
        </div>
        <div className="transformServiceTabContentWrapper">
          <Tab.Content>
            <Tab.Pane eventKey="brief">
              <TabContentItem
                setShow={setShow}
                head="WEBSITE BRIEF"
                para="We begin the process by identifying the requirements and goals 
                of the website. A review is then done on analytics and research which helps 
                our content strategy and site design. Our project managers then create 
                Wireframes for all templates."
                img="/images/tabimg1.webp"
              />
            </Tab.Pane>
            <Tab.Pane eventKey="concepts">
              <TabContentItem
                setShow={setShow}
                head="WEBSITE DESIGN"
                para="Our design process begins by exploring many creative trends. During a series 
                of review rounds, the selected design is then optimized and applied to templates."
                img="/images/tabimg2.webp"
              />
            </Tab.Pane>
            <Tab.Pane eventKey="revisions">
              <TabContentItem
                setShow={setShow}
                head="WEBSITE DEVELOPMENT"
                para="Website Development starts on a secure server where you can see the progress in real 
                ]time. Following the agreement on the final design/development."
                img="/images/tabimg3.webp"
              />
            </Tab.Pane>
            <Tab.Pane eventKey="delivery">
              <TabContentItem
                setShow={setShow}
                head="FINALIZATION & DEPLOYMENT"
                para="Q/A & rigorous testing is done on beta servers, the website is deployed and ready 
                for business. Our commitment does not end once your website is live and launched, we 
                remain on support for a pre-set time with the client."
                img="/images/tabimg4.webp"
              />
            </Tab.Pane>
          </Tab.Content>
        </div>
      </Tab.Container>
    </div>
  );
}

export default TabCom;
