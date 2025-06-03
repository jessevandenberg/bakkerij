"use client";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormData = { name: "", email: "", message: "" };

const ContactPage = () => {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (data: FormData) => {
    const newErrors: Partial<FormData> = {};
    if (!data.name.trim()) newErrors.name = "Naam is verplicht.";
    if (!data.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) newErrors.email = "Voer een geldig e-mailadres in.";
    if (!data.message.trim()) newErrors.message = "Bericht is verplicht.";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
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
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="font-serif text-4xl font-bold text-center mb-12 text-gray-800">
        Neem Contact Op
      </h1>
      {submitted ? (
        <div 
          className="bg-amber-50 border border-amber-200 text-amber-800 p-6 rounded-lg text-center mb-8 animate-fade-in" 
          role="status"
        >
          <p className="text-lg">Bedankt voor uw bericht! We nemen zo spoedig mogelijk contact met u op.</p>
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit} 
          className="bg-white shadow-sm rounded-lg p-8 space-y-6 border border-gray-100"
          noValidate
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Naam
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
              value={form.name}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mailadres
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
              value={form.email}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Bericht
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
              value={form.message}
              onChange={handleChange}
              required
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="text-red-600 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-amber-700 text-white font-medium py-3 px-6 rounded-md hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-colors duration-200"
          >
            Verstuur Bericht
          </button>
        </form>
      )}
    </main>
  );
};

export default ContactPage; 