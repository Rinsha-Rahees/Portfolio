import React from 'react'
import Skills from './Skills'

function ExperienceData({ duration, jobrole, jobDesc }) {

    return (
        <div>

            <div className='flex-1/2 mr-5 mt-1'>
                <span>{duration}</span>
            </div>
            <div className='flex-1 ml-5'>
                <h3 className='text-xl text-beige-purple 2xl:text-3xl'>{jobrole}</h3>
                <p className='text-beige-purple2'>{jobDesc}</p>

                {/* <div className='flex flex-row'>
                    <Skills>React</Skills>
                    <Skills>CSS</Skills>
                    <Skills>Javascript</Skills>
                </div> */}

            </div>

        </div>
    )
}

export default ExperienceData