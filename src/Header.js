import React from "react";
import { motion } from "framer-motion"

const Header = () => {
  return (
    <motion.section
    className="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-gray-600 bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <motion.h1 
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          We invest in the world’s potential
        </motion.h1>
        <motion.p 
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
          className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        We are a leading provider of international trade solutions, specializing in the import and export of goods and services worldwide. Our team of experts has years of experience in the industry and is dedicated to helping businesses of all sizes succeed in the global market.
        </motion.p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <motion.a
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
           transition={{ duration: 0.1 }}
            href="#"
            className="button inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Get started
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
           transition={{ duration: 0.1 }}
            className="button inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            Learn more
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Header;
