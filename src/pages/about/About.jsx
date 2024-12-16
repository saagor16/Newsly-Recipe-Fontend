import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const About = () => {
  return (
    <section className="px-6 lg:px-12 py-20">
      {/* Section Heading */}
      <h1 className="text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed">
        About
      </h1>
      <p className="text-center sm:w-1/2 mx-auto mb-20 text-lg text-gray-600 leading-relaxed">
        We are a passionate team dedicated to delivering innovative web solutions, 
        turning your ideas into beautifully crafted digital experiences.
      </p>

      {/* Hero Section */}
      <article
        className="relative bg-[url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80')] 
        bg-cover bg-center bg-no-repeat rounded-lg shadow-lg overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/80 sm:bg-transparent sm:bg-gradient-to-r from-white/95 to-white/25"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-center sm:text-left">
            <h2 className="text-4xl font-bold text-gray-800 sm:text-5xl">
              Transforming Ideas Into <br />
              <span className="block font-extrabold text-yellow-600 mt-2">
                Exceptional Web Experiences
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-700">
              Our mission is to create dynamic and user-friendly applications 
              that meet your business goals and delight your audience.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition">
                Get Started
              </button>
              <button className="bg-white border border-yellow-600 text-yellow-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-yellow-600 hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Quote Section */}
      <div className="container mx-auto px-6 py-40">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white shadow-2xl rounded-lg p-8">
          <div className="w-full md:w-8/12 text-2xl text-gray-700 leading-relaxed">
            <FaQuoteLeft className="text-yellow-600 float-left mr-4"></FaQuoteLeft>
            <p>
              “We are a team of passionate developers with countless hours of coding experience, 
              committed to building impactful and professional digital solutions for your business.”
            </p>
          </div>
          <div className="mt-6 md:mt-0 relative shadow-md font-medium py-5 px-6 text-white bg-yellow-600 hover:bg-yellow-500 rounded-lg text-center cursor-pointer w-48">
            <span className="absolute h-3 w-3 right-0 top-0 animate-ping inline-flex rounded-full bg-yellow-600"></span>
            Call Now
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
