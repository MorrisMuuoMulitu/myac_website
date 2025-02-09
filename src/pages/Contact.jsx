import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      return;
    }

    setSubmitted(true); // Optimistically set submitted state
    setName("");
    setEmail("");
    setMessage("");

    // Simulate form submission success and reset form after a delay
    setTimeout(() => {
      setSubmitted(false); // Reset submitted state after 3 seconds
    }, 3000);


    // Real form submission would go here:
    /*
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`,
    })
      .then(() => {
        setSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        setError(
          "An error occurred while submitting the form. Please try again later.",
        );
        console.error("Error submitting form:", error);
        setSubmitted(false); // Reset submitted state on error as well
      });
      */
  };

  return (
    <div className="min-h-screen pt-20 bg-background">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          Contact Us
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            {submitted ? (
              <div className="confirmation-message">
                <p className="font-bold">Message Sent!</p>
                <p>Thank you for contacting us. We will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <p className="text-red-500 text-center text-lg font-medium">
                    {error}
                  </p>
                )}
                <div>
                  <label
                    htmlFor="name"
                    className="form-label"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="form-label"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="form-label"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message"
                    className="input-field"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Submit
                </button>
              </form>
            )}
          </div>

          {/* Contact Information Section */}
          <div className="contact-info-section">
            <h2 className="text-2xl font-semibold mb-4 text-primary">
              Get in Touch
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We are here to answer any questions you may have. Reach out to us
              and we'll respond as soon as we can.
            </p>
            <div className="space-y-4">
              <div>
                <FaPhone className="contact-icon" />
                <span className="align-middle">+254 705 329 860</span>
              </div>
              <div>
                <FaEnvelope className="contact-icon" />
                <span className="align-middle">info@myac.org</span>
              </div>
              <div>
                <FaMapMarker className="contact-icon" />
                <span className="align-middle">Makueni County, Kenya</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
