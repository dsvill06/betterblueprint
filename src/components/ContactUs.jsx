import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';


const ContactUs = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
    emailjs
      .send(
        'service_r8in3h2', // paste your ServiceID here (you'll get one when your service is created).
        'template_sj9c9da', // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: 'Lauryn Taylor', 
          from_email: form.email,
          to_email: 'betterblueprintconsulting@gmail.com',
          message: form.message,
        },
        'OeV91jlFcenaanNcr' //paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <motion.div initial={{ opacity: 0, x: -50 }} // Initial position for "Better Blueprint"
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
      className="-mt-[6rem] xl:flex-row flex-col-reverse 
      flex gap-8 overflow-hidden justify-self-auto shadow-2xl object-fill bg-[#acc9f4] rounded-xl md:w-7/12">
      <div
        
        className="flex-[0.75] bg-[#acc9f4] p-8 rounded-2xl object-fill w-full">
        <h3 className={styles.sectionHeadText}>Contact Form</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-5 font-poppins w-full">
          <label className="flex flex-col">
            <span className="text-flashWhite font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-taupe py-4 px-6
              placeholder:text-silver
              text-platinum rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-flashWhite font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-taupe py-4 px-6
              placeholder:text-silver
              text-platinum rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-flashWhite font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-taupe py-4 px-6
              placeholder:text-silver
              text-platinum rounded-lg outline-none
              border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-primary 
            hover:bg-battleGray hover:text-primary 
            transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              document
                .querySelector('.contact-btn')
            }}
            onMouseOut={() => {
              document.querySelector('.contact-btn')
            }}>
            {loading ? 'Sending' : 'Send'}
          </button>
        </form>
      </div>
    </motion.div>
  );
};
export default ContactUs