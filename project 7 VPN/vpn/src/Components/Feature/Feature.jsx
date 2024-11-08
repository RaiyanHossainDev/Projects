import React from 'react'
import './Feature.css'
import { FaCheckCircle } from "react-icons/fa";



const Feature = () => {
  return (
    <>
        <section id='raiyan_feture'>
            <div className="container">
                <div className="feture_row">
                    <div className="feture_img">
                        <img className='w-full' src="images/feture.png" alt="feture image" />
                    </div>
                    <div className="feture_text">
                        <h2>
                            We Provide Many Features You Can Use
                        </h2>
                        <p>
                            You can explore the features that we provide with fun and have their own functions each feature.
                        </p>
                        <div className="feture_marks">
                            <div className="single_mark">
                                <FaCheckCircle />
                                <p>Powerfull online protection.</p>
                            </div>
                            <div className="single_mark">
                                <FaCheckCircle />
                                <p>Internet without borders.</p>
                            </div>
                            <div className="single_mark">
                                <FaCheckCircle />
                                <p>Supercharged VPN</p>
                            </div>
                            <div className="single_mark">
                                <FaCheckCircle />
                                <p>No specific time limits.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Feature