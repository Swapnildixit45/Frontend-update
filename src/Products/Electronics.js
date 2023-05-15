import { useEffect, useState, useContext } from "react";
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from "../Navbar";
import Button from "react-bootstrap/Button";
import Loading from "../Spinner"
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Footer from "../Footer"
import { CartContext } from "../Cart/CartContext";
import { useStateValue } from "../stateProvider";
import { useNavigate } from "react-router-dom";


function Electronics() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [minPrice, setMinPrice] = useState(0);
    const [minRating, setMinRating] = useState(0);
    const [sortBy, setSortBy] = useState("");
    const { addToCart } = useContext(CartContext);
    const [{ searchKeyword }, dispatch] = useStateValue();

    const navigate = useNavigate()
    function compare(){
        navigate('/compareElectronics')
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const filterProducts = (currentProducts) => {
        console.log(currentProducts)
        return currentProducts.filter(product => product.title.toLowerCase().search(searchKeyword) !== -1);
    };

    useEffect(() => {
        setProducts(currentProducts => filterProducts(currentProducts));
    }, [searchKeyword]);

    const fetchProducts = async () => {
        const response = await fetch("https://nextgenbackend.onrender.com/catalog/electronics");
        const data = await response.json()
        setProducts(data.filter(product => product.title.toLowerCase().search(searchKeyword) !== -1))

        localStorage.setItem("searchKeyword", "")
        setLoading(false)
    }

    const handleAddToCart = (product) => {
        addToCart(product);
    };

    const sortProducts = () => {
        let filteredProducts = products.filter((product) => {
            return product.price.value >= minPrice && product.stars >= minRating;
        });

        // sort by price
        if (sortBy === "price-low-to-high") {
            filteredProducts = filteredProducts.sort(
                (a, b) => a.price.value - b.price.value
            );
        } else if (sortBy === "price-high-to-low") {
            filteredProducts = filteredProducts.sort(
                (a, b) => b.price.value - a.price.value
            );
        } else if (sortBy === "rating-low-to-high") {
            filteredProducts = filteredProducts.sort((a, b) => a.stars - b.stars);
        } else if (sortBy === "rating-high-to-low") {
            filteredProducts = filteredProducts.sort((a, b) => b.stars - a.stars);
        }

        setProducts(filteredProducts);
    };

    if (!loading) {
        return (
            <><Navbar />
                <div className="d-flex mx-2">
                    <div className="d-flex flex-column filter-section mx-2 mt-2">
                        <div>
                            <h4>Filter Products</h4>
                        </div>
                        <div className="d-flex flex-column">
                            <div className="mb-2">
                                <label htmlFor="minPrice">Min Price:</label>
                                <input
                                    type="number"
                                    id="minPrice"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(e.target.value)}
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="minRating">Min Rating:</label>
                                <input
                                    type="number"
                                    id="minRating"
                                    value={minRating}
                                    onChange={(e) => setMinRating(e.target.value)}
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="sortBy">Sort By:</label>
                                <select
                                    id="sortBy"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                >
                                    <option value="">Select an option</option>
                                    <option value="price-low-to-high">Price: Low to High</option>
                                    <option value="price-high-to-low">Price: High to Low</option>
                                    <option value="rating-low-to-high">
                                        Rating: Low to High
                                    </option>
                                    <option value="rating-high-to-low">
                                        Rating: High to Low
                                    </option>
                                </select>
                            </div>
                            <div className="btn btn-bg-transparent">
                                <Button variant="dark" onClick={sortProducts}>
                                    Filter
                                </Button>
                            </div>
                            <div className="btn btn-bg-transparent">
                                <Button variant="dark" onClick={compare}>
                                    Compare
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Row>
                        {products.map((product) => (
                            <Col key={product.id}>
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

export default Electronics