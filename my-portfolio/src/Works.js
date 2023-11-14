import React from 'react'

function Works() {
  return (
    <div id="works" className='Works-Content  mx-10'>

    <div className="AboutDesc flex flex-col flex-1 p-6 2xl:text-2xl">
    <h3 className='text-xl text-beige-purple font-semibold lg:invisible'>Works</h3>
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

export default Works