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

function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5438dc]'>Skills</p>
        <h2 className='py-4'>What I Can Offer</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={businessAcumenImg}
                  width='64'
                  height='64'
                  alt='/'
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Business Acumen</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={communicationImg}
                  width='64'
                  height='64'
                  alt='/'
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Communication</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={dataVisualizationImg}
                  width='64'
                  height='64'
                  alt='/'
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Data Visualization</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={gitImg}
                  width='64'
                  height='64'
                  alt='/'
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Git</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={githubImg}
                  width='64'
                  height='64'
                  alt='/'
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Github</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={machineLearningImg}
                  width='64'
                  height='64'
                  alt='/'
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Machine Learning</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={OOPImg}
                  width='64'
                  height='64'
                  alt='/'
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Object Oriented Design</h3>
              </div>
            </div>
          </div>

          <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src={pythonImg}
                  width='64'
                  height='64'
                  alt='/'
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Python Programming</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Skills
