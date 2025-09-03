// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react"; // Added GraduationCap

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo with Icon */}
        <div className="flex items-center space-x-2">
          <GraduationCap className="text-blue-600" size={28} />
          <h1 className="text-2xl font-bold text-blue-600">CourseHub</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><a href="/" className="hover:text-blue-600 flex items-center">Home</a></li>
          <li><a href="/courses" className="hover:text-blue-600 flex items-center">Courses</a></li>
          <li><a href="/about" className="hover:text-blue-600 flex items-center">About</a></li>
          <li><a href="/contact" className="hover:text-blue-600 flex items-center">Contact</a></li>
        </ul>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-lg px-4 py-4 space-y-4">
          <li><a href="/" className="block">Home</a></li>
          <li><a href="/courses" className="block">Courses</a></li>
          <li><a href="/about" className="block">About</a></li>
          <li><a href="/contact" className="block">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
