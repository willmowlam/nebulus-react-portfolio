import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

function ContactTest() {

  useEffect(() => {
    document.title = `Contact Test ~ Will Mowlam // Web Developer`;    
  }, []);

  // Create state variables for the form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''    
  });

  // Event handler for when form fields change
  const handleFormFieldChange = (e) => {

    // Create variables from target
    const {name, value} = e.target;

    // Change the value in the form data state variables
    setFormData({...formData, [name]: value});
  };

  // Event handler for form submission
  const handleFormSubmit = (e) => {

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "test", ...formData })
    })
    .then(() => alert("Success!"))
    .catch(error => alert(error));

    // Stop sending data as querystring 
    e.preventDefault();

    // Reset form fields
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };


  return (
    <Container as="main" id="page-contact">
      <form name="test" onSubmit={handleFormSubmit}>
        <p>
          <label>Name <input onChange={handleFormFieldChange} type="text" name="name" value={formData.name} required /></label>
        </p>
        <p>
          <label>Email <input onChange={handleFormFieldChange} type="email" name="email" value={formData.email} required /></label>
        </p>
        <p>
          <textarea onChange={handleFormFieldChange} name="message" value={formData.message} required></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </Container>
  );
}

export default ContactTest;