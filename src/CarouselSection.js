import { Carousel } from 'flowbite-react';
import { motion } from 'framer-motion';
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CarouselSection() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className='bg-gray-100 dark:bg-gray-900 p-2' ref={ref}>
      <div className="text-center mt-4"
        >
        <motion.h2 
        className="mb-1 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" 
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s"
        }}>
          Our Images
        </motion.h2>
      </div>
        <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
            <Carousel className='w-full h-56 md:h-80 lg:h-96 p-4'>
                <motion.img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="..."/>
                <motion.img src="https://images.unsplash.com/photo-1617952739760-1dcae19a1d93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="..."/>
                <motion.img src="https://images.unsplash.com/photo-1617952739858-28043cecdae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1wb3J0JTIwZXhwb3J0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="..."/>
                <motion.img src="https://images.unsplash.com/photo-1598193957036-67845e5ead00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1wb3J0JTIwZXhwb3J0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="..."/>
                <motion.img src="https://images.unsplash.com/photo-1597139416651-bf9a3b3e9014?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYW5zcG9ydGF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="..."/>
            </Carousel>
        </div>
    </div>
  )
}


