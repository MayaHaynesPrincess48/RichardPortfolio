import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import SectionTitle from './SectionTitle'

const ServiceCard = ({ index, title, icon, text }) => {
  return (
    <Tilt options={{ max: 40, scale: 1, speed: 450, }}>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
        <div
          options={{ max: 45, scale: 1, speed: 450, }}
          className="bg-[#222444] rounded-[20px] py-5 px-7 min-h-[280px] flex justify-evenly items-center flex-col cursor-pointer">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-taupe text-[18px] font-bold text-center">
            {title}
          </h3>
          <p style={{ textAlign: 'center' }}>{text}</p>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>
          <SectionTitle title="Overview." />
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Experienced Full Stack Developer with 6+ years in the industry, specializing in web development and team
        leadership. Proficient in modern technologies and methodologies, including JavaScript frameworks, Python,
        PHP, cloud services, and microservices architecture. Proven ability to manage teams, deliver high-quality
        projects on time, and implement innovative solutions that enhance business performance.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About, 'about')
