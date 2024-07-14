import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span classname="text-2xl">B.Tech Graduate(ECE)</span>
            <h1 className="h1">
              Hello ,I'm
              <br /> <span>Dipen Pradhan</span>
            </h1>
            <p className="max-w-[480px] mb-5 text-neutral-900/80">
              As a passionate Full-Stack Developer with expertise in the MERN
              stack, I bring a solid foundation in web development. My
              experience includes creating dynamic, responsive web applications
              and solving complex problems with innovative solutions.
              Additionally, I have developed a strong skill set in data
              analytics through personal projects and a comprehensive training
              internship at PrepInsta.
            </p>
            {/*button & socials*/}
            <div className="flex flex-col sm:flex-row  gap-2">
            <a href="/assets/assets/resume1.pdf">
              <Button href="/assets/resume1.pdf"
                variant="outline"
                size="lg"
                className="uppercase flex gap-2 hover:text-lime-500"
              >
                <span>CV(Full Stack)</span>
                <FiDownload className="text-xl" />
              </Button>
              </a>
              <a href="/assets/assets/resume2.pdf">
              <Button
              
                variant="outline"
                size="lg"
                className="uppercase flex gap-2 hover:text-lime-500"
              >
                <span>CV(Data Analytics)</span>
                <FiDownload className="text-xl" />
              </Button>
              </a>
              
              <div className="mb-8 xl:mb-0 flex justify-center">
         <Socials
          containerStyles="flex gap-4 sm:gap-6"
          iconStyles="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 border-accent rounded-full flex justify-center items-center text-accent text-sm sm:text-base md:text-lg hover:bg-accent hover:text-primary transition-all duration-500"
           />
</div>


            </div>
          </div>
          {/*photo*/}
          <div className="order-1 xl:order mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Home;
