import React, { useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import rocketImage from "../../assets/images/rocket_contact.png";
import { Alert } from "react-bootstrap";

const initialFormData = Object.freeze({
  name: "",
  contact: "",
  email: "",
  message: "",
});
const GetInTouch = ({ heading, message, email }) => {
  const form = useRef();
  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const alert = () => {
    return (
      <Alert severity="info">
        This is an info alert — <strong>check it out!</strong>
      </Alert>
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = document.getElementById("my_form");

    try {
      await fetch(
        "https://247iak215i.execute-api.us-east-1.amazonaws.com/sendEmail",
        {
          mode: "no-cors",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: "praveesh91@gmail.com",
            email: "praveesh91@gmail.com",
            senderEmail: formData.email,
            senderName: formData.name,
            message: formData.message,
            contact: formData.contact,
            date: new Date().toISOString().split("T")[0],
          }),
        }
      );
      form.reset();
    } catch (error) {}
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section id="contact">
      <div class="container contact-form">
        <div class="contact-image">
          <img src={rocketImage} alt="rocket_contact" />
        </div>
        <form ref={form} id="my_form">
          <h3>Drop me a Message</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  name="name"
                  class="form-control"
                  onChange={handleChange}
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <input
                  name="email"
                  placeholder="Email"
                  class="form-control"
                  onChange={handleChange}
                />
              </div>
              <div class="form-group">
                <input
                  name="contact"
                  placeholder="Contact number"
                  class="form-control"
                  onChange={handleChange}
                />
              </div>
              <div class="form-group">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  name="btnSubmit"
                  class="btnContact btn btn-primary"
                  value="Send">
                  Send
                </button>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  class="form-control"
                  onChange={handleChange}
                  style={{ width: "100%", height: "150px" }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
