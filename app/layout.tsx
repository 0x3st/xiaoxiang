import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="app-container">
      <Header />
      <Navigation />
      <main className="page-content">{children}</main>
      <Footer />
    </div>
  )
}
