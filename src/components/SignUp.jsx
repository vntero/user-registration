import React from 'react'
import { Input, Card, Spacer, Text, Button } from '@nextui-org/react';


function SignUp() {
  return (
    <Card css={{ mw: "400px" }}>
        <Text h2>Create an account</Text>
        <br />
        <Input clearable placeholder="Enter your name" />
        <Spacer y={1.5} />
        <Input.Password bordered labelPlaceholder="Password" />
        <Spacer y={1.5} />
        <Input.Password bordered labelPlaceholder="Confirm password" />
        <Spacer y={1.5} />
        <Button>Sign Up</Button>
        <Spacer y={1.5} />
    </Card>
  )
}

export default SignUp