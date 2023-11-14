import React from 'react'
import subtitle from './subtitle'

function Experience() {
  return (
    <div id="experience" className='Experience-Content mx-10'>

      <div className="ExpDesc flex flex-col flex-1 p-6">

        <div>
          <h3 className='text-xl text-beige-purple font-semibold lg:invisible'>Experience</h3>

        </div>


        <div className='flex flex-row mt-4 2xl:text-2xl'>

          <div className='flex-1/2 mr-5'>
            <span>2022-present</span>
          </div>
          <div className='flex-1'>
            <h3 className='text-xl text-beige-purple 2xl:text-3xl'>QA Automation Engineer . Millennium</h3>
            <p className='text-beige-purple2'>I am a QA Engineer who bags 2+ years of experience in software quality assurance. The areas I explored spans but not limited to :

              • API testing
              • Mobile Application Testing ( Android | iOS )
              • Web Application Testing
              • Test plans and Test Case Creation
              • Test Case Maintenance
              • Gap Analysis and Requirement Traceability Matrix
              • Analyzing Business Requirements
              • Suggesting changes for betterment of product
              • Documentation and giving Demo

              Domains :-
              • Payments
              • Chatbot
              • Embedded Automotive</p>
          </div>

        </div>


      </div>


      {/* Responsive upto Mobile view. By default flex:col ensures it will target mobile devices. From breaking point 'md' and above 
              we'll specify different. */}

    </div>
  )
}

export default Experience