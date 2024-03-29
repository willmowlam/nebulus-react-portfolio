import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ProjectCard from '../ProjectCard';
import projectsData from '../../projects.json';

function Projects() {

  useEffect(() => {
    document.title = `Projects ~ Will Mowlam // Web Developer`;
  }, []);

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