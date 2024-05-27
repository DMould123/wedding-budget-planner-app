import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaLinkedin,
  FaTwitter,
  FaFacebook
} from 'react-icons/fa'
import { FiMail, FiPhone } from 'react-icons/fi'
import './Contact.css'

export const Contact: React.FC = () => {
  return (
    <div className="contact-section">
      <h1>Contact Me</h1>
      <div className="container">
        <div className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5}></textarea>
          </div>
          <button className="submit-button">Submit</button>
        </div>
      </div>
      <div className="contact-info">
        <div className="info-item">
          <FiMail />
          <p>david.mould123@yahoo.com</p>
        </div>
      </div>
    </div>
  )
}
