import "./contact.scss";
import Map from "../../components/map/Map";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Please fill out the form below to get in
          touch.
        </p>
        <form
          className="contact-form"
          action="https://formsubmit.co/marizza.karlin@icloud.com"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              rows={5}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>

      <div className="map-container">
        <Map />
        <div className="contact-info">
          <h2>Our Address</h2>
          <p>Film Street 37B</p>
          <p>MoviestarPlanet, CA 90210</p>
          <p>Email: contact@popcornpalace.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
