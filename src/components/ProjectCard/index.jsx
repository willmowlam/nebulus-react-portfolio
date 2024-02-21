import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function ProjectCard({ project }) {
  return (
    <Col>
      <Card className="border-0 rounded-0 shadow">
        <Card.Img variant="top" src={project.thumb} loading="lazy" alt={project.title} className="rounded-0" />
        <Card.Body>
          <Card.Title>{project.title}</Card.Title>
          <Card.Text>{project.description}</Card.Text>
          <Card.Link href={project.deployed}>Deployed</Card.Link>
          <Card.Link href={project.github}>GitHub</Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProjectCard;