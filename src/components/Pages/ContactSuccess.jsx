import Container from 'react-bootstrap/Container';

function ContactSuccess() {
  return (
    <>
      <Container as="main" id="page-contact-success">
        <h2>Thank you for your message</h2>
        <p>I'll be in touch shortly.</p>
        <p>In the mean time, feel free to take a look at some of my recent <a href="/projects">projects</a>.</p>
      </Container>
    </>
    );
  }
  
  export default ContactSuccess;