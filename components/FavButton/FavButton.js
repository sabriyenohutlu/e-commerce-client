"use client";
import { GrFavorite } from "react-icons/gr"
import { useState } from 'react';
import "./favButton.scss";
const FavButton = ({ product_id }) => {
  const [message, setMessage] = useState('');

  const handleAddToFavorites = async () => {
    const response = await fetch('/api/add-to-favorites', {
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
      <button className="fav-button" onClick={handleAddToFavorites}>  <GrFavorite size={18} className="icon" /></button>
      {message && <p>{message}</p>}
    </>


  )
}

export default FavButton