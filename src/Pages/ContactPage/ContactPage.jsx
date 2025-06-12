import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.message) newErrors.message = "Message is required";
    if (!formData.terms) newErrors.terms = "You must accept the terms";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Message sent successfully!");
      console.log("Form Submitted:", formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        terms: false,
      });
    }
  };

  return (
    <div className="min-h-screen bg-white px-4 py-16 flex flex-col items-center  max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-4">Say Hello to Us</h2>
      <p className="text-center max-w-xl mb-12 text-gray-700">
        Do you have any questions? Are you ready to reduce cost and create new revenue? Or you simply want to say hi? Drop us a message.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 space-y-10"
      >
        {[
          { name: "name", label: "What is your name? *", type: "text" },
          { name: "email", label: "What is your email? *", type: "email" },
          { name: "phone", label: "What is your phone number?", type: "text" },
          { name: "company", label: "What is your company?", type: "text" },
        ].map((field) => (
          <div key={field.name} className="relative">
            <input
              type={field.type}
              name={field.name}
              id={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder=" "
              className={`peer w-full border-b-2 py-2 text-gray-700 placeholder-transparent focus:outline-none ${
                errors[field.name] ? "border-red-500" : "border-gray-300 focus:border-red-500"
              }`}
            />
            <label
              htmlFor={field.name}
              className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-red-500"
            >
              {field.label}
            </label>
            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">{errors[field.name]}</p>
            )}
          </div>
        ))}

        {/* Message */}
        <div className="col-span-1 md:col-span-2 relative">
          <textarea
            name="message"
            id="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder=" "
            className={`peer w-full border-b-2 py-2 text-gray-700 placeholder-transparent focus:outline-none ${
              errors.message ? "border-red-500" : "border-gray-300 focus:border-red-500"
            }`}
          ></textarea>
          <label
            htmlFor="message"
            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-red-500"
          >
            Write your message here
          </label>
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        </div>

        {/* Checkbox and Submit */}
        <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <label className="flex items-start text-sm text-gray-600 space-x-2">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mt-1"
            />
            <span>
              I have read and accept the Terms of{" "}
              <a href="#" className="text-red-500 underline">
                Service & Privacy Policy *
              </a>
            </span>
          </label>
          {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}

          <button
            type="submit"
            className="mt-2 md:mt-0 bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
