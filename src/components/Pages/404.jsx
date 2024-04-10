import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import setDocumentTitle from '/src/utils/setDocumentTitle';
import setMetaDescription from '/src/utils/setMetaDescription';

function Custom404() {
  
  setDocumentTitle('404 ~ Will Mowlam // Web Developer');    
  setMetaDescription(`The page or resource doesn't exist.`);

  return (
    <Container as="main" id="page-404">
      <h2>404 - Page Not Found</h2>
      <p>Oops! Looks like you've ventured into uncharted digital territory.</p>
      <p>No worries! Take a deep breath, and let's navigate back to familiar ground by visiting the home page.</p>
      <Link to="/" className="btn btn-primary btn-md" type="button">Home</Link>
    </Container>
    );
  }
  
  export default Custom404;