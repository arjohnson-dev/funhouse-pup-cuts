const heroImage = '/fpc-dog.jpg'

function Hero() {
  return (
    <div className="hero">
      <div className="hero-carousel" aria-hidden="true">
        <div
          className="hero-slide is-active"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      </div>
      <div className="hero-banner stripes" />
      <h1>
        Funhouse
        <br />
        Pup Cuts
      </h1>
      <p className="hero-tagline">The Greatest Groom on Earth</p>
      <a className="btn-book-hero" href="#book" id="book">
        Book Now
      </a>
    </div>
  )
}

export default Hero
