import React from 'react';
// image
import Image from '../assets/avatar1.png'
// icons
import { FaGithub, FaLinkedin, FaInstagram, } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
//Link
import { Link } from 'react-scroll';





const Banner = () => {
  return( 
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:gap-x-12'>
        {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left'>
          <motion.h1 
          variants={fadeIn('up', 0.2)} 
          initial = 'hidden' 
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='text-[50px] font-bold leading-[0.8] lg:text-[80px]'>
            YUVRAJ SINGH
          </motion.h1>
          <motion.div 
          variants={fadeIn('up', 0.3)} 
          initial = 'hidden' 
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>I am a</span>
            <TypeAnimation sequence={[
              'Developer.', 2000, 
              'Designer.', 2000, 
            ]}
            speed={50}
            className='text-accent' wrapper='sapn' repeat={Infinity} />
          </motion.div>
          <motion.p 
            variants={fadeIn('up', 0.3)}
            initial = 'hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='mb-8 max-w-lg mx-auto lg:mx-0'>
             I focus on simplicity and aesthetics while creating apps.
          </motion.p>
          <motion.div 
            variants={fadeIn('up', 0.5)}
            initial = 'hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <Link to='contact' activeClass='active' smooth={true}><button className='btn btn-lg'>Contact Me</button></Link>
          </motion.div>
          {/* socials */}
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial = 'hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}} 
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href="https://github.com/yuvrajzingh" target='blank'>
              <FaGithub/>
            </a>
            <a href="https://www.linkedin.com/in/yuvraj-singh-bhadouria-7b1b8121b/" target='blank'>
              <FaLinkedin/>
            </a>
            <a href="https://www.instagram.com/yuvrajzingh/" target='blank'>
              <FaInstagram/>
            </a>
          </motion.div>
        </div>
        {/* image */}
        <div className='lg:block  max-w-[320px] lg:max-w-[582px] mx-auto' >
          <motion.img 
          variants={fadeIn('left', 0.3)}
          initial = 'hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='rounded-full h-auto max-w-lg border-2 border-violet-500 ' src={Image} alt="" />
        </div>
      </div>
    </div>
  </section>);
};

export default Banner;
