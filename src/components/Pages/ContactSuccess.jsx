import Container from 'react-bootstrap/Container';
import { setDocumentTitle, setMetaDescription } from '/src/utils';

function ContactSuccess() {

  setDocumentTitle('Contact/Success ~ Will Mowlam // Web Developer');
  setMetaDescription('Successful message sent via the contact page.');

  return (
    <Container as="main" id="page-contact-success">
      <h2>Thank you for your message</h2>
      <p>I&apos;ll be in touch shortly.</p>
      <p>In the mean time, feel free to take a look at some of my recent <a href="/projects">projects</a>.</p>
    </Container>
  );
}

export default ContactSuccess;