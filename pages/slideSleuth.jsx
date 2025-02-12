import Head from 'next/head'
import Image from "next/image";
import Link from 'next/link'
import React from 'react';
import slideSleuthImg from '../public/assets/projects/mars_building.jpg'
import { RiRadioButtonFill } from 'react-icons/ri'

const slideSleuth = () => {
  return (
    <div>
    <Head>
        <title>Jackson Howe | SlideSleuth</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/data-science.png" />
    </Head>
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10' />
        <Image
          className='absolute z-l'
          src={slideSleuthImg}
          alt='/'
          fill
          sizes="100vw"
          style={{
            objectFit: "cover"
          }} />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>SlideSleuth: Deep Learning Oncology</h2>
          <h3>Python / Tensorflow / Pandas / numPy / R</h3>
        </div>
      </div>

        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-col-5 gap-9 pt-8'>
          <div className='col-span-4'>
            <p>Project</p>
            <h2>Description</h2>
            <p className='mt-4'>
              In the summer of 2023, I got the opportunity to work for <a className='underline text-[#0A95FF]' href="https://www.uhn.ca/">University Health Network</a> consulting with physicians to leverage artificial intelligence in precision oncology. In addition to my role at UHN, I was a member of the <a className='underline text-[#0A95FF]' href="https://datasciences.utoronto.ca/">Data Science Institute</a> at the University of Toronto this summer. We recommended and built a prototype of a deep learning tool, SlideSleuth, that uses an unsupervised deep learning model to analyze slide images of lung adenocarcinoma (LUAD). LUAD is a challenging form of cancer to diagnose due to the complexity of the slide images produced from a clinical setting. Our goal was to extract relevant features from the slide images to aid expert physicians in their diagnoses.
            </p>
            <br></br>
            <p>
              Our model was a convolutional variational autoencoder built in <strong>Python</strong> and <strong>Tensorflow</strong>. The goal of the model is to reduce our images to a smaller feature vector representation, effectively embedding the image. We then further reduce the dimension of the feature vectors via clustering. We then aim to map feature vector dimensions to image attributes, thus providing physicians with interpretability of our model. Our private dataset consists of 158 slide images from 106 patients at UHN, with each slide image being cropped into smaller tiles, with over 350,000 tiles total. The data processing and data pipelining was done in Python and <strong>R</strong>, and data visualization was done in R. At the end of the project, we confirmed that our model was recognizing and extracting salient features of images. Next steps for this project include developing further consultation with physicians to improve model interpretation.
            </p>
            <button className='px-8 py-2 mt-4 mr-8 cursor-pointer hover:scale-110 ease-in duration-300'>
              <Link href="https://github.com/JacksonH44/SlideSleuth">
                Code
              </Link>
            </button>
          </div>
          <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Python</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Tensorflow</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Pandas</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />numPy</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />R</p>
              </div>
            </div>
          </div>
          <Link href='/#projects'>
            <p className='underline cursor-poiner'>Back</p>
          </Link>
        </div>


    </div>
    </div>
  );
}

export default slideSleuth;