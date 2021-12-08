import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const NotFound = () => {
  const navigete = useNavigate();
  const backHome = () =>{
    navigete("/")
  }
  return (
    <>
      <Container className="py-5 text-center">

        <h2 className="display-1 fw-bold" >404</h2>
        <h2 className="fw-bold">Page not found</h2>
        <h5 className="text-secondary">The page you were looking for could not be found.</h5>

        <div className="mt-4">
          <Button onClick={backHome} variant="danger" className="rounded-0">Back to Home</Button>
        </div>

      </Container>

      
    </>
  );
};

export default NotFound;