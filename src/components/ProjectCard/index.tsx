import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { FaGithub, FaRocket } from 'react-icons/fa6';

interface Project {
  title: string;
  description: string;
  thumb: string;
  deployed?: string;
  github?: string;
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Col>
      <Card className="border-0 rounded-0 shadow">
        <Card.Img
          variant="top"
          src={project.thumb}
          loading="lazy"
          alt={project.title}
          className="rounded-0"
        />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          {project.deployed && (
            <Card.Link
              href={project.deployed}
              className="btn btn-primary btn-sm"
              aria-label={`Visit ${project.title} deployed`}
            >
              <FaRocket /> Deployed
            </Card.Link>
          )}
          {project.github && (
            <Card.Link
              href={project.github}
              className="btn btn-secondary btn-sm"
              aria-label={`Visit ${project.title} GitHub`}
            >
              <FaGithub /> GitHub
            </Card.Link>
          )}
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProjectCard;
