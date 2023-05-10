import React from 'react'
import Navbar from './Navbar'
import Slider from './Slider'
import Slider2 from './Slider2'
import Footer from './Footer'
import { Card } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Electronics from "./Images/Electronics.png"
import Children from "./Images/Children's collection.png"
import Accessories from "./Images/Accessories.png"
import Watches from "./Images/Watches.png"
import Beauty from "./Images/Beauty.png"
import Jewellery from "./Images/Jewellery.png"

function Home() {
    return (
        <div>
            <Navbar />
            <Slider />
            <h3 className='text-muted mx-5 mt-2'>SHOP BY CATEGORIES</h3>
            <Row>
                <Col>
                    <div className="d-flex mt-3 mx-5">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Electronics} width="286" height="286" />
                            <Card.Body className="text-center">
                                <Card.Title>Electronics</Card.Title>
                                <a variant="primary" type="btn" href='/electronics' className="btn btn-success">Explore</a>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col>
                    <div className="d-flex mt-3 mx-5">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Children} width="286" height="286" />
                            <Card.Body className="text-center">
                                <Card.Title className="text-center">Men's Fasion</Card.Title>
                                <a variant="primary" type="btn" href='/mensfashion' className="btn btn-success">Explore</a>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col>
                    <div className="d-flex mt-3 mx-5">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Accessories} width="286" height="286" />
                            <Card.Body className="text-center">
                                <Card.Title>Accessories</Card.Title>
                                <a variant="primary" type="btn" href='accessories' className="btn btn-success">Explore</a>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="d-flex mt-3 mx-5">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Watches} width="286" height="286" />
                            <Card.Body className="text-center">
                                <Card.Title>Women's Fashion</Card.Title>
                                <a variant="primary" type="btn" href='/womenfashion' className="btn btn-success">Explore</a>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col>
                    <div className="d-flex mt-3 mx-5">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Beauty} width="286" height="286" />
                            <Card.Body className="text-center">
                                <Card.Title className="text-center">Beauty and Health</Card.Title>
                                <a variant="primary" type="btn" href='/cosmetics' className="btn btn-success">Explore</a>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col>
                    <div className="d-flex mt-3 mx-5">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={Jewellery} width="286" height="286" />
                            <Card.Body className="text-center">
                                <Card.Title>Jewellery</Card.Title>
                                <a variant="primary" type="btn" href='/jewellery' className="btn btn-success">Explore</a>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
            {/* <h3 className='text-muted mx-5 mt-2'>TODAY'S DEAL</h3>
            <Row>
                <Col className="mt-3 mx-5">
                    <Image src={Watches} roundedCircle width="180" height="180" type="button"/>
                </Col>
                <Col className="mt-3 mx-5">
                    <Image src={Watches} roundedCircle width="180" height="180" type="button"/>
                </Col>
                <Col className="mt-3 mx-5">
                    <Image src={Watches} roundedCircle width="180" height="180" type="button"/>
                </Col>
                <Col className="mt-3 mx-5">
                    <Image src={Watches} roundedCircle width="180" height="180" type="button"/>
                </Col>
            </Row> */}
            <Slider2/>
            <h3 className='text-muted mx-5 mt-2'>All Products</h3>
            <Footer/>
            </div >
    )
}

export default Home