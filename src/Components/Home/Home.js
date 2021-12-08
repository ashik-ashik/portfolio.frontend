import React, { useEffect, useState } from 'react';
import { Col, Button, Container, Row } from 'react-bootstrap';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {

  const [projects, setProject] = useState(null);
  useEffect(()=>{
    fetch("https://safe-escarpment-30024.herokuapp.com/projects")
    .then(res => res.json())
    .then(data => setProject(data))
  }, []);



  return (
    <>
    {/* Hero section */}
      <section>
      <Container className="py-4">
        <Row className="align-items-center">
          <Col xs="12" lg="6">
            <h4>Hi There! This is</h4>
            <h2 className="fw-bold display-5">Md Ashik Ali</h2>
            <h3>MERN Stack Developer</h3>
            <div className="py-4">
              <a href="../../resume/resume.pdf" download>
                <Button download variant="success" className="rounded-0">Download My Resume</Button>
              </a>
            </div>
          </Col>
          <Col xs="12" lg="6">
            <img src="https://i.ibb.co/xg3y0CH/ashikpro.png" className="img-fluid profile-img" alt="" />
            {/* <img src="https://i.postimg.cc/rF6GQp25/ashikpro.png" className="img-fluid" alt="" /> */}
          </Col>
        </Row>
      </Container>
      </section>

    {/* About section */}
      <section className="py-3">
        <Container>
          <h2 className="text-center text-uppercase fw-bold">About</h2>
          <Row className="g-4 align-items-center">
            <Col xs="12" md="4" lg="5">
              <img src="https://i.ibb.co/Rg4v8JV/about.png" alt="" className="img-fluid" />
            </Col>
            <Col xs="12" md="8" lg="7">
              <h4 className="fw-bold">I'm a MERN Stack Developer</h4>
              <p>
              Hello! I am <strong>Md Ashik Ali</strong>. I am a professional Web Designer and MERN Stack Developer with {new Date().getFullYear() - 2020} years of experience as well as I'm a student. I studies at Pabna University of Science and Technology. Web Design and Web development is my passion. I love to do coding and I enjoy it. I'm very sensible of my work.
              </p>
              <p>
              I'm very familiar with coding and Designing a web page as well as a web site. My codes are 100% W3C validate. I can code all day long. I never feel bored during coding and I can't take rest until my work/task is completed. I can adapt anything quickly. I'm also very sincere, responsible and hard working person.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    
    {/* Skills section */}
      <Skills />

    {/* Recent Projects section */}
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

export default Home;