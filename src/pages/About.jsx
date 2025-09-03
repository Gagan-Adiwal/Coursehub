// src/pages/About.jsx
import React from "react";
import { FaUsers, FaBullseye, FaChalkboardTeacher } from "react-icons/fa";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Intro Section */}
      <section className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold">CourseHub</span>!  
          We’re passionate about empowering learners worldwide with
          affordable, high-quality online courses that help you build
          practical skills and grow your career.
        </p>
      </section>

      {/* Mission Section */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <img
          src="https://t3.ftcdn.net/jpg/05/23/63/38/360_F_523633866_Hm1H8jiHUuvHEwEvZKsC9jZwLEYdM3Bz.jpg"
          alt="Mission"
          className="rounded-lg shadow-lg"
        />
        <div>
          <FaBullseye className="text-blue-600 text-5xl mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to make learning accessible to everyone.
            Whether you’re a beginner or a professional, our courses are designed
            to enhance your skills with real-world projects and expert mentors.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-8">Meet Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Instructor"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-gray-500">React Instructor</p>
            <FaChalkboardTeacher className="text-blue-500 text-2xl mx-auto mt-2" />
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Instructor"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Jane Smith</h3>
            <p className="text-gray-500">Full-Stack Developer</p>
            <FaUsers className="text-green-500 text-2xl mx-auto mt-2" />
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <img
              src="https://randomuser.me/api/portraits/men/76.jpg"
              alt="Instructor"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Alex Johnson</h3>
            <p className="text-gray-500">Data Science Mentor</p>
            <FaUsers className="text-purple-500 text-2xl mx-auto mt-2" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
