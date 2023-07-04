import { useState } from "react";
import { StyledFormWrapper } from "../styles";
import Axious from 'axios';
import Swal from 'sweetalert2';

const Form = ({data, setData, url, formErrors, setFormErrors}) => {

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  function submit(e) {
    e.preventDefault();
    setFormErrors(validate(data));

    Axious.post(url, {
      name: data.name,
      email: data.email,
      message: data.message
    })
      .then(res => {
        if (res.status === 200) {
          Swal.fire("Thank you!", "Your request has been accepted for processing. Our manager will contact you soon. ", "success").then(() => {
            window.location.reload();
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        }
      })
  }

  function validate(values) {
    const errors = {}
    if (!values.name) {
      errors.name = "Name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    }
    if (!values.message) {
      errors.message = "Message is required!";
    }
    return errors;
  }

  return (
    <>
      <StyledFormWrapper>
        <form onSubmit={(e) => submit(e)} className="my-form">
          <h2 className="text">Reach out to us!</h2>
          <label htmlFor="name"></label>
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Your name*"
            onChange={(e) => handle(e)}
            id="name"
            value={data.name}
          />
          <p className="error-msg">{formErrors.name}</p>
          <label htmlFor="email"></label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Your e-mail*"
            onChange={(e) => handle(e)}
            id="email"
            value={data.email}
          />
          <p className="error-msg">{formErrors.email}</p>
          <label htmlFor="message"></label>
          <textarea
            className="form-textarea"
            name="message"
            placeholder="Your message*"
            onChange={(e) => handle(e)}
            id="message"
            value={data.message}
          />
          <p className="error-msg" >{formErrors.message}</p>
          <button className="form-send-btn">Send Message</button>
        </form>
      </StyledFormWrapper>
    </>
  )
}

export default Form
