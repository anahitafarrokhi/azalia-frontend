import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    whatsapp: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // API request to send email
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Email sent successfully!");
      setFormData({ firstName: "", whatsapp: "", email: "", message: "" });
    } else {
      alert("Error sending email!");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full p-6 md:p-12">
      <div className="w-full md:w-2/5 mt-6 md:mt-0 md:pl-12">
        <h2 className="text-2xl font-semibold text-center md:text-left mb-4">CONTACT US</h2>
        <p className="text-gray-600 text-center md:text-left mb-6">
          Have any questions or need guidance? Share your details here, and we’ll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-10 flex flex-col items-center">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name*"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden w-full">
            <span className="bg-gray-200 px-4 py-3 text-gray-600">+971</span>
            <input
              type="tel"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="WhatsApp Number*"
              className="w-full p-3 focus:outline-none"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="I need help, can you connect me with an expert?"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            rows={4}
            required
          ></textarea>

          <button
            type="submit"
            className="w-1/2 bg-black text-white py-3 rounded-md font-medium hover:bg-gray-800 transition text-center"
          >
            SUBMIT NOW
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
