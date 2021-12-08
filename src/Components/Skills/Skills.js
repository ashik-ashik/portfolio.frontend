import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';

const Skills = () => {
  const react = 70;
  const node = 65;
  const reactBootstrap = 85;
  const mongoDB = 63;
  const materialUI = 66;
  const html = 92;
  const css = 87;
  const tailwind = 70;
  return (
    <>
      <section className="py-4">
        <Container>
          <Row className="align-items-center">
            <Col xs="12" md="8">
            <h3 className="mb-3 pb-1 border-bottom border-dark">Skills:</h3>
            <h6>React JS</h6>
            <ProgressBar variant="success" now={react} className="mb-3" />
            <h6>NodeJS</h6>
            <ProgressBar variant="success" now={node} className="mb-3" />
            <h6>MongoDB</h6>
            <ProgressBar variant="success" now={mongoDB} className="mb-3" />
            <h6>React Bootstrap</h6>
            <ProgressBar variant="warning" now={reactBootstrap} className="mb-3" />
            <h6>Material UI</h6>
            <ProgressBar variant="success" now={materialUI} className="mb-3" />
            <h6>Tailwind CSS</h6>
            <ProgressBar variant="success" now={tailwind} className="mb-3" />
            <h6>CSS3</h6>
            <ProgressBar variant="danger" now={css} className="mb-3" />
            <h6>HTML5</h6>
            <ProgressBar variant="danger" now={html} className="mb-3" />
            <div>
              <h5 className="fw-bold mt-4 mb-2">Others:</h5>
              <h6 className="py-1 px-3 d-inline-block rounded-3 border-secondary border">Firebase</h6>
              <h6 className="py-1 ms-2 d-inline-block px-3 rounded-3 border-secondary border">Git</h6>
              <h6 className="py-1 ms-2 d-inline-block px-3 rounded-3 border-secondary border">GitHub</h6>
              <h6 className="py-1 ms-2 d-inline-block px-3 rounded-3 border-secondary border">Google Dev Toos</h6>
              <h6 className="py-1 ms-2 d-inline-block px-3 rounded-3 border-secondary border">VS Code</h6>
              <h6 className="py-1 ms-2 d-inline-block px-3 rounded-3 border-secondary border">Netlify</h6>
              <h6 className="py-1 ms-2 d-inline-block px-3 rounded-3 border-secondary border">Heroku</h6>
            </div>
            </Col>
            <Col>
               {/* <img src="https://i.ibb.co/vY9cV06/Business-Technology-Internet-and-network-concept-Coaching-mentoring-education-business-training-deve.jpg" style={{transform:"rotate(-90deg)", }} alt="" /> */}
               <img src="https://i.ibb.co/C2wHcJ4/Best-Practice-Mechanism-with-Gears.jpg" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Skills;