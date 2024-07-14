"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.1, ease: "easeIn" },
        }}
      >
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, ease: "easeInOut" },
          }} 
          className="w-[198px] h-[198px] xl:w-[298px] xl:h-[400px]  absolute"
        >
          <Image 
            src="/assets/assets/pic2.png" 
            priority 
            quality={100} 
            fill 
            alt="" 
            className="object-contain"
          />
        </motion.div>

        <motion.svg className="w-[200px] xl:w-[506px] h-[300px] xl:h-[506px]"
        fill="transparent"
        viewbox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg">
          
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo;
