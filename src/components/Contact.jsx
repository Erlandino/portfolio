// Imports
import React, { useRef } from "react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

// Contact component
export default function Contact() {
  // If all properties in the object except firstLoad is true then an email can be sent.
  const [ifSendEmail, setIfSendEmail] = useState({
    navn: false,
    email: false,
    beskjed: false,
    firstLoad: true,
  });

  // creates an object of form inputs and textareas
  const form = useRef();

  const sendEmail = (e) => {
    // Stops form from reloading the page when subitted
    e.preventDefault();

    // Gathers the value of the inputs into variable
    const nameValue = form.current.childNodes[2].value;
    const emailValue = form.current.childNodes[5].value;
    const messageValue = form.current.childNodes[8].value;

    // form.current.childNodes[3].style.display = "block"

    // Calls verifiyInput with the input variables and names accordingly
    verifyInput("navn", nameValue, 2);
    verifyInput("email", emailValue, 5);
    verifyInput("beskjed", messageValue, 8);

    // Checks if the state ifSendEmail properties except firstLoad are true before sending mail. Wont send mail if any are false.
    if (ifSendEmail.navn && ifSendEmail.email && ifSendEmail.beskjed) {
      // Sends mail
      emailjs
        // service id: service_nxe4tmn, template id: "template_0abovs8", form.current is the raw element form, public key: v7mh72BuhXmxbE2X6
        .sendForm("service_nxe4tmn", "template_0abovs8", form.current, "v7mh72BuhXmxbE2X6")
        .then(
          (result) => {
            // if Successful
            form.current.childNodes[11].style.display = "block";
            for (let i = 0; i < 11; i++) {
              form.current.childNodes[i].style.display = "none";
            }
          },
          // if Unsuccessful
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  // Function to check inputs. Currently only checks to see if input is empty,
  // changes state for ifSendEmail and inputs error message to p element accordingly.
  // Function is made in consideration for future expansion.
  function verifyInput(inputName, input, node) {
    // changes ifSendEmail.firstLoad to false as inputs have been changed
    ifSendEmail.firstLoad = false;

    // checks if function call comes from an onfocusout event
    if (inputName.type === "blur") {
      // changes input to inputs value in the form
      input = inputName.target.value;

      // checks which input called the function and changes inputName accordingly
      // also changes node to be the position of the input from the node child of form
      switch (inputName.target.id) {
        case "user_name":
          inputName = "navn";
          node = 2;
          break;
        case "user_email":
          inputName = "email";
          node = 5;
          break;
        case "user_message":
          inputName = "beskjed";
          node = 8;
          break;
        default:
          break;
      }
    }

    // checks if input is empty or not, changes ifSendEmail accordingly and also adds error messages to p element accordingly.
    if (!input) {
      setIfSendEmail((prevState) => Object.assign(prevState, { [inputName]: false }));
      form.current.childNodes[node + 1].style.display = "block";
      form.current.childNodes[node + 1].textContent = `${
        inputName[0].toUpperCase() + inputName.slice(1)
      } feltet kan ikke være tom`;
      form.current.childNodes[node].classList.add("error");
    } else {
      setIfSendEmail((prevState) => Object.assign(prevState, { [inputName]: true }));
      form.current.childNodes[node + 1].style.display = "none";
      form.current.childNodes[node].classList.remove("error");
    }
  }

  return (
    // Section container
    <section className="contact" id="contact">
      {/* Form container */}
      <form ref={form} onSubmit={sendEmail} className="contact__form">
        {/* Title of section */}
        <h2>Kontakt skjema</h2>

        {/* Name label */}
        <label htmlFor="user_name" className="contact__form__label">
          Navn
        </label>
        {/* Name input */}
        <input
          type="text"
          id="user_name"
          name="user_name"
          // onBlur={verifyInput}
          className="contact__form__input"
        />
        {/* Name error message */}
        <p style={{ display: "none" }} className="contact__form__errorMessage"></p>

        {/* Email label */}
        <label htmlFor="user_email" className="contact__form__label">
          Email
        </label>
        {/* Email input */}
        <input
          type="email"
          id="user_email"
          name="user_email"
          // onBlur={verifyInput}
          className="contact__form__input"
        />
        {/* Email error message */}
        <p style={{ display: "none" }} className="contact__form__errorMessage"></p>

        {/* Message label */}
        <label htmlFor="user_message" className="contact__form__label">
          Beskjed
        </label>
        {/* Message textarea */}
        <textarea
          id="user_message"
          name="user_message"
          // onBlur={verifyInput}
          className="contact__form__textarea"
        ></textarea>
        {/* Message error message */}
        <p style={{ display: "none" }} className="contact__form__errorMessage"></p>

        {/* Submit button */}
        <input type="submit" value="Send mail" className="contact__form__button" />

        {/* success message */}
        <p style={{ display: "none" }} className="contact__form__successMessage">
          Meldingen din ble sendt!
        </p>
      </form>
    </section>
  );
}
