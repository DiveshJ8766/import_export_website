import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import img1 from "./connect_world.svg"
import img2 from "./ship_container.svg"

const CTASection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section className="bg-white dark:bg-gray-900" ref={ref}>
      <div className="text-center mt-4"
        >
        <motion.h2 
        className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" 
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
        }}>
          Why US
        </motion.h2>
      </div>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <motion.div 
            style={{
              transform: isInView ? "none" : "translateX(-200px)",
              opacity: isInView ? 1 : 0,
              transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
            }} 
            className="mt-4 md:mt-0">
          <h4 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Ready to Expand Your Global Reach?
          </h4>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          Whether you are looking to import products from overseas or export your goods to new markets, we offer a wide range of services to meet your needs. From customs clearance and freight forwarding to logistics and supply chain management, we have the expertise to help you navigate the complex world of international trade.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </motion.div>
        <motion.img
          className="w-full animate-bounce dark:hidden"
          src={img1}
          alt="Reach World Image"
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }} 
        />
      </div>
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <motion.img
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }} 
          className="w-full animate-bounce dark:hidden"
          src={img2}
          alt="dashboard image"
        />
        <motion.div
          style={{
            transform: isInView ? "none" : "translateX(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
          }} 
        className="mt-4 md:mt-0">
          <h4 className="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Take Your Business to the Next Level with Our International Trade Solutions
          </h4>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          At our Import-Export Website, we believe in providing our clients with the highest level of service and support. We work closely with our customers to understand their unique needs and develop customized solutions to help them achieve their business goals.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
