import "./Contact.scss";

import { Section } from "../HeadingSection/Section";

export function Contact() {
  return (
    <>
      <Section
        sectionName="contact"
        sectionDescribe="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible"
      >
        <div className="form_container">
          <div className="contact_fields">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Enter Your Name" />
          </div>
          <div className="contact_fields">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="Enter Your Email" />
          </div>
          <div className="contact_fields">
            <label htmlFor="">Message</label>
            <textarea rows={50} placeholder="Enter Your Message" />
          </div>
        </div>
      </Section>
    </>
  );
}
