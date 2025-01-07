"use client";
import "./addBasketButton.scss";
import { useState } from 'react';
const AddBasketButton = ({ product_id }) => {
  const [message, setMessage] = useState('');

  const handleAddToCart = async () => {
    const response = await fetch('/api/add-to-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ product_id }),
    });

    const data = await response.json();
    setMessage(data.message);
  };
  return (
    <>
      <button className="addBasketButton" onClick={handleAddToCart}>Sepete Ekle</button>
      {message && <p>{message}</p>}
    </>

  )
}

export default AddBasketButton