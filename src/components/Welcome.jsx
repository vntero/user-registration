import React from 'react'
import { Text } from '@nextui-org/react';

function Welcome() {
  return (
    <div>
      <Text h2>Welcome to the protected route. Only logged in users can access it. </Text>
    </div>
  )
}

export default Welcome