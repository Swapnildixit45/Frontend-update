import { useEffect, useState } from "react";
import { Card } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from "../Navbar";

function Women() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        const response = await fetch("http://localhost:8082/catalog/womensFashion");
        const data = await response.json()
        setProducts(data)
        setLoading(false)
    }

    if (!loading) {
        return (
            <><Navbar/>
            <div className="d-inline-flex">
                {products.map((product) => (
                    <Row>
                    <Col>
                        <div className="d-flex mt-3 mx-5">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={product.image} width="286" height="286"/>
                                <Card.Body className="text-center">
                                    <Card.Title>{product.title}</Card.Title>
                                    <h6>Rating: {product.stars}</h6>
                                    <h6>{product.price.currency}{product.price.value}</h6>
                                    <h6>{product.description}</h6>
                                    <button className="rounded">Add to cart</button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                    </Row>
                ))}
            </div></>
        )
    } else {
        return <h3>...Loading</h3>
    }
}

export default Women