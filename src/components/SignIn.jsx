import React from 'react'
import { Input, Card, Spacer, Text, Button } from '@nextui-org/react';
import {useForm} from 'react-hook-form';

function SignIn() {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <div className='centered'>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Card css={{ mw: "400px" }}>
                <Text h2>Enter your credentials</Text>
                <br />
                <Input clearable underlined placeholder="Email address" type='email' name='email' {...register('email')}/>
                <Spacer y={1.5} />
                <Input.Password underlined labelPlaceholder="Password" name='password' {...register('password')}/>
                <Spacer y={1.5} />
                <Button>Sign In</Button>
                <Spacer y={1.5} />
            </Card>
        </form>
    </div>
  )
}

export default SignIn