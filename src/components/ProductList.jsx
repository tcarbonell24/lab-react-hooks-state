import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
// TODO: Replace sample data with dynamic product list

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h2>Available Products</h2>

      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  )
}

export default ProductList
