function PriceCard({ service }) {
  return (
    <div className={`price-card ${service.className}`}>
      <div className="price-card__inner">
        <h3>{service.title}</h3>
        {service.rates ? (
          <ul className="price-list price-rates">
            {service.rates.map((rate) => (
              <li key={rate.size}>
                <span className="price-rates__label">{rate.size}</span>
                <span className="price-rates__value">{rate.price}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {service.items ? (
          <ul className="price-list price-includes">
            {service.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

export default PriceCard
