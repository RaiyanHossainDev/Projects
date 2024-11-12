import React from 'react'
import './Image.css'

const Image = () => {

  return (
    <section id='raiyan_image'>
        <div className="container">
            <div className="img_row">
                <img src="images/netflix.png" alt="netflix" />
                <img src="images/reddir.png" alt="reddit" />
                <img src="images/amazon.png" alt="amazon" />
                <img src="images/discord.png" alt="discord" />
                <img src="images/spotify.png" alt="spotify" />
            </div>
        </div>
    </section>
  )
}

export default Image