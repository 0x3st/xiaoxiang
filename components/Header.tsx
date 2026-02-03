'use client'

import { useState } from 'react'

export default function Header() {
  const [count, setCount] = useState(0)

  return (
    <header className="site-header">
      <div 
        className="avatar" 
        onClick={() => setCount(c => c + 1)} 
        title="Click to feed me!"
      >
        🐱🐘
        {count > 0 && <span className="click-counter">+{count}</span>}
      </div>
      <h1>Xiaoxiang's Home</h1>
      <p className="subtitle">Meow meow~ Welcome to my world!</p>
    </header>
  )
}
