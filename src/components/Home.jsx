import React from 'react'
import { Button, Grid, Card, Text, Divider, Row,  } from '@nextui-org/react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='centered'>
        <Grid>
            <Card css={{ mw: "580px" }}>
                <Card.Header>
                  <Text b>User registration</Text>
                </Card.Header>
                <Divider/>
                <Card.Body css={{ py: '$10' }}>
                  <Text>
                    This is the Home Page. <br /> 
                    You have two buttons below. <br /> 
                    Select the desired path and follow your dreams! <br />
                    I know it could've rhymed but it didn't.
                  </Text>
                </Card.Body>
                <Divider/>
                <Card.Footer>
                  <Row justify="space-around">
                    <Link to='/signup'><Button size="sm" color='error'>Sign Up</Button></Link>
                    <Link to='/signin'><Button size="sm" color='secondary'>Sign In</Button></Link>
                    {/* <Link to='/welcome'><Button size="sm" color='success'>Protected</Button></Link> */}
                  </Row>
                </Card.Footer>
            </Card>
        </Grid>
    </div>
  )
}

export default Home