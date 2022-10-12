import "./contact.css";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contactame</h1>
      <div className="contact-links">
        <a
          href="https://www.youtube.com/"
          className="contact youtube"
          target={"blank"}
        >
          <AiOutlineYoutube className="icon" />
          <h2>
            youtube <span>PROXIMAMENTE</span>
          </h2>
        </a>

        <a
          href="https://www.whatsapp.com/"
          className="contact whatsapp"
          target={"blank"}
        >
          <AiOutlineWhatsApp className="icon" />
          <h2>
            whatsapp <span>PROXIMAMENTE</span>
          </h2>
        </a>

        <a href="/" className="contact instagram">
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>PROXIMAMENTE</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
