"use client";
import { useState } from "react";
import Image from "next/image";
import "./ProductGrid.css";
import { FaHeart, FaRegHeart } from "react-icons/fa"; 

export default function ProductGrid({ products = [] }) {
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (productId) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId); 
      } else {
        newFavorites.add(productId); 
      }
      return newFavorites;
    });
  };

  return (
    <div className="productGrid">
      {products.length === 0 ? (
        <div>No products available</div>
      ) : (
        products.map((product) => (
          <div key={product.id} className="productCard">
            <Image
              src={product.image}
              alt={product.title}
              width={150}
              height={150}
              className="productImage"
            />
            <div className="productName">{product.title}</div>
            <div className="inline">
              <div className="productMessage">Sign in or create an account to see pricing</div>
              <button onClick={() => toggleFavorite(product.id)} className="favoriteButton">
                {favorites.has(product.id) ? (
                  <FaHeart className="favoriteIcon" />
                ) : (
                  <FaRegHeart className="favoriteIcon" /> 
                )}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
