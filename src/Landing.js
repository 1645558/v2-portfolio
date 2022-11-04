import React from 'react'
import SouthIcon from '@mui/icons-material/South';

function Landing() {
  return (
    <section className='one'>
          <div className='header'>
            Hey! I'm Connor
          </div>
          <div className='header-2'>
            I'm a Full Stack Developer.
          </div>
          <div className='header-3' >
            Sroll to see my work
            <SouthIcon />
          </div>
          <span className='vertical-line'></span>
        </section>
  )
}

export default Landing