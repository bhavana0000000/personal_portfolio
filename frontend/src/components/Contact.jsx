import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
  
    try {
      const response = await fetch("https://personalportfolio-production-4661.up.railway.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
  
      if (!response.ok) {
        // Optionally, you can check response.status for more detail
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      // This handles both network errors and HTTP errors thrown above
      setStatus("Failed to send message. Please try again.");
      console.error("Fetch error:", error.message);
    }
  };
  

  return (
    <div className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-[600px] w-full bg-white p-8 rounded shadow"
      >
        <h2 className="text-4xl font-bold mb-4 text-center text-cyan-700">Contact</h2>
        <input
          className="bg-[#ccd6f6] p-2 mb-4 rounded"
          type="text"
          name="name"
          rows="2"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="bg-[#ccd6f6] p-2 mb-4 rounded"
          type="email"
          name="email"
          rows="2"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2 mb-4 rounded"
          name="message"
          rows="6"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="text-white border-2 border-cyan-700 bg-cyan-700 hover:bg-cyan-500 hover:border-cyan-500 px-4 py-2 rounded transition"
        >
          Send
        </button>
        {status && (
          <p className="mt-4 text-center text-cyan-700">{status}</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
