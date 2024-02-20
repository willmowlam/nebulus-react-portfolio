import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactForm() {
  return (
    <Form name="contact" netlify>
      <h3>Send me a message</h3>

      <Form.Control type="hidden" name="subject" value="Message sent from portfolio" data-remove-prefix />

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Your name:</Form.Label>
        <Form.Control type="text" name="name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" name="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message:</Form.Label>
        <Form.Control as="textarea" rows={5} name="message" />
      </Form.Group>

      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
}

export default ContactForm;