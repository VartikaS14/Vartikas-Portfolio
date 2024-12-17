import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from './canvas';

const Hero = () => {
  // Check for mobile devices using window.innerWidth
  const isMobile = window.innerWidth <= 768; // Assuming 768px is the breakpoint for mobile

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#FF6F00]' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-t from-[#0000] to-[#FF6F00]' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#E65100]'>Vartika Singh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-1 text-white-100`}>
            Passionate about crafting seamless web experiences <span className='text-[#E65100]'>and</span> <br />solving complex problems with data structures and algorithms.
          </p>
        </div>
      </div>

      {/* Conditionally render the ComputersCanvas component */}
      {!isMobile && <ComputersCanvas />}

      <div className='absolute xs:bottom-7 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[28px] h-[45px] rounded-3xl border-4 border-[#FF6F00] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-2 h-2 rounded-full bg-[#FF6F00] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
