import React from 'react'
import { Input, Card, Spacer, Text, Button } from '@nextui-org/react';
import useForm from 'react-hook-form';

function SignIn() {
  return (
    <form action="">
        <Card css={{ mw: "400px" }}>
            <Text h2>Enter your credentials</Text>
            <br />
            <Input clearable underlined placeholder="Email address" name='email'/>
            <Spacer y={1.5} />
            <Input.Password underlined labelPlaceholder="Password" name='password'/>
            <Spacer y={1.5} />
            <Button>Sign In</Button>
            <Spacer y={1.5} />
        </Card>
    </form>
  )
}

export default SignIn