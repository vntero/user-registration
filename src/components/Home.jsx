import React from 'react'
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='centered'>
        <Link to='/signup'><Button color='gradient'>Sign Up</Button></Link>
        <Link to='/signin'><Button color='gradient'>Sign In</Button></Link>
    </div>
  )
}

export default Home