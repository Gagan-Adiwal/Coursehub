// src/pages/HomePage.jsx
import React, { useEffect, useRef } from "react";

const HomePage = () => {
  const formRefs = useRef([]);

  useEffect(() => {
    formRefs.current.forEach((form) => {
      if (form) {
        // Remove existing children (avoid duplicate buttons)
        form.innerHTML = "";

        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/payment-button.js";
        script.setAttribute("data-payment_button_id", "pl_RDBovVDdBXYo4S");
        script.async = true;
        form.appendChild(script);
      }
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Master New Skills with Our Courses
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-6">
            Affordable, practical, and industry-ready learning.
          </p>
          <a
            href="#courses"
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg hover:bg-gray-100 transition transform hover:-translate-y-1"
          >
            Browse Courses
          </a>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Our Courses
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["React for Beginners", "JavaScript Essentials", "Full-Stack Development"].map(
            (course, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-xl transition"
              >
                <h3 className="text-xl font-semibold mb-2">{course}</h3>
                <p className="text-gray-600 mb-4">
                  {index === 0
                    ? "Learn React from scratch with hands-on projects."
                    : index === 1
                    ? "Master the fundamentals of JavaScript."
                    : "Build real-world apps using MERN stack."}
                </p>
                <p className="text-lg font-bold text-blue-600 mb-4">₹599</p>

                {/* Razorpay Button */}
                <div className="flex justify-center">
                  <form ref={(el) => (formRefs.current[index] = el)}></form>
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
