// import React from 'react'
// import { Card, Carousel } from 'react-bootstrap'
// import Deal1 from "./Sales/Deal1.png"

// function Slider2() {
//     return (
//         <Carousel>
//             <Carousel.Item interval={2000}>
//         <Card className="bg-dark text-white">
//             <Card.Img src={Deal1} alt="Card image 100px2" />
//             <Card.ImgOverlay>
//                 <Card.Title>Card title</Card.Title>
//                 <Card.Text>
//                     This is a wider card with supporting text below as a natural lead-in
//                     to additional content. This content is a little bit longer.
//                 </Card.Text>
//                 <Card.Text>Last updated 3 mins ago</Card.Text>
//             </Card.ImgOverlay>
//         </Card>
//         </Carousel.Item>
//         </Carousel>
//     )
// }

// export default Slider2
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import HomeFirst from "./Slider2img/Slider2_1.svg"
import HomeSecond from "./Slider2img/Slider2_2.svg"
import HomeThird from "./Slider2img/Slider2_3.svg";
import HomeFourth from "./Slider2img/Slider2_4.svg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import Summer from "./Images/Summer.png";
function Slider() {
    return (
        <Row>
            <Col>
                <Carousel className="mt-4 mb-4 mx-5" style={{ maxHeight: "110vh", width: "118vh" }}>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={HomeFirst}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={HomeSecond}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={HomeThird}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={HomeFourth}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Col>
            <Col>
                <div className="d-flex mt-4 mb-3">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Summer} width="286" height="286" />
                        <Card.Body className="text-center">
                            <Card.Title>SALE</Card.Title>
                            {/* <Button variant="primary" className="btn btn-success">Explore</Button> */}
                        </Card.Body>
                    </Card>
                </div>
            </Col>
        </Row>
    );
}

export default Slider;