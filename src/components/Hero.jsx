import { useEffect, useState } from "react";

const slides = [
  {
    image: "/fpc-dog.jpg",
    alt: "Freshly groomed dog posing for the hero banner",
  },
  {
    image: "/fpc-dog-1.jpg",
    alt: "Dog receiving a polished grooming finish",
  },
  {
    image: "/fpc-dog-2.jpg",
    alt: "Well-groomed dog in the Funhouse Pup Cuts carousel",
  },
  {
    image: "/fpc-shop.jpg",
    alt: "Inside Funhouse Pup Cuts grooming space",
  },
];

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % slides.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="hero" aria-label="Funhouse Pup Cuts hero">
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.image}
            className={`hero-slide ${index === activeIndex ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            role="img"
            aria-label={slide.alt}
          />
        ))}
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
      <div className="hero-dots" aria-label="Hero carousel slide navigation">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            className={`hero-dot ${index === activeIndex ? "is-active" : ""}`}
            aria-label={`Show slide ${index + 1}`}
            aria-pressed={index === activeIndex}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
