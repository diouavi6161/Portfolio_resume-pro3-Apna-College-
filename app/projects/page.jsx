"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSlider from "@/components/WorkSlider";

const projects = [
  {
    num: '01',
    category: 'Full Stack',
    title: 'Flavour Beer Shop Using MERN Stack',
    description: 'Developed a comprehensive MERN stack Beer delivery application with Secure registration and login using jwt, cookies and bcrypt.',
    image: '/assets/assets/work/beer.jpg',
    github: "https://github.com/diouavi6161/Flavoro-beer-Shop",
  },
  {
    num: '02',
    category: 'MERN Stack',
    title: 'Chat Application Using Socket.io',
    description: 'Complete Chat Application with user authentication , sending and deletion message method.',
    image: '/assets/assets/work/chat.jpg',
    github: "https://github.com/diouavi6161/Chat-App",
  },
  {
    num: '03',
    category: 'Data Analytics',
    title: 'Hotel Reservation Analysis Using Python',
    description: 'A comprehensive analysis of hotel reservation data using Python, focusing on understanding and extinguishing high cancellation rates.',
    image: '/assets/assets/work/hotel1.jpg',
    github: "https://github.com/avi9180/Hotel-Reservation-Analysis-",
  },
  {
    num: '04',
    category: 'Data Analytics',
    title: 'Murder Mystry Analysing using SQL',
    description: 'Identify the murderer and the real villain through complex SQL queries and data analysis ',
    image: "/assets/assets/work/murder.jpg",
    github: "https://github.com/avi9180/SQL-_Murder-Mystry-Project",
  },
]

const Projects = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1,
      transition:{delay:2.4, duration:0.4,ease:"easeIn"}
     }} className="
    min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-6xl leading-none font-extrabold text-lime-400">
                {project.num}
              </div>
              <h3
              className="text-[20px] font-bold leading-none text-white
              group-hover:text-accent transition-all duration-500 capitalize">{project.category} Project
              </h3>
              <h2 className="text-[40px] font-bold leading-none text-white
              group-hover:text-accent transition-all duration-500 capitalize">{project.title} 
              </h2>
              <p className="text-black/60">{project.description}</p>
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="mt-1">
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[50px] h-[50px] rounded-full
                        bg-purple-500 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>View on GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper onSlideChange={handleSlideChange}>
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] realtive group flex justify-center
                    items-center bg-sky-800">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                        <div className="relative w-full h-full">
                          <Image src={project.image} fill className="object-cover" />
                        </div>
                      </div>
                    
                  </SwiperSlide>
                );
              })}
              <WorkSlider containerStyles=" flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
              xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
              btnStyles="bg-accent hover:bg-pink50 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center
              transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Projects;
