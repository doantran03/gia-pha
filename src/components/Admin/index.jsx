import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import AppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import InboxIcon from '@mui/icons-material/Inbox';
import { logout } from "@/features/Auth/userSlice";
import { Avatar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Admin() {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const { current, isLoggedIn } = useSelector((state) => state.user);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        handleClose();
        dispatch(logout());
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
            {['Danh sách gia phả'].map((text, index) => (
                <ListItem key={text} disablePadding>
                <ListItemButton
                    component={Link}
                    to="/gia-pha"
                >
                    <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                </ListItemButton>
                </ListItem>
            ))}
            </List>
        </Box>
    );

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {isLoggedIn && (
          <>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>

            {/* Left Menu Icon */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </>
        )}

        {/* Center Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Gia Phả
        </Typography>

        {/* Right Section */}
        <Box>
          {isLoggedIn ? (
            <>
              <Tooltip title="Open settings">
                <IconButton onClick={handleMenu} sx={{ p: 0 }}>
                  <Avatar 
                    alt={current?.name || 'User'} 
                    src={current?.avatar || '/static/images/avatar/2.jpg'} 
                  />
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
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Box sx={{ display: 'flex', columnGap: '20px' }}>
              <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="h6" sx={{ cursor: 'pointer' }}>
                  Login
                </Typography>
              </Link>
              <Link to="/register" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography variant="h6" sx={{ cursor: 'pointer' }}>
                  Register
                </Typography>
              </Link>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Admin;
