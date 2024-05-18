import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ContactForm() {
  // Create state variables for modal visibility
  const [showModal, setShowModal] = useState(false);

  // Create state for the modal message
  const [modalMessage, setModalMessage] = useState('');

  // Create state for the modal title
  const [modalTitle, setModalTitle] = useState('');

  // Close the modal method
  const handleCloseModal = () => setShowModal(false);

  // Create state variables for the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Helper function to encode form data
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  // Event handler for when form fields change
  const handleFormFieldChange = (e) => {
    // Create variables from target
    const { name, value } = e.target;

    // Change the value in the form data state variables
    setFormData({ ...formData, [name]: value });
  };

  // Event handler for form submission
  const handleFormSubmit = (e) => {
    // Stop sending data as querystring
    e.preventDefault();

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => {
        setModalTitle('Success!');
        setModalMessage('Thank you for your message!');
        setShowModal(true);
      })
      .catch((error) => {
        setModalTitle('Error');
        setModalMessage(error);
        setShowModal(true);
      });

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <>
      <form name="contact" onSubmit={handleFormSubmit} className="mt-3">
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Your name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={handleFormFieldChange}
            value={formData.name}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={handleFormFieldChange}
            value={formData.email}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="message"
            onChange={handleFormFieldChange}
            value={formData.message}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <button onClick={handleCloseModal}>Close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactForm;
