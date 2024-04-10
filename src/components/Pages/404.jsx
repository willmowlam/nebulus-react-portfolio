import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import setMetaDescription from '/src/utils/setMetaDescription';

function Custom404() {
  
  useEffect(() => {
    document.title = `404 ~ Will Mowlam // Web Developer`;    
  }, []);

  setMetaDescription(`The page or resource  doesn't exist.`);

  return (
    <Container as="main" id="page-404">
      <h2>404 - Page Not Found</h2>
      <p>Oops! Looks like you've ventured into uncharted digital territory.</p>
      <p>No worries! Take a deep breath, and let's navigate back to familiar ground. 
        Just hit the back button or return to the homepage to continue your journey.</p>
    </Container>
    );
  }
  
  export default Custom404;