import Container from 'react-bootstrap/Container';
import { useDocumentTitle, useMetaDescription } from '/src/utils';

function ContactSuccess() {

  useDocumentTitle('Contact/Success ~ Will Mowlam // Web Developer');
  useMetaDescription('Successful message sent via the contact page.');

  return (
    <Container as="main" id="page-contact-success">
      <h2>Thank you for your message</h2>
      <p>I&apos;ll be in touch shortly.</p>
      <p>In the mean time, feel free to take a look at some of my recent <a href="/projects">projects</a>.</p>
    </Container>
  );
}

export default ContactSuccess;