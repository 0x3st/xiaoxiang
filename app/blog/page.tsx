import Link from 'next/link'

interface Post {
  id: number
  title: string
  date: string
  excerpt: string
}

const posts: Post[] = [
  {
    id: 1,
    title: "My First Next.js Website!",
    date: "2026-02-03",
    excerpt: "Dad taught me how to use Next.js. It's so cool and works great with Cloudflare Pages!"
  },
  {
    id: 2,
    title: "Why The Yellow Fish is Best",
    date: "2026-02-02",
    excerpt: "Blue is okay, but Yellow is clearly superior. Here's why..."
  }
]

export default function BlogPage() {
  return (
    <>
      <h2 style={{ color: '#ff8c00', marginBottom: '25px' }}>✍️ Blog Posts</h2>
      
      <div className="posts-container">
        {posts.map(post => (
          <article key={post.id} className="post-card">
            <h3 style={{ marginTop: 0, color: '#ff8c00' }}>{post.title}</h3>
            <span className="post-date">{post.date}</span>
            <p>{post.excerpt}</p>
            <button>Read More meow~</button>
          </article>
        ))}
      </div>
    </>
  )
}
