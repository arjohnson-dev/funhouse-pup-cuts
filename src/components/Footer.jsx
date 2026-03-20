const hours = [
  ["Monday", "10a - 3p"],
  ["Tuesday", "9a - 4p"],
  ["Wednesday", "9a - 4p"],
  ["Thursday", "9a - 4p"],
  ["Friday", "9a - 4p"],
  ["Saturday", "9a - 4p"],
  ["Sunday", "Closed"],
];

function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-column">
          <div className="contact-map footer-map">
            <iframe
              title="Funhouse Pup Cuts location map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=1293%20E%20Michigan%20Ave%2C%20Ypsilanti%2C%20MI%2048198&z=15&output=embed"
            />
          </div>
        </div>

        <div className="footer-column footer-column--center">
          <div className="footer-details">
            <a
              className="contact-link-button footer-social-button"
              href="https://www.facebook.com/profile.php?id=61573056279935"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <p>
              <strong>Phone</strong>
            </p>
            <p>
              <a href="tel:+17344600095">(734) 460-0095</a>
            </p>
            <p>
              <strong>Address</strong>
            </p>
            <p>
              1293 E Michigan Ave
              <br />
              Ypsilanti, MI 48198
            </p>
            <a
              className="contact-link-button footer-directions"
              href="https://maps.google.com/?q=1293%20E%20Michigan%20Ave%2C%20Ypsilanti%2C%20MI%2048198"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Hours</h3>
          <ul className="hours-list footer-hours">
            {hours.map(([day, time]) => (
              <li key={day}>
                <span>{day}</span>
                <span>{time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-meta">
        <p className="footer-copy">
          © 2025 <strong>Funhouse Pup Cuts</strong> — All Rights Reserved
        </p>
        <p className="footer-credit">
          developed by{' '}
          <a href="https://arjohnson.dev/" target="_blank" rel="noopener noreferrer">
            arjohnson.dev
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
