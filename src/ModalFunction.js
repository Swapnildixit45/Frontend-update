import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Cart from './Cart/Cart';
import { CartContext } from './Cart/CartContext';
import { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';

function ModalFunction() {
    const { calculateTotal } = useContext(CartContext);
    const { cartItems } = useContext(CartContext)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleCheckout = async () => {
        const response = await fetch('http://localhost:4000/checkout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                lineItems: cartItems // Pass your line items data here
            })
        });



        if (response.ok) {
            const { url } = await response.json();
            // Redirect the user to the returned URL to complete the payment
            window.location.href = url;
        } else {
            // Handle error case
            console.error('An error occurred during checkout.');
        }
    };


    return (
        <>
            <button className="btn btn-outline-transparent mx-3 mt-3" type="submit" onClick={handleShow} style={{ color: "#FFFF" }}>
                <div className='d-flex'><ShoppingCartIcon /><Badge bg='transparent'>{cartItems.length}</Badge></div>
            </button>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Cart />
                </Modal.Body>
                <Modal.Footer>
                    Total: ₹ {calculateTotal()}
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="dark" onClick={handleCheckout}>
                        Go to payment page
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalFunction