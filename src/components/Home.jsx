import React from 'react'
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
        <Link to='/signup'><Button>Sign Up</Button></Link>
        <Link to='/signin'><Button>Sign In</Button></Link>
    </div>
  )
}

export default Home