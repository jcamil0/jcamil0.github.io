import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Personaldata from "../utils/resumeData";
import { Form } from "react-bootstrap";

const Contact = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    mesagge: "",
  });
  const handleChange = (event) => {
    console.log(event.target.value);
    setdata({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log(
      "send data..." + data.name + " " + data.email + "" + data.mesagge
    );
  };

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_r5iomli",
        "template_3491al9",
        e.target,
        "user_uZ8p03pidCoXyklMoUhQR"
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
  }

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">message</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <Form onSubmit={sendEmail}>
            <div>
              <label htmlFor="contactName">
                Name <span className="required">*</span>
              </label>
              <input
                type="text"
                defaultValue=""
                size="35"
                id="contactName"
                name="to_name"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="contactEmail">
                Email <span className="required">*</span>
              </label>
              <input
                type="text"
                defaultValue=""
                size="35"
                id="contactEmail"
                name="from_name"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="contactSubject">Subject</label>
              <input
                type="text"
                defaultValue=""
                size="35"
                id="contactSubject"
                name="contactSubject"
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="contactMessage">
                Message <span className="required">*</span>
              </label>
              <textarea
                cols="50"
                rows="15"
                id="contactMessage"
                name="message"
                onChange={handleChange}
              ></textarea>
            </div>

            <div>
              <button className="submit">Submit</button>
              <span id="image-loader">
                <img alt="" src="images/loader.gif" />
              </span>
            </div>
          </Form>
          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              name
              <br />
              street <br />
              city, state zip
              <br />
              <span>phone</span>
            </p>
          </div>

          <div className="widget widget_tweets">
            <h4 className="widget-title">Latest Tweets</h4>
            <ul id="twitter">
              <li>
                <span>
                  This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                  vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                  bibendum auctor, nisi elit consequat ipsum
                  <a href="./">http://t.co/CGIrdxIlI3</a>
                </span>
                <b>
                  <a href="./">2 Days Ago</a>
                </b>
              </li>
              <li>
                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi
                  <a href="./">http://t.co/CGIrdxIlI3</a>
                </span>
                <b>
                  <a href="./">3 Days Ago</a>
                </b>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
