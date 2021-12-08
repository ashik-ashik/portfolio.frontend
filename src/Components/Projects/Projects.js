import React from 'react';
import { Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const Projects = ({project}) => {
  const navigate = useNavigate();
  const handelDetails = (id) =>{
      navigate(`/project/${id}`)
  }
  return (
    <>
      <Col xs="12" md="6" lg="4">
          <Card className="shadow">
            <Card.Img variant="top" className="project-img" src={project.thumbnail} />
            <Card.Body>
              <Card.Title className="fw-bold">{project?.title}</Card.Title>
              <Card.Text className="project-short-desc">
                {project?.shortDesc}
              </Card.Text>
            </Card.Body>
            <Button variant="success" onClick={()=>handelDetails(project?._id)} className="rounded-0 px-4 text-uppercase">Details</Button>
          </Card>

      </Col>
    </>
  );
};

export default Projects;