import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Admin() {
  const [isLogin, setIsLogin] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left Menu Icon */}
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        {/* Center Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Gia Phả
        </Typography>

        {/* Right Section */}
        <Box>
          {isLogin ? (
            <>
              <Tooltip title="Open settings">
                <IconButton onClick={handleMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    setIsLogin(false);
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Link to="/login"  style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h6" sx={{ cursor: 'pointer' }}>
                Login
              </Typography>
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Admin;
