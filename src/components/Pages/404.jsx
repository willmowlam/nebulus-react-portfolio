import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { useDocumentTitle, useMetaDescription } from '/src/utils';

function Custom404() {

  useDocumentTitle('404 ~ Will Mowlam // Web Developer');
  useMetaDescription(`The page or resource doesn't exist.`);

  return (
    <Container as="main" id="page-404">
      <h2>404 - Page Not Found</h2>
      <p>Oops! Looks like you&apos;ve ventured into uncharted digital territory.</p>
      <p>No worries! Take a deep breath, and let&apos;s navigate back to familiar ground by visiting the home page.</p>
      <Link to="/" className="btn btn-primary btn-md" type="button">Home</Link>
    </Container>
  );
}

export default Custom404;