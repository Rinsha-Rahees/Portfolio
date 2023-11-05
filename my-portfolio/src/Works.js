import React from 'react'
import subtitle from './subtitle'

function Works() {
    return (

        <div id="works" className='items-center mx-36 md:m-4 lg:m-4 h-full object-contain'>

            <div className='title text-5xl my-8 md:my-12 xl:text-6xl '>
                <span >WORKS</span>
                <hr className='solid h-1 bg-navyblue-100' />
            </div>


            <div className="Works-Content items-center flex flex-col md:flex-row bg-beige-dark h-auto">

                <div className='work-item flex flex-1 flex-col bg-beige-med items-center m-4 md:mr-2 p-4'>
                    <span className='works-title text-2xl my-4'>Netflix Clone Web App</span>
                    <img className='w-80 h-96' src='Images\blackNwhiteFace.jpg' alt="Netflix Clone Web Application's cover picture" />
                    <a className='my-4' href='https://www.netflix.com'>netflix.com</a>
                    <span className='mb-4'> REACT | CSS | JS | HOOKS | REACT ROUTER DOM </span>
                </div>


                <div className='work-item flex flex-1 flex-col bg-beige-med items-center m-4 md:ml-2 p-4'>
                    <span className='works-title text-2xl my-4'>Onboarding Form</span>
                    <img className='w-80 h-96' src='Images\blackNwhiteFace.jpg' alt="Netflix Clone Web Application's cover picture" />
                    <a className='my-4' href='https://www.netflix.com'>netflix.com</a>
                    <span className='mb-4'> REACT | CSS | JS | HOOKS | REACT ROUTER DOM </span>
                </div>

            </div>

        </div>

    )
}

export default Works