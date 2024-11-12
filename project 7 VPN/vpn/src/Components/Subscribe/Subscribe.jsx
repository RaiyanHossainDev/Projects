import React from 'react'
import './Subscribe.css'
import { Link } from 'react-router-dom'



const Subscribe = () => {
  return (
    <section id='raiyan_sub'>
        <div className="container">
            <div className="position">
              <div className="subs_row">
                  <div className="sub_head">
                      <h2>Subscribe Now for Get Special Features!</h2>
                      <p>Let's subscribe with us and find the fun.</p>
                  </div>
                  <div className="sub_button">
                    <Link to={''}>Subscribe</Link>
                  </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Subscribe