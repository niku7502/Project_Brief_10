import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="content">
        {children || <p>Main Content Placeholder</p>}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout