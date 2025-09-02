'use client';

import { useState } from 'react';
import { Phone, Mail } from 'lucide-react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' }); // clear form
  };

  return (
    <section className="relative bg-gray-50 py-10">
      {/* Decorative background strip */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 -z-10"></div>

      <div className="container mx-auto px-6 lg:px-16 mt-[95px]">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Text */}
          <div className="space-y-8">
            <h2 className="text-4xl font-extrabold text-primary">
              Reach Our Expert Team
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              If you have any questions, concerns, or inquiries, please don't hesitate to get in touch with us.
              Our dedicated team is here to assist you and provide the support you need. Reach out to us using the contact details below:
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-white shadow-md p-5 rounded-xl hover:shadow-lg transition">
                <Phone className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Quickly Call Us</h4>
                  <p className="text-primary font-medium">+1 323 843 5995</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white shadow-md p-5 rounded-xl hover:shadow-lg transition">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">Drop a Message on</h4>
                  <p className="text-primary font-medium">contact@legalclaimassistance.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-9 px-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-9 px-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full h-15 px-4 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
