import React, { useRef } from 'react';
//motion
import {motion} from 'framer-motion'
//variants
import {fadeIn} from '../variants'
//emailjs
import emailjs from '@emailjs/browser';
// icons
import { FaCoffee } from 'react-icons/fa';


const Contact = () => {

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_t6t2ogv', 'template_tyzpk0s', form.current, 'r5KVFTgctR9T5mxqU')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
  <section className='section mt-20 py-16 mb-12 lg:section' id='contact'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}} 
          className='flex-1 flex items-center bg-map  bg-no-repeat bg-bottom bg-contain mix-blend-lighten'>
          <div>
            <h4 className='text-xl text-[25px] uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-8'>Let's Work <br />together!</h2>
            <h5 className='text-[15px] lg:text-[25px] leading-none mb-8 flex gap-x-3'>How do you take your coffee?<FaCoffee/></h5>
          </div>
        </motion.div>
        {/* form */}
        <motion.form
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}}
          ref={form} onSubmit={sendEmail} 
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
          <input className='bg-transparent border-b py-3 outline outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Name'required name="from_name"/>
          <input className='bg-transparent border-b py-3 outline outline-none w-full placeholder:text-white focus:border-accent transition-all' type="text" placeholder='Email' required name="email"/>
          <textarea name="message" className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder='Your message' required></textarea>
          <button className='btn btn-lg'>Send message</button>
        </motion.form>
      </div>
    </div>
  </section>);
};

export default Contact;
