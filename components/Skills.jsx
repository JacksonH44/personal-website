import React from 'react'

import androidImg from '../public/assets/skills/android.png'
import dockerImg from '../public/assets/skills/docker.png'
import nextjsImg from '../public/assets/skills/nextjs.png'
import postgresImg from '../public/assets/skills/postgresql.png'
import powerBIImg from '../public/assets/skills/power_bi.png'
import pythonImg from '../public/assets/skills/python.png'
import reactImg from '../public/assets/skills/react.png'
import tsImg from '../public/assets/skills/typescript.png'
import SkillItem from "./SkillItem"

function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5438dc]'>Skills</p>
        <h2 className='py-4'>What I Can Offer</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

          <SkillItem imageUrl={pythonImg} description={"Python Programming"}/>

          <SkillItem imageUrl={androidImg} description={"Android Development"}/>

          <SkillItem imageUrl={tsImg} description={"TypeScript"}/>

          <SkillItem imageUrl={nextjsImg} description={"Next.js"}/>

          <SkillItem imageUrl={reactImg} description={"React.js"}/>

          <SkillItem imageUrl={dockerImg} description={"Docker"}/>

          <SkillItem imageUrl={postgresImg} description={"PostgreSQL"}/>

          <SkillItem imageUrl={powerBIImg} description={"PowerBI"}/>
          

        </div>
      </div>
    </div>
  );
}

export default Skills
