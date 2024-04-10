import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import ContactForm from '../ContactForm'
import setDocumentTitle from '/src/utils/setDocumentTitle';
import setMetaDescription from '/src/utils/setMetaDescription';

function Contact() {

  setDocumentTitle('Contact ~ Will Mowlam // Web Developer');
  setMetaDescription('Contact me or download my CV.');

  return (
    <Container as="main" id="page-contact">
      <Row>
        <Col xs={12} md={6}>
          <h2>Contact</h2>
          <p>Feel free to send me a message via the form or any of the following channels. I look forward to hearing from you.</p>
          <ul style={{ listStyleType: 'none' }}>
            <li><MdEmail />&nbsp;<a href="mailto:willmowlam.510@icloud.com">willmowlam.510@icloud.com</a></li>
            <li><FaLinkedin />&nbsp;<a href="https://www.linkedin.com/in/will-mowlam">linkedin.com/in/will-mowlam</a></li>
            <li><FaGithub />&nbsp;<a href="https://github.com/willmowlam">github.com/willmowlam</a></li>
          </ul>
          <a href="/assets/files/will-mowlam-cv.pdf"><Button><BsFileEarmarkPdf /> Download CV</Button></a>
        </Col>
        <Col xs={12} md={6}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;