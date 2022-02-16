import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className='home'>
        <h2 className='heading'>Benja-MAN</h2>

        <div className='nav_list'>
          <Link to=''>
            {' '}
            <h4 className='ta'>Home</h4>
          </Link>
          <Link to='/Explore'>
            {' '}
            <h4 className='ta'>Explore</h4>
          </Link>
          <Link to='/login'>
            <h4 className='ta'>Add your Place</h4>
          </Link>
        </div>
      </div>

      <img
        className='photodisp'
        src={require('./photo/home.svg').default}
        alt=''
      />
      <div className='disp'>
        <h3 className='hea1'>
          Get into some Culture, Stay Connected to outer world
        </h3>
        <h1 className='hea2'>
          Explore
          <br />
          what we humans created
        </h1>
      </div>
    </div>
  )
}

export default Home
