import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { useDocumentTitle, useMetaDescription } from '/src/utils';
import ProjectCard from '../ProjectCard';
import projectsData from '../../projects.json';

function Projects() {

  useDocumentTitle('Projects ~ Will Mowlam // Web Developer');
  useMetaDescription('View recent web projects developed by Will Mowlam.');

  return (
    <Container as="main" id="page-projects">
      <h2>Projects</h2>
      <Row xs={1} md={2} className="g-4">
        {projectsData
          .filter(project => project.show === true)
          .map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </Row>
    </Container>
  );
}

export default Projects;