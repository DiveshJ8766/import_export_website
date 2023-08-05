import React from "react";
import { motion } from 'framer-motion';


const VideoSection = () => {

  return (
    <section className="bg-gray-100 dark:bg-gray-900" >
      
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Watch Our Video
            </h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
            Discover the world of global trade and how our platform can streamline your international operations. From connecting you to a network of trusted suppliers and buyers to optimizing your supply chain and boosting efficiency, our website empowers you to expand your business globally. Watch our video to learn more and embark on a journey towards success in the global marketplace.
            </p>
          </motion.div
          >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}>
          <iframe style={{borderRadius:"10px"}} className=" w-full h-56 md:h-72 lg:h-80" src="https://www.youtube.com/embed/q5UWVgxt3gk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
