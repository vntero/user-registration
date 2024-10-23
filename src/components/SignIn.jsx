import React from 'react';
import { Input, Card, Spacer, Text, Button } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';

function SignIn() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios.post('http://localhost:5005/verify-user', data);
  };

  return (
    <div className="centered">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card css={{ mw: '400px' }}>
          <Text h2>Enter your credentials</Text>
          <br />
          <Input
            underlined
            labelPlaceholder="Email address"
            type="email"
            name="email"
            {...register('email')}
          />
          <Spacer y={1.5} />
          <Input.Password
            underlined
            labelPlaceholder="Password"
            name="password"
            {...register('password')}
          />
          <Spacer y={1.5} />
          <Button color="secondary">Sign In</Button>
          <Spacer y={1.5} />
          <Text>
            Don't have an account yet? <Link to="/signup">Register</Link>
          </Text>

          <Link to="/" className="centered">
            <img
              src="/images/home.png"
              alt="homepage"
              style={{ height: 30, width: 30 }}
            />
          </Link>
        </Card>
      </form>
    </div>
  );
}

export default SignIn;
