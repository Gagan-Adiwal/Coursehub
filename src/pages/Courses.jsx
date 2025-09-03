// src/pages/Courses.jsx
import React, { useEffect, useRef } from "react";
import { FaReact, FaJsSquare, FaPython, FaLaptopCode } from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "React for Beginners",
    desc: "Learn the basics of React with projects and step-by-step guidance.",
    icon: <FaReact className="text-blue-500 text-5xl mx-auto mb-4" />,
    img: "https://www.shutterstock.com/shutterstock/videos/1086452339/thumb/12.jpg?ip=x480",
  },
  {
    id: 2,
    title: "JavaScript Essentials",
    desc: "Master JavaScript fundamentals and problem-solving techniques.",
    icon: <FaJsSquare className="text-yellow-500 text-5xl mx-auto mb-4" />,
    img: "https://strapi-images-aws-s3.s3.us-west-2.amazonaws.com/javascript_essential_163f7c6aff.png",
  },
  {
    id: 3,
    title: "Full-Stack Development (MERN)",
    desc: "Learn to build complete web apps using MongoDB, Express, React, and Node.js.",
    icon: <FaLaptopCode className="text-green-600 text-5xl mx-auto mb-4" />,
    img: "https://grras.com/files/sgbaxnrabaysf8ugrxu6/blog_image_mern_stck.jpeg?s=940x350",
  },
  {
    id: 4,
    title: "Python for Data Science",
    desc: "Analyze data and build AI/ML models with Python.",
    icon: <FaPython className="text-indigo-500 text-5xl mx-auto mb-4" />,
    img: "https://appsbd.com/wp-content/uploads/2021/08/data-science-with-python.png",
  },
];

const Courses = () => {
  const formRefs = useRef([]);

  useEffect(() => {
    formRefs.current.forEach((form) => {
      if (form) {
        // Clear previous buttons
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
    <div className="max-w-7xl mx-auto px-6">
      <h1 className="text-3xl font-bold text-center mb-10">Available Courses</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, index) => (
          <div
            key={course.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col"
          >
            <img
              src={course.img}
              alt={course.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-6 flex flex-col flex-1 justify-between">
              {course.icon}
              <h2 className="text-xl font-semibold mb-2 text-center">
                {course.title}
              </h2>
              <p className="text-gray-600 mb-4 text-center">{course.desc}</p>
              <p className="text-lg font-bold text-blue-600 mb-4 text-center">
                ₹599
              </p>

              {/* Razorpay Button */}
              <div className="flex justify-center">
                <form ref={(el) => (formRefs.current[index] = el)}></form>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
