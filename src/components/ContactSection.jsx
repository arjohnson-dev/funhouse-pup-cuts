import ContactForm from './ContactForm'

function ContactSection() {
  return (
    <section id="contact">
      <div className="contact-section__intro">
        <p className="section-label">Get in Touch</p>
        <h2 className="section-title">Say Hello!</h2>
        <div className="divider" />
        <p style={{ color: 'var(--brown)', lineHeight: 1.8, fontSize: '0.95rem' }}>
          Visit the shop, give us a call, or send a note through the form if you
          want to ask about availability before booking.
        </p>
      </div>
      <ContactForm />
    </section>
  )
}

export default ContactSection
