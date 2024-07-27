import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import HomeIcon from '@mui/icons-material/Home';
import cipherImage from '../assets/ceaser.jpeg';

const Hero = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url(${cipherImage}) no-repeat center center;
  background-size: cover;
  position: relative;
  color: #fff;
  text-align: center;
  padding: 0;
  margin: 0;
  width: 100vw;
  overflow: hidden; /* Prevents the scrollbar unless necessary */

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

const Content = styled(Box)`
  position: relative;
  z-index: 2;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    padding: 0 5px;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  text-transform: none;
  border-radius: 50px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const Home = () => (
  <Container maxWidth={false} disableGutters style={{ overflow: 'hidden' }}>
    <Hero>
      <Content>
        <Typography variant="h2" component="h1" gutterBottom style={{ fontSize: '2.5rem' }}>
          <HomeIcon fontSize="large" /> Welcome to the CyberArk Caesar Cipher Tool
        </Typography>
        <Typography variant="h5" component="p" gutterBottom style={{ fontSize: '1.25rem' }}>
          Learn about the Caesar Cipher, try it yourself, and explore its history and applications.
        </Typography>
        <StyledButton component={Link} to="/tool">
          Try the Cipher Tool
        </StyledButton>
      </Content>
    </Hero>
  </Container>
);

export default Home;
