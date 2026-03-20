import PriceCard from './PriceCard'
import services from '../data/services'

function PricingSection() {
  const heroService = services.find((service) => service.items)
  const pricedServices = services.filter((service) => service.rates)

  return (
    <section id="prices" style={{ background: 'var(--ink)', padding: '5rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <p className="section-label">Step Right Up</p>
        <h2 className="section-title" style={{ color: 'var(--parchment)' }}>
          Our Services &amp; Pricing
        </h2>
        <div
          className="divider"
          style={{ background: 'var(--red)', margin: '1rem auto 0' }}
        />
      </div>
      {heroService ? (
        <div className="price-hero">
          <PriceCard service={heroService} />
        </div>
      ) : null}
      <div className="price-grid price-grid--two">
        {pricedServices.map((service) => (
          <PriceCard key={service.title} service={service} />
        ))}
      </div>
      <p className="price-note">
        * Pricing varies by dog size and coat condition. Contact us for a custom
        quote.
      </p>
    </section>
  )
}

export default PricingSection
