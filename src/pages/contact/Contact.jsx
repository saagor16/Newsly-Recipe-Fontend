import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form validation
  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!formData.message.trim())
      newErrors.message = "Message cannot be empty.";
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoading(true);
    console.log("Form Submitted:", formData);

    // Simulate sending form data
    setTimeout(() => {
      setLoading(false);
      alert("Your message has been sent!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
      setErrors({});
    }, 2000);
  };

  return (
    <section className="mb-10 text-black mt-14 flex items-center justify-center">
      <div className="w-full max-w-4xl px-6 py-12 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-secondary sm:text-5xl text-center mb-8">
          Contact
        </h1>
        <div className="flex flex-col items-center">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-800">
              Chat with Us
            </h2>
            <p className="mt-2 text-gray-500">We’d love to hear from you.</p>
            <div className="mt-4 space-y-2">
              <p>
                Email:{" "}
                <a
                  href="mailto:hello@merakiui.com"
                  className="text-blue-500 hover:underline"
                >
                  hello@merakiui.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+15550000000"
                  className="text-blue-500 hover:underline"
                >
                  +1 (555) 000-0000
                </a>
              </p>
            </div>
          </div>

          <div className="w-full max-w-md">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label className="block mb-2 text-sm">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="block mb-2 text-sm">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.lastName}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="block mb-2 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label className="block mb-2 text-sm">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-secondary"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full mt-4 px-4 py-2 text-white bg-secondary rounded hover:bg-secondary-dark disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
