import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import HomeIcon from '@mui/icons-material/Home';
import cipherImage from '../assets/download.png';

const Hero = styled.div`
  padding: 50px 20px;
  text-align: center;
  background: #f5f5f5;
`;

const Home = () => (
  <Container>
    <Hero>
      <Typography variant="h2" component="h1" gutterBottom>
        <HomeIcon fontSize="large" /> Welcome to the CyberArk Caesar Cipher Tool
      </Typography>
      <Typography variant="h5" component="p" gutterBottom>
        Learn about the Caesar Cipher, try it yourself, and explore its history and applications.
      </Typography>
      <img src={cipherImage} alt="Caesar Cipher Example" style={{ width: '100%', maxWidth: '400px', margin: '20px 0' }} />
      <Button variant="contained" color="primary" component={Link} to="/tool">
        Try the Cipher Tool
      </Button>
    </Hero>
  </Container>
);

export default Home;
