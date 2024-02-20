import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container as="main" id="page-home">
      <Row>
        <Col className="col-sm-3">
          <img src="https://will.mowlam.com/assets/images/will-mowlam-black-bg.jpg" alt="Will Mowlam" className="img-thumbnail" />
        </Col>
        <Col className="col-sm-9">
          <h1 className="display-5 fw-bold">Will Mowlam</h1>
          <p className="col-md-8 fs-4">I am a web developer based in Worthing, England. I enjoy building websites with React, Node.js, Drupal and Laravel using frameworks like Bootstrap.</p>
          <Link to="/projects" className="btn btn-primary btn-md" type="button">View Portfolio</Link>
        </Col>
      </Row>
    </Container>
    );
  }
  
  export default Home;