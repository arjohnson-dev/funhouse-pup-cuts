import NavBar from './components/NavBar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import PricingSection from './components/PricingSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import './styles/global.css'

function App() {
  return (
    <>
      <div className="top-shield" aria-hidden="true" />
      <div className="site-shell">
        <NavBar />
        <div className="top-paint-zone" aria-hidden="true" />
        <main>
          <Hero />
          <AboutSection />
          <PricingSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
