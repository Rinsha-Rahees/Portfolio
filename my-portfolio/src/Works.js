import React from 'react'
import Subtitle from './Components/Subtitle'

function Works() {
  return (
    <div id="works" className='Experience-Content'>

      <div className="WorkDesc flex flex-col flex-1">

        <div>
          <Subtitle>Projects</Subtitle>

        </div>


        <div className='lg:my-2'>
          <div className='flex flex-col-reverse lg:flex-row my-6 2xl:text-2xl'>

            <div className='flex-1/2 my-4 lg:mr-2 lg:mt-2 w-50'>
              <img src='\Images\netflix.jpg' className='w-[133px]' />
            </div>
            <div className='flex-1 lg:ml-5'>
              <h3 className='text-xl mb-2 text-lightgrey 2xl:text-3xl flex flex-row items-end'>Netflix Clone <img src='\Images\up-right-arrow.png' className='w-5' /></h3>
              <p className='text-beige-purple2'>I am a QA Engineer who bags 2+ years of experience in software quality assurance. The areas I explored spans but not limited to :

                • API testing
                • Mobile Application Testing ( Android | iOS )
                • Web Application Testing
                • Test plans and Test Case Creation
              </p>


            </div>

          </div>

          <div className='flex flex-col-reverse lg:flex-row my-6 2xl:text-2xl'>

            <div className='flex-1/2 my-4 lg:mr-2 lg:mt-2 w-50'>
              <img src='\Images\netflix.jpg' className='w-[133px]' />
            </div>
            <div className='flex-1 lg:ml-5'>
              <h3 className='text-xl mb-2 text-lightgrey 2xl:text-3xl flex flex-row items-end'>Netflix Clone <img src='\Images\up-right-arrow.png' className='w-5' /></h3>
              <p className='text-beige-purple2'>I am a QA Engineer who bags 2+ years of experience in software quality assurance. The areas I explored spans but not limited to :

                • API testing
                • Mobile Application Testing ( Android | iOS )
                • Web Application Testing
                • Test plans and Test Case Creation
              </p>


            </div>

          </div>
        </div>

        {/*
      
      PASS VALUE DYNAMIC

      <ExperienceData>{{duration:'2023' , jobrole:'Tester' , jobDesc:'Desc'}}</ExperienceData>  */}


      </div>

    </div>
  )
}

export default Works