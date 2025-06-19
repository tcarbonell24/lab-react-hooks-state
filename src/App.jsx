// app.jsx
import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import styles from './styles/DarkMode.module.css'

const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', inStock: true, category: 'Fruits' },
  { id: 2, name: 'Milk', price: '$2.50', inStock: false, category: 'Dairy' },
]

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false)

  // TODO: Implement state for cart management
  const [cartItems, setCartItems] = useState([])

  // TODO: Implement state for category filtering
  const [categoryFilter, setCategoryFilter] = useState('all')

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev
      console.log(`Dark mode toggled: ${newMode ? 'Enabled' : 'Disabled'}`)
      return newMode
    })
  }

  const addToCart = (product) => {
    setCartItems((prev) => {
      if (prev.find((item) => item.id === product.id)) return prev
      return [...prev, product]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId))
  }

  const filteredProducts =
    categoryFilter === 'all'
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === categoryFilter)

  return (
    <div className={isDarkMode ? styles.dark : ''}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/* Display initial sample products */}
      <ProductList products={filteredProducts} addToCart={addToCart} />

      {/* TODO: Implement and render Cart component */}
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  )
}

export default App
