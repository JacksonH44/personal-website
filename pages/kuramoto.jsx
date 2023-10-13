import Image from 'next/image';
import Link from 'next/link'
import React from 'react';
import kuramotoImg from '../public/assets/projects/kuramoto_esn.png'
import { RiRadioButtonFill } from 'react-icons/ri'

const KuramotoESN = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-l' layout='fill' objectFit='cover' src={kuramotoImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>KuramotoESN: Physics-Informed Machine Learning</h2>
          <h3>MATLAB / C / Bash</h3>
        </div>
      </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-col-5 gap-9 pt-8'>
          <div className='col-span-4'>
            <p>Project</p>
            <h2>Description</h2>
            <p>
              This is a description of my project lalala.
            </p>
            <button className='px-8 py-2 mt-4 mr-8 cursor-pointer hover:scale-110 ease-in duration-300'>
            <Link href="https://ir.lib.uwo.ca/usri/usri2022/ReOS/70/">
              Paper
            </Link>
            </button>
            <button className='px-8 py-2 mt-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <Link href="https://github.com/JacksonH44/kuramoto-esn">
                Code
              </Link>
            </button>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />MATLAB</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />C</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Bash</p>
              
              </div>
            </div>
          </div>
          <Link href='/#projects'>
            <p className='underline cursor-poiner'>Back</p>
          </Link>
        </div>


    </div>
  )
}

export default KuramotoESN;