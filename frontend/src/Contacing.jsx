import React, { useState } from "react";
import axios from "axios";

const Contacting = () => {
  console.log("Contact component rendered");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    console.log("hello sami");
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("heloo");
    try {
      const res = await axios.post("http://localhost:5000/api/order", formData);
      setStatus(res.data.message || "Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.log("hellosami error");
      const errorMessage =
        error.response?.data?.error ||
        "Something went wrong. Please try again.";
      setStatus(errorMessage);
    }
  };

  return (
    <div className="bg-white relative top-80 mb-72 py-10 px-6 text-black">
      <h3 className="text-2xl font-bold mb-6 text-center">Book Your Order</h3>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="Phone"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Message"
          className="w-full p-2 border rounded h-32"
        />
        <button
          type="submit"
          className="btn bg-yellow-400 text-blue-900 font-semibold px-6 py-2 rounded hover:bg-yellow-500"
        >
          Submit
        </button>
        {status && (
          <p className="text-center mt-4 text-green-600 font-medium">
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default Contacting;
