import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loading from '../Spinner'

function Cancel() {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically redirect to home page after 5 seconds
    const timeout = setTimeout(() => {
      navigate('/');
    }, 4000);

    return () => clearTimeout(timeout); // Clean up the timeout on component unmount
  }, [navigate]);

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Row>
        <Col>
          <div className="rounded text-center p-2 bg-black text-black">
            <h2 className="text-white">Sorry to see you cancel your order.</h2>
          </div>
          <p className='text-center'>Redirecting you to the home page...</p>
          <div className="d-flex align-items-center justify-content-center" style={{ height: '10vh' }}><Loading/></div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cancel;
