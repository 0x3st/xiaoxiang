import { Link } from 'react-router-dom'

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "My First React Website!",
      date: "2026-02-03",
      excerpt: "Dad taught me how to use React and Vite. It's so cool!"
    },
    {
      id: 2,
      title: "Why The Yellow Fish is Best",
      date: "2026-02-02",
      excerpt: "Blue is okay, but Yellow is clearly superior. Here's why..."
    }
  ]

  return (
    <>
      <h2 style={{ color: '#ff8c00', marginBottom: '25px' }}>✍️ Blog Posts</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {posts.map(post => (
          <article key={post.id} className="card">
            <h3 style={{ marginTop: 0, color: '#ff8c00' }}>{post.title}</h3>
            <small style={{ color: '#999', display: 'block', margin: '5px 0 10px' }}>{post.date}</small>
            <p>{post.excerpt}</p>
            <button>Read More meow~</button>
          </article>
        ))}
      </div>
    </>
  )
}
