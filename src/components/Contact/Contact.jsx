import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";
import './styles.css';


export function Contact() {

  return (
    <div id="contact">
      <header>
        <h2>Contact</h2>
        {/* <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p> */}
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:yogeshraja.dev@gmail.com"><img src={emailIcon} alt="Email" /></a>
          <a href="mailto:yogeshraja.dev@gmail.com">yogeshraja.dev@gmail.com</a>
        </div>
        <div>
          <a href="tel:+919698975464"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919698975464">(+91) 9698975464</a>
        </div>
      </div>
      <Form></Form>
    </div>
  )
}