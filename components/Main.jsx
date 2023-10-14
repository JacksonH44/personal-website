import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { ChakraProvider } from '@chakra-ui/react'

const Main = () => {
  return (
    <ChakraProvider>
        <div id='home' className='w-full h-screen text-center'>
          <div className='max-width-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className='mt-10'>
              <p 
              className='uppercase text-sm tracking-widest text-gray-600'>Let's Work Together
             </p>
              <h1 className='py-4 text-gray-700'>
                Hi, I'm <span className='text-[#5438dc]'>Jackson</span>
              </h1>
              <h1 className='py-2 text-gray-700'>
                I'm Passionate About
              </h1>
              <h1 className='py-4 text-gray-700'>
                <span className='text-[#5438dc]'>Problem-Solving</span>
              </h1>
              <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                I'm a computer science and mathematics student interested in using data-driven techniques to analyze and solve problems. I love being a part of a team and communicating solutions to interested stakeholders.
              </p>
              <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
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

                <Link href='/#contact'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </Link>

                <Link href='/#contact'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </ChakraProvider>
  )
}

export default Main