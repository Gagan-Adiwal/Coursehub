// src/components/Footer.jsx
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">

        <div>
          <h2 className="text-lg font-bold mb-2">CourseHub</h2>
          <p className="text-gray-400">
            Learn anytime, anywhere. Boost your skills with our online courses.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#courses">Courses</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition"
              aria-label="Facebook"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              className="text-sky-500 hover:text-sky-700 transition"
              aria-label="Twitter"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-blue-700 hover:text-blue-900 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

      </div>
      <div className="text-center py-4 border-t border-gray-700 text-gray-400">
        © {new Date().getFullYear()} CourseHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
