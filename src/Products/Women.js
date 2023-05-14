import { useEffect, useState, useContext } from "react";
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from "../Navbar";
import Button from "react-bootstrap/Button";
import Loading from "../Spinner"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Footer from "../Footer";
import { CartContext } from "../Cart/CartContext";
import { useStateValue } from "../stateProvider";

function WomensFashion() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { addToCart } = useContext(CartContext);
    const [{ searchKeyword }, dispatch] = useStateValue();

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        const response = await fetch("http://localhost:8082/catalog/womensFashion");
        const data = await response.json()
        setProducts(data.filter(product => product.title.toLowerCase().search(searchKeyword) !== -1))

        localStorage.setItem("searchKeyword","")
        setLoading(false)
    }

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    if (!loading) {
        return (
            <><Navbar />
                <div className="d-flex mx-3">
                    <Row>
                        {products.map((product) => (
                            <Col>
                                <div className="d-inline">
                                    <Card style={{ width: '18rem', height: '35rem' }} className="mt-3">
                                        <Card.Img variant="top" src={product.image} width="286" height="286" />
                                        <Card.Body>
                                            <Card.Title className="text-center">{product.title}</Card.Title>
                                            <Card.Subtitle>Rating: {product.stars}</Card.Subtitle>
                                            <Card.Subtitle className="mt-2">{product.price.currency}{product.price.value}</Card.Subtitle>
                                        </Card.Body>
                                        <Card.Text>
                                            <OverlayTrigger
                                                placement="auto"
                                                delay={{ show: 250, hide: 200 }}
                                                overlay={<Tooltip>{product.description}</Tooltip>}
                                            >
                                                <div className="text-center mb-2"><Button variant="dark">Description</Button></div>
                                            </OverlayTrigger>
                                            <div className="text-center mb-1"><Button variant="dark" onClick={() => handleAddToCart(product)}>Add to cart</Button></div>
                                        </Card.Text>
                                    </Card>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className="mt-3">
                    <Footer />
                </div>
            </>
        )
    } else {
        return <div className="d-flex justify-content-center align-items-center my-5">
            <Loading />
        </div>
    }
}

export default WomensFashion