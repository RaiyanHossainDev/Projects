import React from 'react'
import './Myslider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaStar } from "react-icons/fa";





const Myslider = () => {

    const settings = {
        dots: true,
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 300,
      };
      

  return (
    <section id='raiyan_slider'>
        <div className="container">
            <div className="common_head">
                <h2>Trusted by Thousands of Happy Customer</h2>
                <p>
                These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
                </p>
            </div>
            <div className="main_slider">
                <Slider {...settings}>
                    <div>
                        <div className='single_slide'>
                            <div className="head">
                                <div className="profile">
                                    <img src="images/robert.png" alt="robert" />
                                    <div className="name">
                                        <h2>Viezh Robert</h2>
                                        <p>Warsaw, Poland</p>
                                    </div>
                                </div>
                                <div className="rating">
                                    <h4 className='text-[16px] text-[#0B132A] font-normal font-rubik'>4.5</h4>
                                    <FaStar className='text-[#FEA250]'/>
                                </div>
                            </div>
                            <div className="comment mt-[8px]">
                                <p className='lg:w-[340px]'>
                                    “Wow... I am very happy to use this VPN, it turned
                                    out to be more than my expectations and so far there 
                                    have been no problems. LaslesVPN always the best”.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='single_slide'>
                            <div className="head">
                                <div className="profile">
                                    <img src="images/christy.png" alt="robert" />
                                    <div className="name">
                                        <h2>Yessica Christy</h2>
                                        <p>Shanxi, China</p>
                                    </div>
                                </div>
                                <div className="rating">
                                    <h4 className='text-[16px] text-[#0B132A] font-normal font-rubik'>4.5</h4>
                                    <FaStar className='text-[#FEA250]'/>
                                </div>
                            </div>
                            <div className="comment mt-[8px]">
                                <p className='lg:w-[340px]'>
                                “I like it because I like to travel far and still can connect with high speed.”.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='single_slide'>
                            <div className="head">
                                <div className="profile">
                                    <img src="images/kim.png" alt="robert" />
                                    <div className="name">
                                        <h2>Kim Young Jou</h2>
                                        <p>Seoul, South Korea</p>
                                    </div>
                                </div>
                                <div className="rating">
                                    <h4 className='text-[16px] text-[#0B132A] font-normal font-rubik'>4.5</h4>
                                    <FaStar className='text-[#FEA250]'/>
                                </div>
                            </div>
                            <div className="comment mt-[8px]">
                                <p className='lg:w-[340px]'>
                                “This is very unusual for my business that currently requires a virtual private network that has high security.”.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='single_slide'>
                            <div className="head">
                                <div className="profile">
                                    <img src="images/kim.png" alt="robert" />
                                    <div className="name">
                                        <h2>Illias Graham</h2>
                                        <p>Brasil </p>
                                    </div>
                                </div>
                                <div className="rating">
                                    <h4 className='text-[16px] text-[#0B132A] font-normal font-rubik'>4.5</h4>
                                    <FaStar className='text-[#FEA250]'/>
                                </div>
                            </div>
                            <div className="comment mt-[8px]">
                                <p className='lg:w-[340px]'>
                                “This is very unusual for my business that currently requires a virtual private network that has high security.”.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='single_slide'>
                            <div className="head">
                                <div className="profile">
                                    <img src="images/christy.png" alt="robert" />
                                    <div className="name">
                                        <h2>Monica Jackson</h2>
                                        <p>NewYork , USA</p>
                                    </div>
                                </div>
                                <div className="rating">
                                    <h4 className='text-[16px] text-[#0B132A] font-normal font-rubik'>4.5</h4>
                                    <FaStar className='text-[#FEA250]'/>
                                </div>
                            </div>
                            <div className="comment mt-[8px]">
                                <p className='lg:w-[340px]'>
                                “This is very unusual for my business that currently requires a virtual private network that has high security.”.
                                </p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    </section>
  )
}

export default Myslider