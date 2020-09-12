import React from "react";

function ContactForm() {
  return (
    <section>
      <h1 data-testid="contact">Contact Me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name"></label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input type="email" name="email" />
        </div>
        <div>
          <label htmlFor="email"></label>
          <input type="text" name="email" />
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
