import Image from 'next/image'
import React from 'react'

import businessAcumenImg from '../public/assets/skills/business_acumen.png'

function Skills() {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#81f296]'>Skills</p>
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
                />
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
                  src='/../assets/skills/communication.png' 
                  width='64' 
                  height='64' 
                  alt='/' 
                />
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
                  src='/../assets/skills/data_visualization.png' 
                  width='64' 
                  height='64' 
                  alt='/' 
                />
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
                  src='/../assets/skills/git.png' 
                  width='64' 
                  height='64' 
                  alt='/' 
                />
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
                  src='/../assets/skills/github.png' 
                  width='64' 
                  height='64' 
                  alt='/' 
                />
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
                  src='/../assets/skills/machine_learning.png' 
                  width='64' 
                  height='64' 
                  alt='/' 
                />
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
                  src='/../assets/skills/object_oriented_programming.png' 
                  width='64' 
                  height='64' 
                  alt='/' 
                />
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
                  src='/../assets/skills/python.png' 
                  width='64' 
                  height='64' 
                  alt='/' 
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3>Python Programming</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
