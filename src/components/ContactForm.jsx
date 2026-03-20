import { useForm, ValidationError } from '@formspree/react'

function ContactForm() {
  const [state, handleSubmit] = useForm('xvzwlndg')

  if (state.succeeded) {
    return (
      <div className="contact-form contact-form--success" role="status">
        <div className="contact-form-image" aria-hidden="true" />
        <h3>Message Sent</h3>
        <p className="contact-form-success">
          Thanks for reaching out. We got your message and will get back to you
          soon.
        </p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-image" aria-hidden="true" />
      <h3>Send Us a Message</h3>

      <div className="form-row">
        <div className="field">
          <label htmlFor="first-name">First Name</label>
          <input id="first-name" name="firstName" type="text" placeholder="Jane" />
        </div>
        <div className="field">
          <label htmlFor="last-name">Last Name</label>
          <input id="last-name" name="lastName" type="text" placeholder="Smith" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="email-address">Email Address</label>
        <input
          id="email-address"
          name="email"
          type="email"
          placeholder="jane@example.com"
          required
        />
        <ValidationError
          className="field-error"
          prefix="Email"
          field="email"
          errors={state.errors}
        />
      </div>

      <div className="field">
        <label htmlFor="phone-optional">Phone (optional)</label>
        <input
          id="phone-optional"
          name="phone"
          type="tel"
          placeholder="(555) 000-0000"
        />
      </div>

      <div className="field">
        <label htmlFor="dog-name-breed">Dog&apos;s Name &amp; Breed</label>
        <input
          id="dog-name-breed"
          name="dogNameBreed"
          type="text"
          placeholder="e.g. Max, Golden Retriever"
        />
      </div>

      <div className="field">
        <label htmlFor="service-interested">Service Interested In</label>
        <select id="service-interested" name="serviceInterested" defaultValue="">
          <option value="">-- Select a service --</option>
          <option>Bath &amp; Brush</option>
          <option>Full Groom</option>
          <option>Nail Trim</option>
          <option>Not sure yet</option>
        </select>
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Any questions, special requests, or things we should know about your pup..."
          required
        />
        <ValidationError
          className="field-error"
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>

      {state.errors && state.errors.getFormErrors().length > 0 ? (
        <p className="form-status form-status--error">
          Something went wrong while sending your message. Please try again.
        </p>
      ) : null}

      <button className="btn-submit" type="submit" disabled={state.submitting}>
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

export default ContactForm
