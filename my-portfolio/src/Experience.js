import React from 'react'
import Skills from './Components/Skills'
import ExperienceData from './Components/ExperienceData'

function Experience() {


  return (
    <div id="experience" className='Experience-Content mx-10'>

      <div className="ExpDesc flex flex-col flex-1 p-6">

        <div>
          <h3 className='text-xl text-beige-purple font-semibold mb-4 lg:invisible'>Experience</h3>

        </div>


        <div className='flex flex-col lg:flex-row my-6 lg:mt-12 2xl:text-2xl'>

          <div className='flex-1/2 mb-2 lg:mr-2 lg:mt-1 w-50'>
            <span>2023 Jan - Present</span>
          </div>
          <div className='flex-1 lg:ml-5'>
            <h3 className='text-xl mb-2 text-beige-purple 2xl:text-3xl'>QA Automation Engineer . Millennium</h3>
            <p className='text-beige-purple2'>I am a QA Engineer who bags 2+ years of experience in software quality assurance. The areas I explored spans but not limited to :


            </p>

            <div className='flex flex-row'>
              <Skills>React</Skills>
              <Skills>CSS</Skills>
              <Skills>Javascript</Skills>
            </div>

          </div>



        </div>

        <div className='flex flex-col lg:flex-row my-6 lg:mt-12 2xl:text-2xl'>

          <div className='flex-1/2 mb-2 lg:mr-2 lg:mt-1 w-50'>
            <span>2023 Jan - Present</span>
          </div>
          <div className='flex-1 lg:ml-5'>
            <h3 className='text-xl mb-2 text-beige-purple 2xl:text-3xl'>QA Automation Engineer . Millennium</h3>
            <p className='text-beige-purple2'>I am a QA Engineer who bags 2+ years of experience in software quality assurance. The areas I explored spans but not limited to :


            </p>

            <div className='flex flex-row'>
              <Skills>React</Skills>
              <Skills>CSS</Skills>
              <Skills>Javascript</Skills>
            </div>

          </div>



        </div>

        <div className='flex flex-col lg:flex-row my-6 lg:mt-12 2xl:text-2xl'>

          <div className='flex-1/2 mb-2 lg:mr-2 lg:mt-1 w-50'>
            <span>2023 Jan - Present</span>
          </div>
          <div className='flex-1 lg:ml-5'>
            <h3 className='text-xl mb-2 text-beige-purple 2xl:text-3xl'>QA Automation Engineer . Millennium</h3>
            <p className='text-beige-purple2'>I am a QA Engineer who bags 2+ years of experience in software quality assurance. The areas I explored spans but not limited to :


            </p>

            <div className='flex flex-row'>
              <Skills>React</Skills>
              <Skills>CSS</Skills>
              <Skills>Javascript</Skills>
            </div>

          </div>



        </div>

        {/*
        
        PASS VALUE DYNAMIC

        <ExperienceData>{{duration:'2023' , jobrole:'Tester' , jobDesc:'Desc'}}</ExperienceData>  */}


        {/* Make Experience Dynamic and Give View full resume inside Experience to align with design & alignment  */}

        <div className='resume mt-6 text-lg font-semibold'>
          View full resume -{'>'}
        </div>




      </div>


    </div>
  )
}

export default Experience