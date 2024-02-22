import{ useRef, useState } from 'react';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

import "./contact.css";

const Contact = () => {

  const fadInContact = {
    initial: {
      opacity: 0,
      translateY:50,
      translateX:0,
    },
    animate: {
      opacity: 1,
      translateY:0,
      translateX:0,
    },
  };
  const form = useRef();
  
  const[submitMessage, setSubmitMessage] = useState(false);
  const [name, setName] = useState('')
  const setNameHandler = (e)=>{
    setName(e.target.value)
  }

   const sendEmail = (e) => {
    e.preventDefault();


    emailjs
      .sendForm('service_98o6aqq', 'template_8nwgvyo', form.current, {
        publicKey: 'XVWI-DbFuFI7e_UEd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitMessage(true);
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }
  return (
    <section id="contact" className="section contact section-padding">
      <div className="container">
        <motion.div
        variants={fadInContact}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration:0.5, delay:0.5 }}
        
        className="contact-title">
        <h2>Get In Touch</h2>
        <h5>Looking for a skilled web developer to join your team or company?</h5> 
        <h5>Let's collaborate and elevate your company's digital presence.</h5>
        <h5>Get in touch to discuss how I can contribute to your projects and company!</h5>
        </motion.div>
        <motion.div
        variants={fadInContact}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        transition={{ duration:0.7, delay:0.7 }}
        
        className="form-wrapper">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" id='name' name="user_name" placeholder="Name" required={true} onChange={setNameHandler} />
            <input type="text" name="user_email" placeholder="Email" required={true} />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
              required={true}
            ></textarea>
            <button type='submit' className='btn'>Send</button>
          </form>
          
        {submitMessage && <p className='submit-message'>Thank you for your message {name}. I'll get back to you as soon as possible!</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
