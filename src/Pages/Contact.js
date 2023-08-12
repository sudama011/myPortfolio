import React from "react";
import emailjs from "@emailjs/browser";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
const Contact = () => {
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_63jfvmh",
        "template_equbu78",
        form.current,
        "U4a0yFRYkbl6vxUNU"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent, I'll get back to you shortly", result.text);
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, Please try again", error.text);
        }
      );
    form.current.reset();
  };

  return (
    <>
      <div className="container mx-auto max-w-sm p-4 py-6">
        <h1 className="text-4xl font-semibold mb-4 text-white flex justify-center">
          Contact Me
        </h1>
        <p className="text-gray-300 mb-4">
          Interested in collaborating or have a project idea? Feel free to get
          in touch with me. I'm always excited to discuss new opportunities!
        </p>
        <form className="mb-6" ref={form} onSubmit={sendEmail}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              placeholder="Your Message"
              required
            />
          </div>

          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="flex justify-center mb-5">
        <a
          href="https://www.linkedin.com/in/sd011/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/sudama011"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.facebook.com/sudama.dhakad.31"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaFacebook />
        </a>

        <a
          href="https://www.instagram.com/sudama.dhakad/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <FaInstagram />
        </a>

        <a
          href="https://twitter.com/sdhakad011"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </>
  );
};

export default Contact;
