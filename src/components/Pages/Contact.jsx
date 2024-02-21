import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';
import { BsFileEarmarkPdf } from 'react-icons/bs';
import ContactForm from '../ContactForm'

function Contact() {

  useEffect(() => {
    document.title = `Contact ~ Will Mowlam // Web Developer`;    
  }, []);

  return (
    <Container as="main" id="page-contact">
      <h2>Contact</h2>
      <p>Please do feel free to get in touch.</p>
      <ul style={{ listStyleType: 'none' }}>
        <li><MdEmail />&nbsp;<a href="mailto:willmowlam.510@icloud.com">willmowlam.510@icloud.com</a></li>
        <li><FaLinkedin />&nbsp;<a href="https://www.linkedin.com/in/will-mowlam">linkedin.com/in/will-mowlam</a></li>
        <li><FaGithub />&nbsp;<a href="https://github.com/willmowlam">github.com/willmowlam</a></li>
      </ul>
      <a href="/assets/files/will-mowlam-cv.pdf"><Button><BsFileEarmarkPdf /> Download CV</Button></a>
      <ContactForm />
    </Container>
  );
}

export default Contact;