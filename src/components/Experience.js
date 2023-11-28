import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion'
import LiIcon from './LiIcon'



const Details = ({position, company, companyLink, time, address, work}) => {
  const ref = useRef(null);
  return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
    <LiIcon reference={ref}/>
    <motion.div
    initial={{y:50}}
    whileInView={{y:0}}
    transition={{duration:0.5, type:"spring"}}
    >
      <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp; <a href={companyLink}
      target='_blank'
      className='text-primary capitalize dark:text-primaryDark'
      > @{company}</a></h3>
      <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
        {time} | {address}
      </span>
      <p className='font-medium w-full md:text-sm'>
        {work}
      </p>
    </motion.div>
  </li>
}

const Experience = () => {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll(
    {
      target: ref,
      offset: ["start end", "center start"]
    }
  )
  return (
    <div className="my-18">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-1 h-full bg-dark origin-top dark:bg-light
      md:w-[2px] md:left-[30px] xs:left-[20px]
      "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Front-end Developer"
            company="Tupai Tech"
            companyLink="www.google.com"
            time="Feb 2023 - Apr 2023"
            address="Internship"
            work="Front-End Developer (creating the front-end appearance of the UI/UX design in figma using Tailwind CSS) | Project: Developing the Medicmate health website landing page, Symphony digital marketing website, Flexbox studio website."
          />

          <Details
            position="Full stack Developer"
            company="Dicoding Indonesia"
            companyLink="https://www.dicoding.com/"
            time="Aug 2022 - Dec 2022"
            address="Studi Independen"
            work="Front-end and Back-end Development |
Project: Create a data management application using DOM and web storage, Create an ES6 web application, custom elements, NPM, module bundler, and AJAX, Create a restaurant catalog PWA with testing and optimization, Create a Bookshelf Website REST API."
          />

          <Details
            position="Content Creator"
            company="Jitunews.com"
            companyLink="www.google.com"
            time="Feb 2019 - Apr 2019"
            address="Internship"
            work="Content creator for instagram Hitsfogram dan Zona Mistis
            Conducting Research, Copywriting and Editing content."
          />

          <Details
            position="Head of Research And Development"
            company="Fosti UMS"
            companyLink="https://fostiums.org/"
            time="Dec 2021 - Dec 2022"
            address="Organization"
            work="Plan work programs for the scientific research and technology division, Coordinate and be responsible for the implementation of each work program."
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience