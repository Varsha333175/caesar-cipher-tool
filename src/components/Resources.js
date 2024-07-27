import React from 'react';
import { Container, Typography, Box, Link as MuiLink, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import styled from '@emotion/styled';
import BookIcon from '@mui/icons-material/Book';
import SchoolIcon from '@mui/icons-material/School';
import PublicIcon from '@mui/icons-material/Public';
import YouTubeIcon from '@mui/icons-material/YouTube';

const ResourcesContainer = styled(Box)`
  padding: 40px 20px;
  background-color: #ecf0f1;
  min-height: 100vh;
`;

const ResourceTitle = styled(Typography)`
  margin-bottom: 20px;
  color: #2c3e50;
`;

const StyledList = styled(List)`
  margin-top: 20px;
`;

const StyledLink = styled(MuiLink)`
  color: #2980b9;

  &:visited {
    color: #8e44ad;
  }
`;

const Resources = () => (
  <ResourcesContainer>
    <Container>
      <ResourceTitle variant="h3" align="center">Resources for Further Learning</ResourceTitle>
      <Typography variant="body1" paragraph align="center">
        Here are some resources to learn more about cryptography and the Caesar Cipher:
      </Typography>
      <StyledList>
        <ListItem>
          <ListItemIcon>
            <BookIcon style={{ color: '#2c3e50' }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <StyledLink href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                "Cryptography and Network Security" by William Stallings
              </StyledLink>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SchoolIcon style={{ color: '#2c3e50' }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <StyledLink href="https://www.coursera.org/learn/crypto" target="_blank" rel="noopener noreferrer">
                "Cryptography I" by Stanford University on Coursera
              </StyledLink>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <PublicIcon style={{ color: '#2c3e50' }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <StyledLink href="https://www.khanacademy.org/computing/computer-science/cryptography" target="_blank" rel="noopener noreferrer">
                Khan Academy - Cryptography
              </StyledLink>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <YouTubeIcon style={{ color: '#2c3e50' }} />
          </ListItemIcon>
          <ListItemText
            primary={
              <StyledLink href="https://www.youtube.com/watch?v=sMOZf4GN3oc" target="_blank" rel="noopener noreferrer">
                Caesar Cipher Explained on YouTube
              </StyledLink>
            }
          />
        </ListItem>
      </StyledList>
    </Container>
  </ResourcesContainer>
);

export default Resources;
