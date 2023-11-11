import React from 'react'
import subtitle from './subtitle'

function Experience() {
    return (
        <div id="experience" className='Experience-Content mx-10'>

        <div className="AboutDesc flex flex-col flex-1 p-6">
          <h1 className='text-2xl xl:text-2xl text-beige-purple font-semibold'>Experience</h1>
          <p className='text-beige-purple2 mt-4'>I am a QA Engineer who bags 2+ years of experience in software quality assurance. The areas I explored spans but not limited to :
  
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
  
  
        {/* Responsive upto Mobile view. By default flex:col ensures it will target mobile devices. From breaking point 'md' and above 
              we'll specify different. */}
  
      </div>
    )
  }

export default Experience