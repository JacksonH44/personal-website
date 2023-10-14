import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react';
import cciImg from '../public/assets/projects/design_thinking.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'

const cci = () => {
  return (
    <div>
    <Head>
        <title>Jackson Howe | Clean Coffee Initiative</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/data-science.png" />
    </Head>
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image className='absolute z-l' layout='fill' objectFit='cover' src={cciImg} alt='/' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Clean Coffee Initiative</h2>
          <h3>Figma / UI/UX Design / Product Design</h3>
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
              <Link href="https://www.figma.com/proto/1skb5vAMvSwDxG6SNMEgMU/Prototype---Design-Lions?node-id=175-2574&starting-point-node-id=195%3A2941&mode=design&t=3kuG83B6neHXlpVp-1">
                Mock-up
              </Link>
            </button>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Figma</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />UI/UX Design</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Product Design</p>
              
              </div>
            </div>
          </div>
          <Link href='/#projects'>
            <p className='underline cursor-poiner'>Back</p>
          </Link>
        </div>


    </div>
    </div>
  )
}

export default cci;