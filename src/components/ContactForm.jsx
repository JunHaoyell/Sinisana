import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xvoennjw");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <form
      id="contactForm"
      action="https://formspree.io/f/xvoennjw"
      className="space-y-8 p-10"
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className="space-y-2">
        <label htmlFor="name" className="block font-semibold text-xl">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full p-4 border-none placeholder-red bg-gray-100 rounded"
          placeholder="Full Name *"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="block font-semibold text-xl">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full p-4 border-none placeholder-red bg-gray-100 rounded"
          placeholder="Email address *"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="company" className="block font-semibold text-xl">
          Company Name (Optional)
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full p-4 border-none placeholder-red bg-gray-100 rounded"
          placeholder="Your company name"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="industry" className="block font-semibold text-xl">
          Industries
        </label>
        <select
          id="industry"
          name="industry"
          className="w-full p-4 border-none placeholder-red bg-gray-100 rounded"
          required
        >
          <option value="Food Manufacturing">Food Manufacturing</option>
          <option value="Halal Production">Halal Production</option>
          <option value="Aquaculture">Aquaculture</option>
          <option value="Agriculture">Agriculture</option>
          <option value="Plantations">Plantations</option>
          <option value="Labor-Intensive Manufacturing">
            Labor-Intensive Manufacturing
          </option>
          <option value="Others">Others...</option>
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="comments" className="block font-semibold text-xl">
          Comments
        </label>
        <textarea
          id="comments"
          name="comments"
          className="w-full p-4 border-none placeholder-red bg-gray-100 rounded"
          rows="4"
          placeholder="Your comments"
        />
      </div>
      <div className="text-right">
        <button
          type="submit"
          className="bg-primarylogoColor hover:bg-white hover:text-primarylogoColor hover:border-primarylogoColor hover:border text-white px-4 py-2 rounded"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
