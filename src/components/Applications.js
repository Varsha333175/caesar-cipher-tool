import React from 'react';
import { Container, Typography } from '@mui/material';
import styled from '@emotion/styled';

const ApplicationsContainer = styled.div`
  padding: 20px;
`;

const Applications = () => (
  <ApplicationsContainer>
    <Container>
      <Typography variant="h4" gutterBottom>Applications of the Caesar Cipher</Typography>
      <Typography variant="body1" paragraph>
        The Caesar Cipher has been used throughout history to protect sensitive information. While it may not be secure by modern standards, it serves as a foundation for understanding more complex encryption techniques.
      </Typography>
      <Typography variant="body1" paragraph>
        Today, the Caesar Cipher is primarily used for educational purposes, helping students grasp the basics of cryptography. It also finds applications in puzzles and simple encryption tasks.
      </Typography>
    </Container>
  </ApplicationsContainer>
);

export default Applications;
