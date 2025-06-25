"use client";
import { useState } from "react";

const initialForm = { name: "", email: "", message: "" };

const ContactPage = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<any>({});

  const validate = (data: any) => {
    const newErrors: any = {};
    if (!data.name.trim()) newErrors.name = "Naam is verplicht.";
    if (!data.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) newErrors.email = "Voer een geldig e-mailadres in.";
    if (!data.message.trim()) newErrors.message = "Bericht is verplicht.";
    return newErrors;
  };

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <main className="relative max-w-2xl mx-auto px-4 py-12 min-h-screen">
      <h1 className="font-playfair text-5xl font-bold text-center mb-12 text-white drop-shadow-lg">
        Neem Contact Op
      </h1>
      {submitted ? (
        <div 
          className="bg-white border border-gold-200 text-burgundy-100 p-8 rounded-lg text-center mb-8 animate-fade-in shadow-lg" 
          role="status"
        >
          <p className="font-cormorant text-xl">Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.</p>
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit} 
          className="bg-white shadow-lg rounded-lg p-8 space-y-6 border border-gold-100"
          noValidate
        >
          <div>
            <label htmlFor="name" className="block font-cormorant text-lg text-burgundy-100 mb-2">
              Naam
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className="w-full px-4 py-3 border border-gold-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-300 focus:border-transparent transition-colors duration-200 bg-white"
              value={form.name}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-burgundy-100 text-sm mt-1 font-cormorant">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block font-cormorant text-lg text-burgundy-100 mb-2">
              E-mailadres
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="w-full px-4 py-3 border border-gold-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-300 focus:border-transparent transition-colors duration-200 bg-white"
              value={form.email}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-burgundy-100 text-sm mt-1 font-cormorant">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block font-cormorant text-lg text-burgundy-100 mb-2">
              Bericht
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 border border-gold-100 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-300 focus:border-transparent transition-colors duration-200 bg-white"
              value={form.message}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-burgundy-100 text-sm mt-1 font-cormorant">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-burgundy-100 text-black font-cormorant text-lg py-4 px-6 rounded-md hover:bg-burgundy-200 focus:outline-none focus:ring-2 focus:ring-gold-300 focus:ring-offset-2 transition-colors duration-200"
          >
            Verstuur Bericht
          </button>
        </form>
      )}
    </main>
  );
};

export default ContactPage; 