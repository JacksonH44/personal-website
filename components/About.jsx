import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5438dc]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            I am a dedicated and curious student at the University of Waterloo who enjoys solving problems using both quantitative and qualitative approaches. In 2021, I took my first programming class in university and loved it so much, I switched my major from business to computer science. I've been using technology ever since then to explore and solve problems that I find fascinating.
          </p>
          <p className='py-2 text-gray-600'>
            I've been using data-driven and machine learning approaches to solve problems related to statistical physics and digital oncology. I've also been learning web development - I made this website with React.js, Next.js, and Tailwind CSS. In my spare time I enjoy listening to music (my current favourites are The Cranberries, The Smiths, and Crystal Castles), watching baseball with my girlfriend, and long-distance running. I love meeting new people, traveling, and storytelling.
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
        </div>
        <div className='w-full h-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img className='rounded-xl' src="../assets/aboutImagePsycho.jpg" alt="/" />
        </div>
      </div>
    </div>
  )
}

export default About
