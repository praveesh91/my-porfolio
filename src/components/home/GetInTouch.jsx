import React, { useEffect, useRef } from "react";
import emailjs from "emailjs-com";

const GetInTouch = ({ heading, message, email }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(document.getElementsByClassName("form-control").value);
    emailjs
      .sendForm(
        "service_rxeeeny",
        "template_qwlga6d",
        form.current,
        "user_nx8NUKI7ece8JDKGOb1wy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section id="contact">
      <div class="container contact-form">
        <div class="contact-image">
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="rocket_contact"
          />
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <h3>Drop me a Message</h3>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <input
                  type="text"
                  name="user_name"
                  class="form-control"
                  placeholder="Your Name *"
                />
              </div>
              <div class="form-group">
                <input
                  type="email"
                  name="user_email"
                  class="form-control"
                  placeholder="Your Email *"
                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  name="txtPhone"
                  class="form-control"
                  placeholder="Your Phone Number *"
                />
              </div>
              <div class="form-group">
                {/* <input
                  id="sendButton"
                  type="submit"
                  name="btnSubmit"
                  class="btnContact"
                  value="Send"
                /> */}
                <button
                  type="submit"
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
                  class="form-control"
                  placeholder="Your Message *"
                  style={{ width: "100%", height: "150px" }}></textarea>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
