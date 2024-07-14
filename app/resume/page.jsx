"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa6";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

const about = {
  title: "About me",
  description:
    "With expertise in the MERN stack, I bring a solid foundation in web development.Also,I have developed a strong skill set in data analytics through the internship at PrepInsta.",

    items:[
      {
        fieldName:"Name",
        fieldValue:"Dipen Pradhan"
      },
      {
        fieldName:"Phone",
        fieldValue:"(+91) 9123088493"
      },
      {
        fieldName:"Last Education",
        fieldValue:"B.Tech"
      },
      {
        fieldName:"Email",
        fieldValue:"avilinid035@gmail.com"
      },
      {
        fieldName:"Joining",
        fieldValue:"Immediatly"
      },
    ]
};

const experience={
  icon:'/assets/assets/resume/badge.svg',
  title : 'Intern',
  

  items:[
    {
      Company:"CodSoft Pvt Limited",
      position:"Web Developer",
      duration :"December 2023-January 2024",
    },
    {
      Company:"PrepInsta",
      position:"Data Analytics",
      duration :"December 2023-Feruary 2024",
    },
  ]
};

const education = {
  icon:'/assets/assets/resume/badge.svg',
  title : 'Education',
  
  items:[
    {
      Institute:"Future Insitute Of Engineering And Management",
      Degree:"B.Tech in ECE",
      duration :"July 2019-july 2023",
    },
    {
      Institute:"Naktala High School",
      Degree:"Science(12th)",
      duration :"August 2017- August 2019",
    },
    
    
    
  ]
};

import {Tabs , TabsContent, TabsList,TabsTrigger} from "@/components/ui/tabs";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const Resume = () => {
  return <motion.div initial={{opacity:0}}
  animate={{
    opacity:1,
    transition:{delay:2.4,duration:0.4, ease:"easeIn"}
  }} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
    <div className="container mx-auto">
      <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
        <TabsList className="flex flex-col w-full max-w-[360px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="about">About me</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">Experince</TabsTrigger>
        </TabsList>
        {/*content*/}
        <div className="min-h-[70vh] w-full">

          <TabsContent value="about" className="w-full text-center xl:text-left">
          <div className="flex flex-col gap-[30px] ">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-lime-400 mx-auto xl:mx-0">{about.description}</p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.items.map((item,index)=>{
                    return <li  key={index} className="flex  items-center justify-center xl:justify-start gap-4">
                    
                      <span className="text-zinc-950">{item.fieldName}</span>
                      <span className="text-white">{item.fieldValue}</span>
                      
                    </li>
                  })}
                </ul>
              </ScrollArea>
            </div>

          </TabsContent>
          <TabsContent value="education" className="w-full h-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{education.title}</h3>
              
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item,index)=>{
                    return <li  key={index} className="bg-sky-500  h-[200px] py-6 px-10 rounded-xl
                    flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-zinc-950">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px]
                      text-center lg:text-left">{item.Degree}</h3>
                      <div className="flex items-center gap-1">
                        {/*dot*/}
                        
                        <p className="text-white">{item.Institute}</p>
                      </div>
                    </li>
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="experience" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item,index)=>{
                    return <li  key={index} className="bg-sky-500 h-[184px] py-6 px-10 rounded-xl
                    flex flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-zinc-950">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px]
                      text-center lg:text-left">{item.position}</h3>
                      <div className="flex items-center gap-1">
                        {/*dot*/}
                        <span className="w-[6px] h-[6px] rounded-full bg-black"></span>
                        <p className="text-white">{item.Company}</p>
                      </div>
                    </li>
                  })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>;
};

export default Resume;
