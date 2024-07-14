"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const skills = [
  {
    num: '01',
    title: "Web Development",
    description: "Building responsive and dynamic websites using modern web technologies.",
     href: "/projects"
  },
  {
    num: '02',
    title: "Data Analytics",
    description: "Analyzing data to provide insights and inform business decisions.",
    href: "/data-analytics"
  }
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
          }}
          className="grid grid-col-2 md:grid-cols-2 gap-[60px]"
        >
          {skills.map((skill, index) => (
            <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent
                group-hover:text-outline-hover transition-all duration-500">{skill.num}</div>
                <Link href={skill.href} className="w-[70px] h-[70px] rounded-full bg-white
                group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:rotate-45">
                  
                    <BsArrowDownRight  className="text-primary text-3xl"/>
                  
                </Link>
                
              </div>
                <h2 className="text-[42px] font-bold leading-none text-white
                group-hover:text-accent transition-all duration-500" >{skill.title}</h2>
                <p className="text-[19px] font-bold leading-none text-white
                group-hover:text-accent transition-all duration-500">{skill.description}</p>
                <div className="border-b-2 border-lime-400 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
