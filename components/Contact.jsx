import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import ContactForm from './Form'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#81f296]'>Contact</p>
        <h2 className='py-4'>Get in Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>

        {/* left */}

          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <div>
                <img 
                className='rounded-xl hover:scale-105 ease-in duration-300' 
                src="../assets/contactImage.jpg" 
                alt="/" />
              </div>
              <div>
                <h2 className='py-2'>Jackson Howe</h2>
                <p>Computer Science and Mathematics Student</p>
                <p className='py-4'>I am available for co-op positions for Summer 2024, and full-time positions starting Winter 2025</p>
              </div>
              <div>
              <p className='uppercase pt-8'>Connect With Me</p>
              <div className='flex items-center justify-around py-4'>
                <Link href='https://www.linkedin.com/in/jackson-howe-aa0008206/'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </Link>

                <Link href='https://github.com/JacksonH44'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </Link>
              </div>
            </div>
            </div>
          </div>

        {/* right */}

        <ContactForm />
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp className='text-[#81f296]'size={30}/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact;
