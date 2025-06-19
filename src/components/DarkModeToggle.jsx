import React from 'react'

const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={toggleDarkMode}>
      {isDarkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
