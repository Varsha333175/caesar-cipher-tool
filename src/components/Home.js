import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import HomeIcon from '@mui/icons-material/Home';
import cipherImage from '../assets/download.png';

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url(${cipherImage}) no-repeat center center/cover;
  position: relative;
  color: #fff;
  text-align: center;
  padding: 50px 20px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
`;

const Home = () => (
  <Container maxWidth="lg">
    <Hero>
      <Content>
        <Typography variant="h2" component="h1" gutterBottom>
          <HomeIcon fontSize="large" /> Welcome to the CyberArk Caesar Cipher Tool
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Learn about the Caesar Cipher, try it yourself, and explore its history and applications.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/tool" style={{ marginTop: '20px' }}>
          Try the Cipher Tool
        </Button>
      </Content>
    </Hero>
  </Container>
);

export default Home;
