import React from "react";

// Blog Data
const blogData = [
  {
    title: "Te nulla oportere reprimique his dolorum",
    date: "June 1, 2020",
    views: "2.1K views",
    imgSrc: "https://source.unsplash.com/200x200/?fashion?1",
    category: "Convenire",
  },
  {
    title: "Te nulla oportere reprimique his dolorum",
    date: "June 2, 2020",
    views: "2.2K views",
    imgSrc: "https://source.unsplash.com/200x200/?fashion?2",
    category: "Convenire",
  },
  {
    title: "Te nulla oportere reprimique his dolorum",
    date: "June 3, 2020",
    views: "2.3K views",
    imgSrc: "https://source.unsplash.com/200x200/?fashion?3",
    category: "Convenire",
  },
  {
    title: "Te nulla oportere reprimique his dolorum",
    date: "June 4, 2020",
    views: "2.4K views",
    imgSrc: "https://source.unsplash.com/200x200/?fashion?4",
    category: "Convenire",
  },
];

// Resources Component
const Resources = () => {
  return (
    <section className="px-6 lg:px-12 py-20 ">
      {/* Section Heading */}
      <h1 className="text-3xl font-bold text-secondary sm:text-5xl text-center mb-8">
        Resources
      </h1>

      <article className="py-6 sm:py-12">
        <div className="container mx-auto space-y-8">
          {/* Subheading */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-700">
              Partem reprimique an pro
            </h2>
            <p className="text-gray-600 text-sm max-w-md mx-auto">
              Qualisqu error usu at, duo te agam solution mucius
            </p>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {blogData.map((blog, index) => (
              <div
                key={index}
                className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg"
              >
                {/* Blog Image */}
                <img
                  src={blog.imgSrc}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />

                {/* Blog Content */}
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {blog.title}
                  </h3>

                  <div className="text-gray-600 text-sm flex justify-between mt-2">
                    <p>{blog.date}</p>
                    <p>{blog.views}</p>
                    <p>{blog.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Resources;
