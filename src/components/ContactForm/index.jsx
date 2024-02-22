import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactForm() {

  // Create state variables for the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''    
  });

  // Helper function to encode form data
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  };

  // Event handler for when form fields change
  const handleFormFieldChange = (e) => {

    // Create variables from target
    const {name, value} = e.target;

    // Change the value in the form data state variables
    setFormData({...formData, [name]: value});
  };

  // Event handler for form submission
  const handleFormSubmit = (e) => {

    // Stop sending data as querystring 
    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
    .then(() => alert("Success!"))
    .catch(error => alert(error));

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <form 
      name="contact"
      onSubmit={handleFormSubmit}
      className="mt-3"
    >
      <h3>Send me a message</h3>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Your name:</Form.Label>
        <Form.Control type="text" name="name" onChange={handleFormFieldChange} value={formData.name} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email:</Form.Label>
        <Form.Control type="email" name="email" onChange={handleFormFieldChange} value={formData.email} required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="message">
        <Form.Label>Message:</Form.Label>
        <Form.Control as="textarea" rows={5} name="message" onChange={handleFormFieldChange} value={formData.message} required />
      </Form.Group>

      <Button variant="primary" type="submit">Submit</Button>
    </form>
  );
}

export default ContactForm;