import React from 'react'
import { Input, Card, Spacer, Text, Button } from '@nextui-org/react';
import {useForm} from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    
    const navigate = useNavigate()

    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        axios.post("http://localhost:5005/create-user", data)
        navigate('/signin')
    }

  return (
      <div className='centered'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card css={{ mw: "400px" }}>
                    <Text h2>Create an account</Text>
                    <br />
                    <Input underlined labelPlaceholder="Enter your name" type='text' name='name' {...register('name')}/>
                    <Spacer y={1.5} />
                    <Input underlined labelPlaceholder="What's your email address?" type='email' name='email' {...register('email')}/>
                    <Spacer y={1.5} />
                    <Input.Password underlined labelPlaceholder="Password" name='password' {...register('password')}/>
                    <Spacer y={1.5} />
                    <Button color='error'>Sign Up</Button>
                    <Spacer y={1.5} />
                    <Text>Already have an account? <Link to='/signin'>Sign In</Link></Text>
                    <Link to='/' className='centered'><img src="/images/home.png" alt="homepage" style={{height: 30, width:30}}/></Link>
                </Card>
            </form>
      </div>
  )
}

export default SignUp