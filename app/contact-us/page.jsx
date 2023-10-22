"use client";

import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import { contactUsSchema } from "../secure/contactUsSchema";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { contactUcRoute } from "../utils/routes";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const [error, setError] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await contactUsSchema.validate({
        name,
        email,
        message,
        subject
      }, {abortEarly: false})
      await axios.post(contactUcRoute, {
        name,
        email,
        subject,
        message,
      }).then(result => {
        toast.success("پیام شما با موفقیت ارسال شد. به زودی جواب را دریافت خواهید کرد");
        console.log(result);
      })
    } catch (error) {
      setError(error.inner)
    }
  };

  return (
    <>
      <Navbar />
      <Helmet>
          <title> تماس با ما | ایده نگار</title>
        </Helmet>
      <div class="contact1">
        <div class="container-contact1">
          <div class="contact1-pic js-tilt" data-tilt>
            <img
              src="https://colorlib.com/etc/cf/ContactFrom_v1/images/img-01.png"
              alt="IMG"
            />
          </div>
          <form class="contact1-form validate-form">
            <div className="text-center">
            {error
            ? error.map((error, index) => (
                <p key={index} className="alert alert-danger">
                  {error.message}
                </p>
              ))
            : null}
            </div>
            <span class="contact1-form-title">تماس با ما</span>
            <div
              class="wrap-input1 validate-input"
              data-validate="Name is required"
            >
              <input
                class="input1"
                type="text"
                name="name"
                placeholder="نام"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span class="shadow-input1"></span>
            </div>
            <div
              class="wrap-input1 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                class="input1"
                type="text"
                name="email"
                placeholder="ایمیل"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span class="shadow-input1"></span>
            </div>
            <div
              class="wrap-input1 validate-input"
              data-validate="Subject is required"
            >
              <input
                class="input1"
                type="text"
                name="subject"
                placeholder="موضوع"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <span class="shadow-input1"></span>
            </div>
            <div
              class="wrap-input1 validate-input"
              data-validate="Message is required"
            >
              <textarea
                class="input1"
                name="message"
                placeholder="پیام شما"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <span class="shadow-input1"></span>
            </div>
            <div class="container-contact1-form-btn">
              <button class="contact1-form-btn" onClick={handleSubmit}>
                <span>
                  ارسال ایمیل
                  <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
