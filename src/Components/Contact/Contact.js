import emailjs from 'emailjs-com';
import React, {useState} from 'react';
import { Button, Container, FloatingLabel, Form, Alert, Spinner, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isSent, setSent] = useState(null);
  const [sending, setSending] = useState(false);
  const onSubmit = data => {
    if(data.name && data.email && data.subject && data.message){
      setSending(true)
    }
  const templateParams = {
      name: data.name,
      subject: data.subject,
      email: data.email,
      message: data.message
  };
   
  emailjs.send('personal-portfolio', 'template_rcquj7c', templateParams, "user_91tDIdVCWF47uYlqNnlFd")
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         if(response.status === 200){
          setSent("ok")
         setSending(false);
         reset();
         }
      }, function(error) {
         console.log('FAILED...', error);
         setSent("fail");
      });

  };

  console.log(sending)
  return (
    <>
      <section className="pt-3">
        <Container>
          <Row className="g-4 text-center">
            <Col md="12" lg="6">
              <div className="bg-light shadow px-3 py-4">
                <i class='bx bxs-map display-3'></i>
                <h4 className="fw-bold mt-3">Location</h4>
                <p>
                  Singra, Natore <br /> Rajshahi, Bangladesh
                </p>
              </div>
            </Col>
            <Col xs="12" md="6" lg="3">
              <div className="bg-light shadow px-3 py-4">
              <i class='bx bxs-phone-call display-3'></i>
                <h4 className="fw-bold mt-3">Mobile</h4>
                <p className="mb-1">+8801714911463</p>
                <p>+8801884142484</p>
              </div>
            </Col>
            <Col xs="12" md="6" lg="3">
            <div className="bg-light shadow px-3 py-4">
                <i class='bx bxs-envelope display-3'></i>
                <h4 className="fw-bold mt-3">Email</h4>
                <p className="mb-1">mdashika989@gmail.com</p>
                <p>ashik.free999@gmail.com</p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="g-4 align-items-center">
            <Col md="12" lg="7">
              <div className="py-5">
                <h2 className="mb-4 fw-bold">Contact With Me</h2>
                {
                  isSent === "ok" && <Alert variant={"success"}>
                  Thank You! message sent Successfully.
                </Alert> 
                }
                {
                  isSent === "fail" && <Alert  variant={"danger"}>
                  OPPs! Massage could not send.
                </Alert>
                }
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Control className="mb-3" type="text" {...register("name", { required: true, maxLength: 30 })} placeholder="Your Name" />
                  <Form.Control className="mb-3" type="email" {...register("email", { required: true})} placeholder="Your Email" />
                  <Form.Control className="mb-3" type="text" {...register("subject", { required: true})} placeholder="Subject" />
                  <FloatingLabel controlId="floatingTextarea" label="Message" className="mb-3">
                    <Form.Control as="textarea" {...register("message", { required: true})} placeholder="Leave a comment here" />
                  </FloatingLabel>
                  <Button variant="success" className="px-4" disabled={isSent? true:false} type="submit">
                    {!sending ? "Send Message" : <>Sending... 
                    <Spinner as="span" 
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true" className="ms-2"
                  />
                  </>
                  }
                  </Button>
                </Form>
              </div>
            </Col>
            <Col md="12" lg="5">
              <img src="https://i.ibb.co/PWQZLDB/contact.png" alt="contact " />
            </Col>
          </Row>
          
        </Container>
      </section>
    </>
  );
};

export default Contact;