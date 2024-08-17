import React from 'react'
import slideSleuthImg from '../public/assets/projects/mars_building.jpg'
import CCIImg from '../public/assets/projects/design_thinking.jpg'
import kuramotoImg from '../public/assets/projects/brain_network.jpg'
import primalityImg from '../public/assets/projects/enigma_machine.jpg'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5438dc]'>Projects</p>
        <h2 className='py-4'>What I've Worked On</h2>
        <div className='grid md:grid-cols-2 gap-8'>

        <ProjectItem title='SlideSleuth: Deep Learning Oncology' backgroundImg={slideSleuthImg} projectUrl='/slideSleuth' tech='Python | Tensorflow | Pandas | numPy | R' />

        <ProjectItem title='Clean Coffee Initiative: Design Thinking' backgroundImg={CCIImg} projectUrl='/cci' tech='Figma | UI/UX Design | Product Design' />

        <ProjectItem title='KuramotoESN: Neuroscience-Informed Machine Learning' backgroundImg={kuramotoImg} projectUrl='/kuramoto' tech='MATLAB | C | Bash'/>

        <ProjectItem title='Cryptography: Primality Testing' backgroundImg={primalityImg} projectUrl='/primalityTesting' tech='Python'/>

        </div>
      </div>
    </div>
  )
}

export default Projects
