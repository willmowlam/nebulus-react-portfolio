import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';

function ContactTest() {

  useEffect(() => {
    document.title = `Contact Test ~ Will Mowlam // Web Developer`;    
  }, []);

  return (
    <Container as="main" id="page-contact">
      <form name="test" netlify>
        <p>
          <label>Name <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Email <input type="email" name="email" /></label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Container>
  );
}

export default ContactTest;