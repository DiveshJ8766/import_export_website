import React from 'react'
import { Accordion } from 'flowbite-react'
import { motion } from 'framer-motion';
import { useInView } from "framer-motion";
import { useRef } from "react";

const AccordionSection = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div className="bg-white dark:bg-gray-900" ref={ref}>
      <div className="text-center mt-4"
        >
        <motion.h2 
        className="mb-1 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" 
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
        }}>
          Frequently Asked Question (FAQs)
        </motion.h2>
      </div>
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
      <Accordion>
      <Accordion.Panel>
        <Accordion.Title className='bg-gray-100'>
        How do I get started with importing or exporting goods?
        </Accordion.Title>
        <Accordion.Content className='bg-white'>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Starting with import or export requires understanding the regulations, documentation, and logistics involved. Our website provides comprehensive guides and resources to help you navigate the process smoothly. You can also reach out to our customer support team for personalized assistance.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='bg-gray-100'>
        What are the payment options available for international transactions?
        </Accordion.Title>
        <Accordion.Content className='bg-white'>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Our import and export website offers secure payment options such as bank transfers, letters of credit, and online payment gateways. We prioritize the safety and reliability of financial transactions to ensure a smooth and trustworthy trade experience.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='bg-gray-100'>
        How can I track my shipments?
        </Accordion.Title>
        <Accordion.Content className='bg-white'>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Our website provides real-time shipment tracking services. Once your goods are shipped, you will receive a tracking number that allows you to monitor the progress of your shipment from origin to destination. Simply enter the tracking number on our platform to access the latest updates.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='bg-gray-100'>
        What documents are required for customs clearance?
        </Accordion.Title>
        <Accordion.Content className='bg-white'>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Customs clearance typically requires documents such as commercial invoices, packing lists, bill of lading/airway bill, and certificates of origin. Our website offers a comprehensive documentation management system, allowing you to generate, store, and manage all necessary paperwork efficiently.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='bg-gray-100'>
        Can I import or export restricted or controlled goods?
        </Accordion.Title>
        <Accordion.Content className='bg-white'>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Import and export regulations vary depending on the country and the nature of the goods. It is important to familiarize yourself with the specific regulations and restrictions imposed by the relevant authorities. Our website provides guidance on navigating these regulations, but it is advisable to consult with local customs authorities or legal experts for precise information.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='bg-gray-100'>
        How can I ensure compliance with import and export regulations?
        </Accordion.Title>
        <Accordion.Content className='bg-white'>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Our website keeps you informed about the latest import and export regulations and provides resources to help you understand and comply with them. It is essential to stay updated on any changes in regulations and work closely with customs authorities to ensure full compliance.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='bg-gray-100'>
        Can I get assistance with customs duties and taxes?
        </Accordion.Title>
        <Accordion.Content className='bg-white'>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Our import and export website provides information on customs duties and taxes as per the respective countries' regulations. However, specific calculations and detailed guidance may vary. It is advisable to consult with customs brokers or tax professionals for accurate assessments and advice related to duties and taxes.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
      <Accordion.Panel>
        <Accordion.Title className='bg-gray-100'>
        How can I find reliable suppliers or buyers?
        </Accordion.Title>
        <Accordion.Content className='bg-white'>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
          Our website offers a trusted platform where you can connect with verified suppliers and buyers worldwide. Utilize our advanced search filters, user reviews, and ratings to identify reputable trading partners and establish fruitful business relationships.
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
      </div>
    </div>
  )
}

export default AccordionSection

