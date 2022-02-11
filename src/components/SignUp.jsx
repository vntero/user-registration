import React from 'react'
import { Input, Card, Spacer, Text, Button } from '@nextui-org/react';


function SignUp() {
  return (
    <form action="">
        <Card css={{ mw: "400px" }}>
            <Text h2>Create an account</Text>
            <br />
            <Input clearable underlined placeholder="Enter your name" />
            <Spacer y={1.5} />
            <Input clearable underlined placeholder="What's your email address?" />
            <Spacer y={1.5} />
            <Input.Password underlined labelPlaceholder="Password" />
            <Spacer y={1.5} />
            <Input.Password underlined labelPlaceholder="Confirm password" />
            <Spacer y={1.5} />
            <Button>Sign Up</Button>
            <Spacer y={1.5} />
        </Card>
    </form>
    
  )
}

export default SignUp