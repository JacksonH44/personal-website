import React from 'react'
import slideSleuthImg from '../public/assets/projects/mars_building.jpg'
import CCIImg from '../public/assets/projects/design_thinking.jpg'
import mementoImg from '../public/assets/projects/mindfulness.jpg'
import uhnImg from '../public/assets/projects/pmccrt.jpg'
import ProjectItem from './ProjectItem'

export default function Projects() {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5438dc]'>Projects</p>
        <h2 className='py-4'>What I've Worked On</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        
        <ProjectItem title='Memento: Full-stack Mindfullness App' backgroundImg={mementoImg} projectUrl='/Memento' tech='Kotlin | Jetpack Compose | Android Studio'/>

        <ProjectItem title='University Health Network' backgroundImg={uhnImg} projectUrl='/UHNDataPipeline' tech='Python | pytest | Github Actions | Docker | Pandas'/>

        <ProjectItem title='SlideSleuth: Deep Learning Oncology' backgroundImg={slideSleuthImg} projectUrl='/slideSleuth' tech='Python | Tensorflow | Pandas | numPy | R' />

        <ProjectItem title='Clean Coffee Initiative: Design Thinking' backgroundImg={CCIImg} projectUrl='/cci' tech='Figma | UI/UX Design | Product Design' />

        </div>
      </div>
    </div>
  )
}
