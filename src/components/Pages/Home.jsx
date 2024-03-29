import { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {

  useEffect(() => {
    document.title = `Will Mowlam // Web Developer`;
  }, []);

  return (
    <Container as="main" id="page-home">
      <Row>
        <Col className="col-sm-3">
          <img src="/assets/images/will-mowlam-sepia.jpg" alt="Will Mowlam" className="img-thumbnail border-0 p-3 rounded-0 shadow" />
        </Col>
        <Col className="col-sm-9">
          <h1 className="display-5 fw-bold poppins-semibold">Will Mowlam</h1>
          <p className="col-md-8 fs-4 poppins-regular">Hello! I'm a full-stack web developer based in Worthing, England. I create accessible, seo-friendly web apps in React, Node.js, Drupal and Laravel.</p>
          <Link to="/projects" className="btn btn-primary btn-md" type="button">View Portfolio</Link>
        </Col>
      </Row>
    </Container>
    );
  }
  
  export default Home;