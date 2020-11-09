import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import emailjs from "emailjs-com";

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email address is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
    setFormState({ ...formState, name: e.target.value });
    console.log("errorMessage", errorMessage);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("", "", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <section id="contact-form">
      <div className="container">
        <h1 data-testid="contact" className="display-1 text-center">
          Contact Me
        </h1>
        <form onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              id="nameInput"
              defaultValue={name}
              placeholder="James Halliday"
              onBlur={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="anorak@oasis.com"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">Message</label>
            <textarea
              className="form-control"
              name="message"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="“I didn't think anyone would anticipate this move, because it was so clearly insane.”"
              onBlur={handleChange}
              defaultValue={message}
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </form>
      </div>
    </section>
    // <section id="contact-form" className="">
    //   <div className="container">
    //     <div className="row d-flex justify-content-center">
    //       <h1>
    //         Email:{" "}
    //         <a href="mailto:jacob.w.corum@gmail.com">jacob.w.corum@gmail.com</a>
    //       </h1>
    //     </div>
    //     <div className="row d-flex justify-content-center">
    //       <h1>
    //         Phone: <a href="tel:1-801-814-3191">801-814-3191</a>
    //       </h1>
    //     </div>
    //   </div>
    // </section>
  );
}

export default ContactForm;
