import React from 'react'
import { ProductCard } from './ProductCard'
import '../styles/ProductList.scss'

import img1 from '../assets/images/1.png'
import img2 from '../assets/images/2.png'
import img3 from '../assets/images/3.png'
import img4 from '../assets/images/4.png'

export const ProductList = () => {
    const images = [img1, img2, img3, img4]

    const products = [
        { id: 1, name: 'Laptop' },
        { id: 2, name: 'Smartphone' },
        { id: 3, name: 'Headphones' },
        { id: 4, name: 'Smartwatch' }
    ]

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.id} product={product} images={images} />
            ))}
        </div>
    )
}
