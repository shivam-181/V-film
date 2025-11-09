// File: app/components/sections/Contact.js
"use client";

import { useState } from "react";
import axios from "axios";
import Image from "next/image";

export default function Contact() {
  // --- Form Input State (Unchanged) ---
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // --- Validation & Submission State (Unchanged) ---
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [apiError, setApiError] = useState(null);

  // --- Validation Function (Unchanged) ---
  const validateForm = () => {
    let currentErrors = {};

    if (!name.trim()) {
      currentErrors.name = "Name is required";
    }
    if (!email.trim()) {
      currentErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      currentErrors.email = "Invalid email address";
    }
    if (!message.trim()) {
      currentErrors.message = "Message is required";
    }

    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  // --- HandleSubmit Function (Unchanged) ---
  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("idle");
    setApiError(null);
    setErrors({});

    const isValid = validateForm();
    if (!isValid) {
      return;
    }

    setStatus("submitting");
    const formData = { name, email, phone, message };

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL,
        formData
      );

      if (response.status === 200 || response.status === 201) {
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setErrors({});
      } else {
        setStatus("error");
        setApiError("An unexpected error occurred. Please try again.");
      }
    } catch (error) {
      console.error("API Error:", error);
      setStatus("error");
      if (error.response && error.response.data) {
        const firstErrorKey = Object.keys(error.response.data)[0];
        setApiError(`Error: ${error.response.data[firstErrorKey][0]}`);
      } else {
        setApiError("Submission failed. Please check your connection.");
      }
    }
  };

  return (
    <section className="container mx-auto px-6 py-16 md:py-24 relative overflow-hidden">
      {/* --- Placeholders for corner illustrations --- */}

      {/* THIS IS THE CORRECTED DIV (Bottom Left) */}
      <div className="absolute bottom-0 -left-24 w-72 h-72rounded-full opacity-50">
        {
          <Image
            src="/last2.png"
            alt="Mandala Bottom Left"
            width={442} // Use exact dimensions
            height={442} // Use exact dimensions
            className="absolute bottom-0 -left-24"
          />
        }
      </div>

      {/* This one is correct (Top Right) */}
      <div className="absolute -top-24 -right-24 w-72 h-72rounded-full opacity-50"></div>
      {
        <Image
          src="/last1.png"
          alt="Mandala Top Right"
          width={442} // Use exact dimensions
          height={442} // Use exact dimensions
          className="absolute -top-24 -right-24"
        />
      }

      {/* --- Main Two-Column Layout --- */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 relative z-10">
        {/* --- LEFT Column: Text --- */}
        <div className="w-full md:w-1/2 space-y-4 pt-16">
          <p className="text-brand-body text-sm leading-relaxed">
            Whether you have an idea, a question, or simply want to explore how
            V can work together, V're just a message away.
          </p>
          <p className="text-brand-body text-sm leading-relaxed">
            Let's catch up over coffee.
          </p>
          <p className="text-brand-body text-sm leading-relaxed">
            Great stories always begin with a good conversation.
          </p>
        </div>

        {/* --- RIGHT Column: Title, Form, Contact Info --- */}
        <div className="w-full md:w-1/2">
          {/* Title */}
          <div className="mb-6">
            <h2 className="font-serif text-4xl text-brand-dark">
              Join the Story
            </h2>
            <p className="text-brand-body mt-2">
              Ready to bring your vision to life? Let's talk.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            {/* Form Group: Name */}
            <div className="mb-4">
              <label htmlFor="name" className="text-xs text-gray-500">
                Your name*
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full bg-white border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } p-3 text-brand-dark focus:outline-none focus:border-brand-orange`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Form Group: Email */}
            <div className="mb-4">
              <label htmlFor="email" className="text-xs text-gray-500">
                Your email*
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full bg-white border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } p-3 text-brand-dark focus:outline-none focus:border-brand-orange`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Form Group: Phone */}
            <div className="mb-4">
              <label htmlFor="phone" className="text-xs text-gray-500">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white border border-gray-300 p-3 text-brand-dark focus:outline-none focus:border-brand-orange"
              />
            </div>

            {/* Form Group: Message */}
            <div className="mb-6">
              <label htmlFor="message" className="text-xs text-gray-500">
                Your message*
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                className={`w-full bg-white border ${
                  errors.message ? "border-red-500" : "border-gray-300"
                } p-3 text-brand-dark focus:outline-none focus:border-brand-orange`}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button & Status Message */}
            <div className="flex items-center justify-start gap-6">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-brand-orange text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Submitting..." : "Submit"}
              </button>

              {status === "success" && (
                <p className="text-green-600 font-bold">Form Submitted</p>
              )}
              {status === "error" && (
                <p className="text-red-600 font-bold">{apiError}</p>
              )}
            </div>
          </form>

          {/* Contact Info (below the form) */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-8">
            <p className="font-bold text-brand-orange">
              vernita@varnanfilms.co.in
            </p>
            <p className="font-bold text-brand-orange">+91 98736 84567</p>
          </div>
        </div>
      </div>
    </section>
  );
}
