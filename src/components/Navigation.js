import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Nav = styled.nav`
  flex-grow: 1;
`;

const StyledAppBar = styled(AppBar)`
  background-color: #344955; /* Updated header color */
`;

const StyledButton = styled(Button)`
  color: #f5f5f5;
  margin-left: 10px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    background-color: #344955;
    color: #f5f5f5;
    padding-top: 64px; /* To ensure the menu items start below the header */
  }
`;

const Navigation = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerList = (
    <List>
      {['Home', 'Tool', 'Explanation', 'Applications', 'Resources'].map((text) => (
        <ListItem button key={text} component={Link} to={`/${text.toLowerCase()}`}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Nav>
      <StyledAppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <SchoolIcon fontSize="large" sx={{ mr: 1 }} />
            <Typography variant="h6" noWrap component="div">
              CyberSecurity Caesar Cipher Tool
            </Typography>
          </Box>
          {isMobile ? (
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <StyledButton component={Link} to="/">Home</StyledButton>
              <StyledButton component={Link} to="/tool">Tool</StyledButton>
              <StyledButton component={Link} to="/explanation">Explanation</StyledButton>
              <StyledButton component={Link} to="/applications">Applications</StyledButton>
              <StyledButton component={Link} to="/resources">Resources</StyledButton>
            </>
          )}
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerList}
      </StyledDrawer>
    </Nav>
  );
};

export default Navigation;
