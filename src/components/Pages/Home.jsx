import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// This should be a welcome landing page that contains:

// Your Name

// A headshot of you (or an avatar)

// Your brand statement

// Some indication that this is your portfolio site

function Home() {
  return (
    <Container as="main" id="page-home">
      <Row>
        <Col className="col-sm-3">
          <img src="https://will.mowlam.com/assets/images/will-mowlam-black-bg.jpg" alt="Will Mowlam" className="img-thumbnail" />
        </Col>
        <Col className="col-sm-9">
          <h1 className="display-5 fw-bold">Will Mowlam</h1>
          <p className="col-md-8 fs-4">I am a web developer based in Worthing in southern England. I enjoy building websites with <a href="https://react.dev/">React</a>, <a href="https://nodejs.org/">Node.js</a>, <a href="https://www.drupal.org/">Drupal</a> and <a href="https://laravel.com/">Laravel</a> using frameworks like <a href="https://getbootstrap.com/">Bootstrap</a>.</p>
          <p>My tools are  <a href="https://lando.dev/">Lando</a>, <a href="https://code.visualstudio.com/">VScode</a>, <a href="https://getcomposer.org/">Composer</a> and <a href="https://git-scm.com/" >Git</a>.</p>
          <p>I have experience with APIs and am interested in headless, serverless web hosting.</p>
          <Link to="/contact" className="btn btn-primary btn-md" type="button">Contact Me</Link>
          <Link to="/projects" className="btn btn-secondary btn-md" type="button">View Portfolio</Link>
        </Col>
      </Row>
    </Container>
    );
  }
  
  export default Home;