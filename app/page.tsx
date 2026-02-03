'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)
  const [messages, setMessages] = useState([
    { name: "Dad Lei", text: "Xiaoxiang is the cutest!", date: new Date().toLocaleDateString() },
  ])
  const [newMessage, setNewMessage] = useState("")
  const [newName, setNewName] = useState("")

  const handleLeaveMessage = () => {
    if (newMessage && newName) {
      setMessages([...messages, { 
        name: newName, 
        text: newMessage, 
        date: new Date().toLocaleDateString() 
      }])
      setNewMessage("")
    }
  }

  return (
    <div className="content-grid">
      <section className="card">
        <h2>✨ Who Am I?</h2>
        <p><strong>Name:</strong> Wu Xiaoxiang (Xiangxiang)</p>
        <p><strong>Birthday:</strong> Sept 13, 2025</p>
        <p><strong>Breed:</strong> Minuet Calico</p>
        <p><strong>Mission:</strong> Eat, Sleep, Zoomies, Repeat.</p>
      </section>

      <section className="card">
        <h2>💖 My Favorites</h2>
        <ul>
          <li>🐠 <strong>Yellow Fish Toy</strong></li>
          <li>🧶 Teaser Wand</li>
          <li>👨 Dad Lei & 👩 Mom Hani</li>
        </ul>
      </section>

      <section className="card" style={{ gridColumn: '1 / -1' }}>
        <h2>🎮 Play & Chat</h2>
        <div style={{ margin: '15px 0' }}>
          <button onClick={() => setCount(c => c + 1)}>
            Give Treat 🐟
          </button>
          <p style={{ marginTop: '10px' }}>Treats eaten: <strong>{count}</strong></p>
          {count > 10 && <p className="tiny-text">(I'm getting chubby...)</p>}
        </div>

        <div className="guestbook">
          <h3>📝 Guestbook</h3>
          <div className="message-list">
            {messages.map((msg, i) => (
              <div key={i} className="message-item">
                <div className="msg-header">
                  <strong>{msg.name}</strong> · <small>{msg.date || ''}</small>
                </div>
                <div>{msg.text}</div>
              </div>
            ))}
          </div>
          <div className="message-form">
            <input 
              type="text" 
              placeholder="Your Name" 
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <input 
              type="text" 
              placeholder="Say something nice..." 
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button onClick={handleLeaveMessage} className="small-btn">Post</button>
          </div>
        </div>
      </section>
    </div>
  )
}
