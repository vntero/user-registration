import React from 'react'
import { Input, Card, Spacer, Text, Button } from '@nextui-org/react';
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom';

function SignUp() {
    
    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

  return (
      <div className='centered'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Card css={{ mw: "400px" }}>
                    <Text h2>Create an account</Text>
                    <br />
                    <Input clearable underlined placeholder="Enter your name" type='text' name='name' {...register('name')}/>
                    <Spacer y={1.5} />
                    <Input clearable underlined placeholder="What's your email address?" type='email' name='email' {...register('email')}/>
                    <Spacer y={1.5} />
                    <Input.Password underlined labelPlaceholder="Password" name='password' {...register('password')}/>
                    <Spacer y={1.5} />
                    <Input.Password underlined labelPlaceholder="Confirm password" name='confirmPassword' {...register('confirmPassword')}/>
                    <Spacer y={1.5} />
                    <Button color="secondary">Sign Up</Button>
                    <Spacer y={1.5} />
                    <Text>Already have an account? <Link to='/signin'>Sign In</Link></Text>
                </Card>
            </form>
      </div>
  )
}

export default SignUp