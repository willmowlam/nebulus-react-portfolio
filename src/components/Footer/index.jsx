import { Container, Row } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="mt-4">
      <Container>
        <Row>
          <p className="text-center pt-4">Copyright &copy; Will Mowlam</p>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;