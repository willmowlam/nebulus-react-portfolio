import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <Container>
        <Row>  
          <Col><a href="https://www.linkedin.com/in/will-mowlam">LinkedIn</a></Col>
          <Col><a href="https://github.com/willmowlam/">GitHub</a></Col> 
          <Col><Link to="/contact">Contact</Link></Col>
        </Row>
        <Row>
          <p>Copyright &copy; Will Mowlam</p>
        </Row>
      </Container>
    </footer>
    );
  }

export default Footer;