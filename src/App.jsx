import React from "react";
import { motion } from "framer-motion";
import profileImg from "./assets/a.JPG";
import emsImage from './assets/e1.PNG';
import ecommerceImage from "./assets/c1.PNG";
import vueEcomImage from "./assets/vue1.PNG";
import quizImage from "./assets/q1.PNG";
import careerImage from "./assets/a.PNG";
import calculatorImage from "./assets/ca.PNG";
import { FaGithub, FaExternalLinkAlt, FaLinkedin } from "react-icons/fa";
import cvFile from "./assets/athumani-mfaume-cv.pdf";
import { Typewriter } from "react-simple-typewriter";
import emailjs from "emailjs-com";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_whmngbh", // Replace with your EmailJS service ID
      "template_we0snyt", // Replace with your EmailJS template ID
      e.target,
      "zlR6c3Z3_xpU-eFig" // Replace with your EmailJS user ID or public key
    )
    .then(
      (result) => {
        alert("Message sent! Thank you for reaching out.");
        e.target.reset(); // Clear form after sending
      },
      (error) => {
        alert("Oops! Something went wrong. Please try again.");
        console.error(error.text);
      }
    );
};


// SectionHeader component for consistent section titles with animation
function SectionHeader({ title, icon }) {
  return (
    <motion.div 
      className="mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-5xl font-extrabold text-indigo-400 flex justify-center items-center gap-3 select-none">
        {icon && <span className="text-4xl">{icon}</span>}
        {title}
      </h3>
      <div className="mt-2 mx-auto w-24 h-1 bg-indigo-400 rounded" />
    </motion.div>
  );
}

const projects = [
  {
    title: "Employee Management System",
    description:
      "A full-featured system built with Laravel and Velzon template. It manages employee records, handles leave requests, and generates detailed reports. Designed with efficiency and clean UI in mind.",
    github: "https://github.com/athumaniMfaume/employees-management-system",
    live: null,
    image: emsImage,
  },
  {
    title: "Laravel eCommerce Platform",
    description:
      "A full-featured Laravel-powered eCommerce system with an admin panel to manage users, products, and orders. Customers can browse and purchase products, with Stripe integrated (not fully configured).",
    github: "https://github.com/athumaniMfaume/ecommerce-project",
    image: ecommerceImage,
  },
  {
    title: "Vue eCommerce Frontend",
    description:
      "A modern and responsive eCommerce frontend built with Vue.js. It displays products and supports cart functionality. Fully deployed but not connected to a backend.",
    github: "https://github.com/athumaniMfaume/vue-ecommerce",
    live: "https://vuecommercesystem.netlify.app/",
    image: vueEcomImage,
  },
  {
    title: "Career Path Quiz",
    description:
      "A JavaScript-based interactive quiz that recommends suitable career paths for students based on their answers. Clean UI with dynamic question flow.",
    github: "https://github.com/athumaniMfaume/quiz-career",
    live: "https://studentcareerquiz.netlify.app/",
    image: quizImage,
  },
  {
    title: "Career Guidance System",
    description:
      "A full-stack system (Laravel + Vue) that helps students explore academic and career paths. Admins manage schools, subjects, programs, and job data. Features authentication and dynamic search.",
    github: "https://github.com/athumaniMfaume/career-frontend",
    live: "https://studentcareers.netlify.app/",
    image: careerImage,
  },
  {
    title: "JavaScript Calculator",
    description:
      "A responsive calculator built with vanilla JavaScript that allows users to perform basic arithmetic operations and view instant results in a clean UI.",
    github: "https://github.com/athumaniMfaume/calculator",
    live: "https://athumanicalculator.netlify.app/",
    image: calculatorImage,
  },
];

export default function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">

      {/* Navbar */}
<nav className="fixed w-full top-0 left-0 z-50 bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-800 bg-opacity-90 backdrop-blur-lg shadow-lg">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    
    {/* Logo + Tag */}
    <div className="flex items-center gap-3">
      <h1 className="text-3xl font-extrabold text-indigo-400 tracking-wide hover:text-indigo-300 transition-all duration-300 cursor-pointer select-none">
        Athumani Mfaume
      </h1>
      <span className="hidden sm:inline-block text-xs font-semibold text-white bg-indigo-600/20 border border-indigo-500 px-3 py-1 rounded-full shadow-sm tracking-wider select-none">
        Full Stack Developer
      </span>
    </div>

    {/* Links */}
    <ul className="hidden md:flex space-x-8 text-sm lg:text-base font-semibold text-gray-300">
      {["about", "projects", "contact"].map((section) => (
        <li key={section} className="group relative">
          <a
            href={`#${section}`}
            className="hover:text-indigo-400 transition-all duration-300"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
      ))}
    </ul>

    {/* Social Icons */}
    <div className="flex items-center gap-5 text-xl text-gray-300">
      <a
        href="https://github.com/athumaniMfaume"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-400 hover:scale-110 transition-all duration-300"
        title="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/athumani-mfaume-jr-204bb81b0/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-indigo-400 hover:scale-110 transition-all duration-300"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>
    </div>
  </div>
