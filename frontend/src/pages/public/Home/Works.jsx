import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import SectionHeader from '../../../components/shared/SectionHeader';
import { projects } from '../../../data/projectsData';
import ProjectCard from '../../../components/shared/ProjectCard';

const Works = () => {
  const navigate = useNavigate();
  const topThree = projects.slice(0, 3);

  return (
    <>
      <section id="works" className="container flex flex-col items-center text-center pb-5">
        <SectionHeader title={'Works'} buttonText={'View More'} onClick={() => { navigate('/works') }} headingDelay='100' buttonDelay='200'>
          Here's My <span className="text-accent">Work</span>
        </SectionHeader>
        <div className="w-full grid grid-auto gap-2 py-2">
          {topThree.map((project, idx) => (
            <ProjectCard key={project.id} {...project} aos='zoom-in-up' aosDelay={idx * 300} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Works