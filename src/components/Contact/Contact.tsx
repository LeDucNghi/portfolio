import "./Contact.scss";

import { Section } from "../Section/Section";
import emailjs from "@emailjs/browser";

export function Contact() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2iilvfj",
        "template_6g6gf77",
        e.currentTarget,
        "ZA62N0Wyj1p2ngAci"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Section
      sectionName="contact"
      sectionDescribe="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible"
      id="contact"
    >
      <form onSubmit={(e) => sendEmail(e)} className="form_container">
        <div className="contact_fields">
          <label htmlFor="">Name</label>
          <input type="text" placeholder="Enter Your Name" name="user_name" />
        </div>
        <div className="contact_fields">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Enter Your Email" name="user_email" />
        </div>
        <div className="contact_fields">
          <label htmlFor="">Message</label>
          <textarea rows={50} placeholder="Enter Your Message" name="message" />
        </div>

        <div className="form_button">
          <button type="submit">Send Email</button>
        </div>
      </form>
    </Section>
  );
}