</nav>



      {/* Hero Section */}
      <motion.header 
        className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center py-20 gap-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex-1 text-center md:text-left">
<h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-wide text-white select-none text-center md:text-left">
  <Typewriter
    words={["Hi, I'm Athumani Mfaume — Full Stack Developer"]}
    loop={1}
    cursor
    cursorStyle="|"
    typeSpeed={60}
    deleteSpeed={0}
    delaySpeed={1500}
  />
</h1>



<p className="text-gray-400 max-w-xl mx-auto md:mx-0 mb-8 text-lg leading-relaxed">
  I build scalable, performant, and user-friendly applications using technologies like React, Vue, Laravel, Flutter, and more.
</p>

          <a
            href={cvFile}
            download
            className="inline-block bg-indigo-600 hover:bg-indigo-700 px-10 py-4 rounded-lg text-lg font-semibold shadow-lg transition transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-400"
            aria-label="Download my CV"
          >
            Download CV
          </a>
        </div>
        <div className="flex-1">
          <img
            src={profileImg}
            alt="Athumani Mfaume"
            className="rounded-full w-72 mx-auto md:mx-0 shadow-2xl border-8 border-indigo-500"
            style={{ maxWidth: "280px" }}
          />
        </div>
      </motion.header>

      {/* About Section */}
      <motion.section
        id="about"
        className="container mx-auto px-6 py-20 max-w-5xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <SectionHeader title="About Me" icon="👨‍💻" />
        <div className="text-center text-gray-300 text-lg leading-relaxed space-y-8 max-w-4xl mx-auto select-text">
          <p>
            I'm a <span className="text-indigo-400 font-semibold">Full Stack Developer</span> based in Dar es Salaam, Tanzania,
            passionate about crafting high-quality, scalable, and performant web and mobile applications.
          </p>
          <p>My expertise spans a broad spectrum of modern technologies, including:</p>
          <ul className="list-disc list-inside text-indigo-400 font-medium space-y-2 max-w-md mx-auto">
            <li><span className="text-gray-300">Backend:</span> Laravel, Spring Boot</li>
            <li><span className="text-gray-300">Frontend:</span> React, Vue.js, Next.js, Tailwind CSS</li>
            <li><span className="text-gray-300">Mobile:</span> Flutter, React Native, Dart</li>
            <li><span className="text-gray-300">Other:</span> RESTful APIs, Database Management, Agile Development</li>
          </ul>
          <p>
            I enjoy turning complex problems into elegant, user-friendly solutions that drive real value. When I’m not coding,
            I love analyzing football games, exploring emerging technologies, and constantly sharpening my skills to stay ahead
            in this fast-paced industry.
          </p>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-900 py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <SectionHeader title="Projects" icon="🚀" />

          <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map(({ title, description, github, live, image }, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-500/50 transition-shadow duration-300 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <img src={image} alt={title} className="w-full h-52 object-cover" />

                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-2xl font-semibold mb-3 text-indigo-400">{title}</h4>
                  <p className="text-gray-400 flex-grow">{description}</p>

                  <div className="mt-6 flex space-x-6 justify-center md:justify-start">
                    {live && (
                      <a
                        href={live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-indigo-400 hover:text-indigo-600 transition"
                        aria-label={`Live demo of ${title}`}
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </a>
                    )}

                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-indigo-400 hover:text-indigo-600 transition"
                        aria-label={`GitHub repository of ${title}`}
                      >
                        <FaGithub />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader title="Get In Touch" icon="📬" />
          <p className="text-gray-400 text-lg mb-10">
            Whether you have a question or just want to say hi, I’ll try my best to get back to you!
          </p>
        </div>

        <form
onSubmit={sendEmail}
          className="max-w-2xl mx-auto bg-gray-900 rounded-2xl shadow-2xl shadow-indigo-500/10 p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="hidden" name="time" value={new Date().toLocaleString()} />

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                 name="name"
                required
                className="w-full rounded-lg bg-gray-800 border border-gray-700 text-white px-4 py-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="Athumani Mfaume"
                aria-label="Full Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email Address</label>
              <input
                type="email"
                 name="email" 
                required
                className="w-full rounded-lg bg-gray-800 border border-gray-700 text-white px-4 py-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="you@example.com"
                aria-label="Email Address"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
            <textarea
              rows="5"
                name="message" 
              required
              className="w-full rounded-lg bg-gray-800 border border-gray-700 text-white px-4 py-3 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              placeholder="Hi Athumani, I’m interested in working with you..."
              aria-label="Message"
            ></textarea>
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="inline-block w-full md:w-auto bg-indigo-500 hover:bg-indigo-600 transition duration-300 text-white font-semibold px-8 py-3 rounded-lg shadow-md hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-400"
            >
              🚀 Send Message
            </button>
          </div>
        </form>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-500 py-6 text-center text-sm select-none">
        &copy; {new Date().getFullYear()} Athumani Mfaume. All rights reserved.
      </footer>
    </div>
  );
}
