import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

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
  return (
    <section id="contact-form" className="container">
      <h1 data-testid="contact" className="display-1 text-center">
        Contact Me
      </h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="nameInput"
            defaultValue={name}
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
            placeholder="Enter email"
            defaultValue={email}
            onBlur={handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            I'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Message</label>
          <textarea
            className="form-control"
            name="message"
            id="exampleFormControlTextarea1"
            rows="3"
            onBlur={handleChange}
            defaultValue={message}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </form>
    </section>
  );
}

export default ContactForm;
