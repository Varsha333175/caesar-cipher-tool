import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import styled from '@emotion/styled';
import SchoolIcon from '@mui/icons-material/School';

const Nav = styled.nav`
  flex-grow: 1;
`;

const Navigation = () => (
  <Nav>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <SchoolIcon fontSize="large" /> CyberSecurity Caesar Cipher Tool
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/tool">Tool</Button>
        <Button color="inherit" component={Link} to="/explanation">Explanation</Button>
        <Button color="inherit" component={Link} to="/applications">Applications</Button>
        <Button color="inherit" component={Link} to="/resources">Resources</Button>
      </Toolbar>
    </AppBar>
  </Nav>
);

export default Navigation;
