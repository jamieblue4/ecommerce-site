import React from 'react'
import { Button, Typography } from '@material-ui/core';
import './Modal.css';


function Modal({ closeModal }) {
  return (
    <div className="modalBackground">
        <div className="modalContainer">
                <Button className="closeModalButton" onClick={() => {closeModal(false)
                }}>close</Button>
            <Typography className="cartTitle" variant="h3">Cart</Typography>
            <div className="cartContainer">
                <Typography className="cartItemName" variant="h5">Item</Typography>
                <Typography className="cartItemQty" variant="h5">Quantity</Typography>
                <Typography className="cartItemPrice" variant="h5">Price</Typography>
                <Typography className="cartTotal" variant="h4">Total</Typography>
            </div>
        </div>
   </div>
  );
}

export default Modal;