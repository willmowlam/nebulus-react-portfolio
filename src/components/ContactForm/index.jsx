import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactForm() {
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    
    fetch('/', {
      method: 'POST',
      body: new FormData(form),
    })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
  };

  return (
    <Form 
      name="contact"
      method="POST" 
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <h3>Send me a message</h3>
      <Form.Control type="hidden" name="form-name" value="contact" />
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