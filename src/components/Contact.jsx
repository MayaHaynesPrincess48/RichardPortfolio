import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { send, sendHover } from '../assets'
import SectionTitle from './SectionTitle'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
    emailjs
      .send(
        'service_wt3vwoj', // paste your ServiceID here (you'll get one when your service is created).
        'template_05kwwp7', // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: 'Richard Boyer', // put your name here.
          from_email: form.email,
          to_email: 'testExample007@outlook.com', //put your email here.
          message: form.message,
        },
        '0KlI_crSKD1d6RsEa' //paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
          setLoading(false)
          alert('Thank you. I will get back to you as soon as possible.')

          setForm({
            name: '',
            email: '',
            message: '',
          })
        },
        (error) => {
          setLoading(false)
          console.log('error: ', error)
          alert('Something went wrong. Please try again.')
        }
      )
  }

  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>
          <SectionTitle title='Contact.' />
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6 font-poppins">
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-timberWolf font-medium mb-4">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack py-4 px-6
              placeholder:text-taupe
              text-timberWolf rounded-lg outline-none
              border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="live-demo flex justify-center sm:gap-4 
            gap-3 sm:text-[20px] text-[16px] text-timberWolf 
            font-bold font-beckman items-center py-5
            whitespace-nowrap sm:w-[130px] sm:h-[50px] 
            w-[100px] h-[45px] rounded-[10px] bg-night 
            hover:bg-battleGray hover:text-eerieBlack 
            transition duration-[0.2s] ease-in-out"
            onMouseOver={() => {
              document
                .querySelector('.contact-btn')
                .setAttribute('src', sendHover)
            }}
            onMouseOut={() => {
              document.querySelector('.contact-btn').setAttribute('src', send)
            }}>
            {loading ? 'Sending' : 'Send'}
            <img
              src={send}
              alt="send"
              className="contact-btn sm:w-[26px] sm:h-[26px] 
              w-[23px] h-[23px] object-contain"
            />
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <iframe
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3643.833618785371!2d90.41265112695315!3d24.036931700000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755db9832166e63%3A0x96050e560e6dc4fa!2sBOF%20Central%20Mosque!5e0!3m2!1sen!2sbd!4v1695023265917!5m2!1sen!2sbd"
          // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.120225147177!2d-81.2127223847447!3d28.58309218243243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e768f2c5e6b12f%3A0x17d51bd7ae2ef245!2s4652%20Pacifica%20Dr%2C%20Orlando%2C%20FL%2032817%2C%20USA!5e0!3m2!1sen!2sus!4v1696178405942!5m2!1sen!2sus"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.6212487267674!2d-81.23476488457406!3d28.612928282421446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e76c94bc4a4087%3A0x9ef4032b80792cbf!2s4652%20Pacifica%20Dr%2C%20Orlando%2C%20FL%2032817%2C%20USA!5e0!3m2!1sen!2s!4v1697377843652!5m2!1sen!2s"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          title="Contact Me"
          tabIndex="0"
          loading="lazy"
          style={{
            borderradius: '10px',
            overflow: 'hidden',
            width: '100%',
            height: '100%',
            minHeight: '400px'
          }}
        ></iframe>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')
