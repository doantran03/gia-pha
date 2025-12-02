import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from "@/features/Auth/userSlice";

Nav.propTypes = {
    toggleSidebar: PropTypes.func,
};

function Nav({ toggleSidebar }) {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        handleClose();
        dispatch(logout());
    };

    return (
        <div className='app-header'>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton color="inherit" onClick={toggleSidebar} >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" sx={{ ml: 1, flexGrow: 1 }}>Gia Phả</Typography>
            </Box>
            <Box>
                <Tooltip title="Open settings">
                    <IconButton color="inherit" onClick={handleMenu} sx={{ p: 0 }}>
                        <Avatar src={'/static/images/avatar/2.jpg'} alt={'User'}/>
                        <Typography sx={{ ml: 1 }}>Trần Công Đoàn</Typography>
                    </IconButton>
                </Tooltip>

                <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    keepMounted
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
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
            </Box>
        </div>
    );
}

export default Nav;