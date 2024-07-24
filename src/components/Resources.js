import React from 'react';
import { Container, Typography } from '@mui/material';
import styled from '@emotion/styled';

const ResourcesContainer = styled.div`
  padding: 20px;
`;

const Resources = () => (
  <ResourcesContainer>
    <Container>
      <Typography variant="h4" gutterBottom>Resources for Further Learning</Typography>
      <Typography variant="body1" paragraph>
        Here are some resources to learn more about cryptography and the Caesar Cipher:
        <ul>
          <li>
            Book: <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">"Cryptography and Network Security" by William Stallings</a>
          </li>
          <li>
            Online Course: <a href="https://www.coursera.org/learn/crypto" target="_blank" rel="noopener noreferrer">"Cryptography I" by Stanford University on Coursera</a>
          </li>
          <li>
            Website: <a href="https://www.khanacademy.org/computing/computer-science/cryptography" target="_blank" rel="noopener noreferrer">Khan Academy - Cryptography</a>
          </li>
          <li>
            Video: <a href="https://www.youtube.com/watch?v=sMOZf4GN3oc" target="_blank" rel="noopener noreferrer">Caesar Cipher Explained on YouTube</a>
          </li>
        </ul>
      </Typography>
    </Container>
  </ResourcesContainer>
);

export default Resources;
