import "./Contact.scss";

import { Section } from "../Section/Section";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    content: "",
  });

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    await emailjs
      .sendForm(
        "service_2iilvfj",
        "template_6g6gf77",
        e.currentTarget,
        "ZA62N0Wyj1p2ngAci"
      )
      .then(
        (result) => {
          console.log(result.text);

          setIsLoading(false);

          setInputValues({
            name: "",
            content: "",
            email: "",
          });

          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message has been sent🥳",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);

          setIsLoading(false);

          Swal.fire({
            position: "center",
            icon: "error",
            title: "Something went wrong 🤔",
            showConfirmButton: false,
            timer: 1500,
          });
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
          <input
            value={inputValues.name}
            onChange={(e) =>
              setInputValues({ ...inputValues, name: e.target.value })
            }
            type="text"
            placeholder="Enter Your Name"
            name="user_name"
          />
        </div>
        <div className="contact_fields">
          <label htmlFor="">Email</label>
          <input
            value={inputValues.email}
            onChange={(e) =>
              setInputValues({ ...inputValues, email: e.target.value })
            }
            required
            type="email"
            placeholder="Enter Your Email"
            name="user_email"
          />
        </div>
        <div className="contact_fields">
          <label htmlFor="">Message</label>
          <textarea
            value={inputValues.content}
            onChange={(e) =>
              setInputValues({ ...inputValues, content: e.target.value })
            }
            required
            rows={50}
            placeholder="Enter Your Message"
            name="message"
          />
        </div>

        <div className="form_button">
          <input
            disabled={isLoading}
            type="submit"
            placeholder={isLoading ? "Sending..." : "Send Email"}
          />
        </div>
      </form>
    </Section>
  );
}
