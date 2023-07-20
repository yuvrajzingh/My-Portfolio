import React from 'react';
//countUp
import CountUp from 'react-countup';
// intersection observer hook
import { InView, useInView } from 'react-intersection-observer';
//motion
import { motion } from 'framer-motion';
//variant
import { fadeIn } from '../variants';
// //resume
// import resume from '../assets/';
//link 
import { Link } from 'react-scroll';


const About = () => {

  const [ref, inView] = useInView({
    threshold: 0.5,
  })

  const onButtonClick = () => {
    fetch('RESUME.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'RESUME.pdf';
            alink.click();
        })
    })
  }

  return <section className='section' id='about' ref={ref}>
  <div className="container mx-auto">
    <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
      {/* image */}
      <motion.div 
      variants={fadeIn('right', 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.3}} 
      className='flex-1 bg-about bg-contain bg-no-repeat h-[520px] mix-blend-lighten bg-top border-2 border-purple-500'>
      </motion.div>
      {/* text */}
      <motion.div
      variants={fadeIn('left', 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.3}}  
      className='flex-1'>
        <h2 className='h2 text-accent'>About me</h2>
        <h3 className='h3 mb-4'>I'm a Final year college student with over 2 years of experience in this field.</h3>
        
        <p className='mb-6'>As a fresher Web Developer and Designer, I have a diverse skill set that includes proficiency in HTML, CSS, JavaScript, React, Tailwind CSS, and Figma. These technologies are essential for creating modern and responsive web applications and designing user interfaces that are both functional and visually appealing. <br/>Visit my <a href="https://www.linkedin.com/in/yuvraj-singh-bhadouria-7b1b8121b/" target='blank' className='text-gradient'>LinkedIn</a> profile for more details or just <Link to='contact' activeClass='active' smooth={true} className='text-gradient cursor-pointer'>Contact Me</Link></p>

        {/* states */}
        <div className="flex gap-x-6 lg:gap-x-10 mb-12">
          <div className="">
            <div className="text-[40px] font-tertiary text-gradient mb-2">
              {InView ? <CountUp start={0} end={2} duration={3} /> : null}
            </div>
            <div className="font-primary text-sm tracking-[2px]">
              Years of <br /> Experience
            </div>
          </div>
          <div className="">
            <div className="text-[40px] font-tertiary text-gradient mb-2">
              {InView ? <CountUp start={0} end={20} duration={3} /> : null}
              +
            </div>
            <div className="font-primary text-sm tracking-[2px]">
              Projects <br /> Completed
            </div>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <button className="btn btn-lg" onClick={onButtonClick}>Download CV</button>
          {/* <a href="" className='text-gradient btn-link'>My Portfolio</a> */}
        </div>
      </motion.div>
    </div>
  </div></section>

};

export default About;