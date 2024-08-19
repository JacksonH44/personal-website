import Image from "next/image"
import React from 'react'

import businessAcumenImg from '../public/assets/skills/business_acumen.png'
import communicationImg from '../public/assets/skills/communication.png'
import dataVisualizationImg from '../public/assets/skills/data_visualization.png'
import gitImg from '../public/assets/skills/git.png'
import githubImg from '../public/assets/skills/github.png'
import machineLearningImg from '../public/assets/skills/machine_learning.png'
import OOPImg from '../public/assets/skills/object_oriented_programming.png'
import pythonImg from '../public/assets/skills/python.png'
import SkillItem from "./SkillItem"

function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5438dc]'>Skills</p>
        <h2 className='py-4'>What I Can Offer</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

          <SkillItem imageUrl={businessAcumenImg} description={"Business Acumen"}/>

          <SkillItem imageUrl={communicationImg} description={"Communication"}/>

          <SkillItem imageUrl={dataVisualizationImg} description={"Data Visualization"}/>

          <SkillItem imageUrl={gitImg} description={"Git"}/>

          <SkillItem imageUrl={githubImg} description={"Github"}/>

          <SkillItem imageUrl={machineLearningImg} description={"Machine Learning"}/>

          <SkillItem imageUrl={OOPImg} description={"Object-Oriented Programming"}/>
          
          <SkillItem imageUrl={pythonImg} description={"Python Programming"}/>

        </div>
      </div>
    </div>
  );
}

export default Skills
