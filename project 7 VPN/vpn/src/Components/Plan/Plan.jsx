import React, { useState } from 'react'
import './Plan.css'
import { FaCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';




const Plan = () => {
    // =========== custom usestate
    // ==== free plan
    const [freeBGcolor,setFreeBGColor] = useState('')
    const [freeColor,setFreeColor] = useState('')
    // ==== standard plan
    const [stanBGcolor,setStanBGColor] = useState('')
    const [stanColor,setStanColor] = useState('')
    // ==== premium plan
    const [preBGcolor,setPreBGColor] = useState('')
    const [preColor,setPreColor] = useState('')


    // == free
    let freePLan = (e)=>{
        e.preventDefault()
        setFreeBGColor('#F53838')
        setFreeColor('white')

        setStanBGColor('')
        setStanColor('')

        setPreBGColor('')
        setPreColor('')
        if(freeColor == 'white'){
            setFreeBGColor('')
            setFreeColor('')
        }
    }
    // == standard
    const stanPlan = (e)=>{
        e.preventDefault()
        setStanBGColor('#F53838')
        setStanColor('white')

        setFreeBGColor('')
        setFreeColor('')

        setPreBGColor('')
        setPreColor('')
        if(stanColor == 'white'){
            setStanBGColor('')
            setStanColor('')
        }
    }
    // == premium
    let prePlan = (e)=>{
        e.preventDefault()
        setPreBGColor('#F53838')
        setPreColor('white')

        setStanBGColor('')
        setStanColor('')

        setFreeBGColor('')
        setFreeColor('')
        if(preColor == 'white'){
            setPreBGColor('')
            setPreColor('')
        }
    }



  return (
    <>
        <section id='raiyan_plan'>
            <div className="container">
                <div className="common_head">
                    <h2>
                        Choose Your Plan
                    </h2>
                    <p>
                        Let's choose the package that is best for you and explore it happily and cheerfully.
                    </p>
                </div>
                <div className="plan_row">
                    <div className="single_plan" style={{
                        borderColor: freeBGcolor,
                    }}>
                        <div className="plan_text">
                            <div className="plan_img">
                                <img src="images/plan_free.png" alt="plan" />
                            </div>
                            <h2>Free Plan</h2>
                            <div className="plan_check">
                                <div className="single_plan_check">
                                    <FaCheck className='text-[#2FAB73]' />
                                    <p>Unlimited Bandwitch</p>
                                </div>
                                <div className="single_plan_check">
                                    <FaCheck className='text-[#2FAB73]' />
                                    <p>Encrypted Connection</p>
                                </div>
                                <div className="single_plan_check">
                                    <FaCheck className='text-[#2FAB73]' />
                                    <p>No Traffic Logs</p>
                                </div>
                                <div className="single_plan_check">
                                    <FaCheck className='text-[#2FAB73]' />
                                    <p>Works on All Devices</p>
                                </div>
                            </div>
                        </div>
                        <div className="plan_button">
                            <h3>Free</h3>
                            <Link onClick={freePLan} style={{
                                backgroundColor: freeBGcolor,
                                color: freeColor,
                            }} to={'/'}>Select</Link>
                        </div>
                    </div>
                    <div className="single_plan" style={{
                        borderColor: stanBGcolor,
                    }}>
                        <div className="plan_text">
                            <div className="plan_img">
                                <img src="images/plan_Standard.png" alt="plan" />
                            </div>
                            <h2>Standard Plan</h2>
                            <div className="plan_check">
                                <div className="single_plan_check">
                                    <FaCheck className='text-[#2FAB73]' />
                                    <p>Unlimited Bandwitch</p>
                                </div>
                                <div className="single_plan_check">
                                    <FaCheck className='text-[#2FAB73]' />
                                    <p>Encrypted Connection</p>
                                </div>
                                <div className="single_plan_check">
                                    <FaCheck className='text-[#2FAB73]' />
                                    <p>No Traffic Logs</p>
                                </div>
                                <div className="single_plan_check">
                                    <FaCheck className='text-[#2FAB73]' />
                                    <p>Works on All Devices</p>
                                </div>
                                <div className="single_plan_check">
                                    <FaCheck className='text-[#2FAB73]' />
                                    <p>Connect Anyware</p>
                                </div>
                            </div>
                        </div>
                        <div className="plan_button">
                            <h3>$9 <span className='text-secendary'>/ mo</span></h3>
                            <Link onClick={stanPlan} style={{
                                backgroundColor: stanBGcolor,
                                color: stanColor,
                            }} to={'#'}>Select</Link>
                        </div>
                    </div>
                    <div className="single_plan" style={{
                        borderColor: preBGcolor,
                    }}>
                        <div className="plan_text">
                            <div className="plan_img">
                                <img src="images/plan_Premium.png" alt="plan" />
                            </div>
                            <h2>Premium Plan</h2>
                            <div className="plan_check">
                                <div className="single_plan_check">
                                    <FaCheck className='text-[#2FAB73]' />
                                    <p>Unlimited Bandwitch</p>
                                </div>
                                <div className="single_plan_check">
                                    <FaCheck className='text-[#2FAB73]' />
                                    <p>Encrypted Connection</p>
                                </div>
                                <div className="single_plan_check">
                                    <FaCheck className='text-[#2FAB73]' />
                                    <p>No Traffic Logs</p>
                                </div>
                                <div className="single_plan_check">
                                    <FaCheck className='text-[#2FAB73]' />
                                    <p>Works on All Devices</p>
                                </div>
                                <div className="single_plan_check">
                                    <FaCheck className='text-[#2FAB73]' />
                                    <p>Connect Anyware</p>
                                </div>
                                <div className="single_plan_check">
                                    <FaCheck className='text-[#2FAB73]' />
                                    <p>Get New Features</p>
                                </div>
                            </div>
                        </div>
                        <div className="plan_button">
                            <h3>$12 <span className='text-secendary'>/ mo</span></h3>
                            <Link onClick={prePlan} style={{
                                backgroundColor: preBGcolor,
                                color: preColor,
                            }} to={'#'}>Select</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Plan