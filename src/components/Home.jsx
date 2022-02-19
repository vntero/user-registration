import React from 'react'
import { Button } from '@nextui-org/react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='centered'>
        <Link to='/signup'><Button color='error'>Sign Up</Button></Link>
        <Link to='/signin'><Button color='secondary'>Sign In</Button></Link>
        <Link to='/welcome'><Button color='success'>Protected</Button></Link>
    </div>
  )
}

export default Home