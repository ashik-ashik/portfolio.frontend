import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const ProjectDetail = () => {
  const {id} = useParams();
  const [project, setProject] = useState(null);
  useEffect(()=>{
    fetch(`https://safe-escarpment-30024.herokuapp.com/project/${id}`)
    .then(res => res.json())
    .then(data => setProject(data))
  }, [id]);
  console.log(project)
  return (
    <>
      <Container className="py-4">
        <Row>
          <Col lg="1"></Col>
          <Col lg="10">
            <img src={project?.coverImg} className="img-fluid" alt="Project cover" />
            <h3 className="my-3">{project?.title}</h3>
            <p className="my-2">
              {project?.shortDesc}
            </p>
            <div className="pt-3">
              <h4>Features:</h4>
              <ul>
                {
                  project?.bullet?.map(feature => <li key={feature}>{feature}</li>)
                }
              </ul>
            </div>
            <div className="screenShoots py-3">
              <h4>More Screenshoots:</h4>
                <Row xs="1" lg="3" className="g-4">
                  {
                    project?.projectSS?.map(ss => <Col key={ss}>
                          <img src={ss} alt="" />
                      </Col>)
                  }
                </Row>
            </div>
            <p>
              <strong>Technologies : </strong>
              {
                project?.technologies?.map(tec => <small key={tec}>{tec}, </small>)
              }
            </p>
            <div className="project-code mt-4">
              <h5 className="fw-bold mb-2">Live Site Details:</h5>
              <p><strong>Live Website Link : </strong> <a className="fw-bold text-danger" href={project?.liveView} target="_blank" rel="noreferrer">Live View</a> <small>or,</small> {project?.liveView}</p>
              <p><strong>Frondend Code Link : </strong> <a className="fw-bold text-danger" href={project?.clientSideCode} target="_blank" rel="noreferrer">View Frontend Code</a> <small>or,</small> {project?.clientSideCode}</p>
              {
                project?.serverSideCode && <p><strong>Backend Code Link : </strong> <a className="fw-bold text-danger" href={project?.serverSideCode} target="_blank" rel="noreferrer">Veiw Backend Code</a> <small>or,</small> {project?.serverSideCode}</p>
              }
              
            </div>
          </Col>
          <Col lg="1"></Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjectDetail;