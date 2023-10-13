import React from 'react'
import slideSleuthImg from '../public/assets/projects/slidesleuth.png'
import CCIImg from '../public/assets/projects/cci.png'
import kuramotoImg from '../public/assets/projects/kuramoto_esn.png'
import primalityImg from '../public/assets/projects/primality_testing.png'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#81f296]'>Projects</p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

        <ProjectItem title='SlideSleuth: Deep Learning Ocology' backgroundImg={slideSleuthImg} projectUrl='/slideSleuth' tech='Tensorflow (Machine Learning)' />

        <ProjectItem title='Clean Coffee Initiative' backgroundImg={CCIImg} projectUrl='/cci' tech='Figma' />

        <ProjectItem title='KuramotoESN: Reservoir Computing' backgroundImg={kuramotoImg} projectUrl='/kuramoto' tech='matlab | Python | C'/>

        <ProjectItem title='Primality Testing' backgroundImg={primalityImg} projectUrl='/primalityTesting' tech='Python'/>

        </div>
      </div>
    </div>
  )
}

export default Projects
