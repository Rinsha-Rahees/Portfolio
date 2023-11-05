import React from 'react'

function Contact() {
  return (
    <div id="contact" className='items-center mx-36 md:m-4 lg:m-4'>

    <div className='title text-5xl my-16 xl:text-6xl '>
        <span >CONTACT</span>
        <hr className='solid h-1 bg-navyblue-100' />
    </div>


    <div className="Works-Content flex flex-col md:flex-row">

        <div className='Amazon-Clone flex-1'>
            <span className='works-title'>Netflix Clone Web App</span>
            <a href='https://www.netflix.com'>netflix.com</a>
        </div>

        <div className='Amazon-Clone flex-1'>
            <span className='works-title'>Netflix Clone Web App</span>
            <a href='netflix.com'>netflix.com</a>
        </div>

    </div>
        
    </div>
  )
}

export default Contact