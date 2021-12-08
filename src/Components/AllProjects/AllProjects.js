import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Projects from '../Projects/Projects';

const AllProjects = () => {
  const [projects, setProject] = useState(null);
  useEffect(()=>{
    fetch("http://localhost:5500/projects")
    .then(res => res.json())
    .then(data => setProject(data))
  }, []);
  return (
    <>
      <section>
        <Container className="py-5">
          <h3 className="mb-3 pb-1 border-bottom border-dark">Recent Projects:</h3>
          <Row className="g-4">
            {
              projects?.map(project => <Projects key={project.title} project={project} />)
            }
          </Row>

        </Container>
      </section>
    </>
  );
};

export default AllProjects;