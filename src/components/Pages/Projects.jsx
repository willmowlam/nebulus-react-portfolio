import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProjectCard from '../ProjectCard';
import projectsData from '../../projects.json';

function Projects() {
  return (
    <Container>
      <h2>Projects</h2>
      <Row xs={1} md={2} className="g-4">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
        </Row>
    </Container>
  );
}

export default Projects;