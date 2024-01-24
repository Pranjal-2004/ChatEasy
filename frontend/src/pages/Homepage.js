import React from 'react'
import { Box, Container, Text, Tab, Tabs, TabList,TabPanels,TabPanel } from "@chakra-ui/react"
import "./homepage.css"
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'
const Homepage = () => {
  return (
    <Container maxW='xl' centerContent >
      <Box d='flex'
        justifyContent='center'
        textAlign={'center'}
        p={3}
        bg='white'
        w='100%'
        gap='50px'
        m="60px 0 15px 0"
        borderRadius='lg'
        borderWidth='1px'
      ><Text fontSize='4xl'
        color='black'>
          Chatting Application
        </Text>
      </Box>
      <Box bg={'white'} w={'100%'} p={4} borderRadius={'lg'} color={'black'} borderWidth={'1px'}>
        <Tabs variant='soft-rounded'>
          <TabList mb={'1em'}>
            <Tab width={'50%'}>Login</Tab>
            <Tab width={'50%'}>Sing Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel><Login/></TabPanel>
            <TabPanel><Signup/></TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default Homepage

/*
<Box>
        <div className='Container'>
          <div className='left'>
            <div className='imag'>
              <img src='https://img.freepik.com/premium-vector/man-chating-with-smartphone_24877-75219.jpg?w=2000' alt="" />
            </div>
          </div>
          <div className='right'>
          </div>
        </div>
      </Box>
*/