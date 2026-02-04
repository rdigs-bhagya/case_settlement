"use client";
import { useEffect, useState } from "react";

export default function SendMailPage() {
  const [formData, setFormData] = useState({
    toEmail: "",
    websiteLink: "",
  });

  const [links, setLinks] = useState<string[]>([]);
  const [status, setStatus] = useState("");

  // ------------------------------------
  // LOAD ALLOWED LINKS FROM BACKEND
  // ------------------------------------
  useEffect(() => {
    fetch("https://case-9w55.onrender.com/sendMail/links")
      .then((res) => res.json())
      .then((data) => setLinks(data));
  }, []);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ------------------------------------
  // SEND MAIL
  // ------------------------------------
  const sendEmail = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");

    if (!formData.toEmail.includes("@")) {
      setStatus("❌ Invalid Email Address");
      setTimeout(() => setStatus(""), 3000);
      return;
    }

    const res = await fetch("https://rm97455zj6.execute-api.us-east-1.amazonaws.com/dev/api/v1/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!res.ok) {
      setStatus("❌ " + data.message);
    } else {
      setStatus("✅ " + data.message);
    }

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 shadow rounded relative">

      {/* Alert */}
      {status && (
        <div
          className={`fixed top-5 right-5 px-4 py-3 rounded shadow-lg text-white ${
            status.includes("❌") ? "bg-red-600" : "bg-green-600"
          }`}
        >
          {status}
        </div>
      )}

      <h2 className="text-2xl font-bold mb-4 text-center">Send Email</h2>

      <form onSubmit={sendEmail}>

        {/* SEND TO */}
        <label className="font-semibold">Send To (User Email)</label>
        <input
          type="email"
          name="toEmail"
          placeholder="Enter user email"
          className="w-full p-2 border rounded mb-4"
          required
          onChange={handleChange}
        />

        {/* WEBSITE LINK */}
        <label className="font-semibold">Select Website Link</label>
        <select
          name="websiteLink"
          className="w-full p-2 border rounded mb-4"
          required
          onChange={handleChange}
        >
          <option value="">-- Select Website Link --</option>
          {links.map((link) => (
            <option key={link} value={link}>
              {link}
            </option>
          ))}
        </select>

        <button className="w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700">
          Send Email
        </button>
      </form>
    </div>
  );
}
