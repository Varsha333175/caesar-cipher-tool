import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import styled from '@emotion/styled';

const ApplicationsContainer = styled(Box)`
  padding: 40px;
  background-color: #f9f9f9;
  min-height: 100vh;
`;

const ContentBox = styled(Paper)`
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const HeaderTypography = styled(Typography)`
  font-weight: bold;
  margin-bottom: 20px;
`;

const ParagraphTypography = styled(Typography)`
  margin-bottom: 15px;
  line-height: 1.6;
`;

const Applications = () => (
  <ApplicationsContainer>
    <Container maxWidth="md">
      <ContentBox>
        <HeaderTypography variant="h4" gutterBottom>
          Applications of the Caesar Cipher
        </HeaderTypography>
        <ParagraphTypography variant="body1" paragraph>
          The Caesar Cipher, one of the simplest and most well-known encryption techniques, has been used throughout history to protect sensitive information. Named after Julius Caesar, who reportedly used it to communicate with his officials, this cipher has historical significance in the field of cryptography.
        </ParagraphTypography>
        <ParagraphTypography variant="body1" paragraph>
          Despite its simplicity and the fact that it is not secure by modern standards, the Caesar Cipher serves as a foundational concept for understanding more complex encryption techniques. Here are some of the key applications of the Caesar Cipher:
        </ParagraphTypography>
        <Box component="ul" pl={2}>
          <li>
            <ParagraphTypography variant="body1">
              <strong>Historical Use:</strong> Julius Caesar used this cipher to protect military and governmental communications.
            </ParagraphTypography>
          </li>
          <li>
            <ParagraphTypography variant="body1">
              <strong>Educational Tool:</strong> It is widely used in educational settings to teach students the basics of cryptography and encryption.
            </ParagraphTypography>
          </li>
          <li>
            <ParagraphTypography variant="body1">
              <strong>Puzzles and Games:</strong> The Caesar Cipher is commonly used in puzzles, escape rooms, and games to add an element of cryptographic challenge.
            </ParagraphTypography>
          </li>
          <li>
            <ParagraphTypography variant="body1">
              <strong>Basic Encryption Tasks:</strong> For low-stakes scenarios where simple encryption is sufficient, the Caesar Cipher can be used to obfuscate messages.
            </ParagraphTypography>
          </li>
        </Box>
        <ParagraphTypography variant="body1" paragraph>
          While the Caesar Cipher is not suitable for securing sensitive information in today's digital age, its historical importance and educational value make it a key topic in the study of cryptography.
        </ParagraphTypography>
      </ContentBox>
    </Container>
  </ApplicationsContainer>
);

export default Applications;
