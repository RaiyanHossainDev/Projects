import React from 'react'
import './Counter.css'
import { FaUser } from "react-icons/fa6";
import CountUp from 'react-countup';
import { FaLocationDot } from "react-icons/fa6";
import { FaServer } from "react-icons/fa6";




const Counter = () => {
  return (
    <>
        <section id='raiyan_banner'>
            <div className="container">
                <div className="counter_row">
                    <div className="single_counter">
                        <div className="counter_icon">
                            <FaUser />
                        </div>
                        <div className="counter_text">
                            <h2><CountUp duration={9} end={90} />+</h2>
                            <p>Users</p>
                        </div>
                    </div>
                    <div className="counter_line" />

                    <div className="single_counter">
                        <div className="counter_icon">
                            <FaLocationDot />
                        </div>
                        <div className="counter_text">
                            <h2><CountUp duration={9} end={30} />+</h2>
                            <p>Locations</p>
                        </div>
                    </div>
                    <div className="counter_line" />

                    <div className="single_counter">
                        <div className="counter_icon">
                            <FaServer />
                        </div>
                        <div className="counter_text">
                            <h2><CountUp duration={9} end={50} />+</h2>
                            <p>Servers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Counter