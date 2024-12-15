import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education } from "../constants"; // Use education data here
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ educationItem }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: 'linear-gradient(to bottom, #0000, #E65100)',
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={educationItem.date}
      iconStyle={{ background: educationItem.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={educationItem.icon}
            alt={educationItem.institution_name}
            className='w-[75%] h-[75%] object-cover'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{educationItem.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {educationItem.institution_name}
        </p>
        {educationItem.percentage && (
          <p className='text-secondary text-[16px] font-semibold'>
            Grade: {educationItem.percentage}
          </p>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My journey of learning and growth
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Education.
        </h2>
      </motion.div>

      <div className='mt-0 flex flex-col'>
        <VerticalTimeline>
          {education.map((educationItem, index) => (
            <EducationCard
              key={`education-${index}`}
              educationItem={educationItem}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
