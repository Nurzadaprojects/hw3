import React from 'react'
import '../styles/ProductCard.scss'

export const ProductCard = ({ product, images }) => {
    const randomImage = images[Math.floor(Math.random() * images.length)]

    const handleBuy = () => {
        console.log(`You buy: ${product.id} - ${product.name}`)
    }

    return (
        <div className="card">
            <img src={randomImage} alt={product.name} className="card-img" />
            <h3>{product.name}</h3>
            <button onClick={handleBuy}>Buy now</button>
        </div>
    )
}
