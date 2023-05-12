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
            await fetch('http://localhost:4000/checkout', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(cartItems),
          }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url);
            }
        });
    }
    
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