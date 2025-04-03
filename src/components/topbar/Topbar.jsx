import * as React from 'react';
import { useState } from 'react';
import './topbar.css'
import { DensityMedium, HowToReg, Login, Person, Search, ShoppingCart } from '@mui/icons-material'
import { Link } from "react-router-dom";
import { Box, Divider, List, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { SidemenuLinks, SidemenuLinksBottom, TopbarMenuLink } from '../../dummyData';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../redux/apiCalls';

const Topbar = () => {
    const quantity = useSelector((state) => state.clientCart.products);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.client.currentUser);
    const [state, setState] = useState({ top: false, left: false, bottom: false, right: false,});

    const ITEM_HEIGHT = 48;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLogout = (e) => {
        e.preventDefault();
        userLogout(dispatch);
    }
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250}}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className="sidebar_logo">
                <div className="sidebar_logo_desc">
                    <img src='/assets/zeal-logo-2.png' alt='ZEAL ENERGY' />
                </div>
            </div>
        
            <Divider />
        
            <List>
                {SidemenuLinks.map((link) => (
                    <ListItem key={link.id} disablePadding>
                        <Link to={`${link.location}`} className='link-gray'>
                            <ListItemButton  sx={{width: 240}} >
                                <ListItemIcon>
                                {link.icon}
                                </ListItemIcon>
                                <ListItemText sx={{fontSize: 14,}}>{link.text}</ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {TopbarMenuLink.map((link) => (
                    <ListItem key={link.id}  disablePadding>
                        <Link to={`${link.location}`} className='link-gray'>
                            <ListItemButton sx={{width: 240}} >
                                <ListItemIcon>
                                {link.icon}
                                </ListItemIcon>
                                <ListItemText sx={{fontSize: 14,}}>{link.text}</ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {SidemenuLinksBottom.map((link) => (
                    <ListItem key={link.id} disablePadding>
                        <Link to={`${link.location}`} className='link-gray'>
                            <ListItemButton sx={{width: 240}} >
                                <ListItemIcon>
                                    {link.icon}
                                </ListItemIcon>
                                <ListItemText sx={{fontSize: 14,}}>{link.text}</ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
            {user && 
                <>
                    <Divider />
                    <List>
                        <ListItem disabledPadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <button className='logoutButton' onClick={handleLogout} >LOGOUT</button>
                                </ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </>
            }
        </Box>
    );

  return (
    <div className="navbarComponent">
        <div className="navbarWrapper">
            <div className="wrapper">
                <div className="navbarLeft">
                    <div className="navbarMenu-Icon">
                        {['left'].map((anchor) => (
                            <React.Fragment key={anchor} >
                                <DensityMedium sx={{fontSize: 30,}} onClick={toggleDrawer(anchor, true)} />   
                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >
                                    {list(anchor)}
                                </Drawer>
                            </React.Fragment>
                        ))} 
                    </div>
                    <div className="navbar-logo">
                        <Link to='/' className='link-main'>
                            <img src='/assets/zeal-logo-5.png' alt="ZEAL" className='company-logo' />
                        </Link>
                    </div>
                </div>

                <div className="navbarCenter">
                    <div className="navbar_SearchBar">
                        
                        <input type='text'
                            placeholder='Search here...'
                        />
                        <div className="navbar_SearchIcon">
                            <Link to='/products' className='link-flex'>
                                <Search />
                            </Link>
                        </div>
                    </div>
                    <div className="navbarCenter-flag">
                        <img src='/assets/Tanzania.png' alt='TZ' />
                    </div>
                </div>

                <div className="navbarRight">
                    <div className="navbarRight-Components">
                        <div className="navbarRight_flag">
                            <img src='/assets/Tanzania.png' alt='TZ' />
                        </div>
                        <div className="navbarRight_component navbarRight-first">
                            <div className='Login_text'>
                                <p onMouseEnter={handleClick}>Login or </p>                    
                            </div>
                            <div className='Register_text'>
                                <p onMouseEnter={handleClick}>REGISTER </p>                    
                            </div>

                            <div className="registerIcon">
                                <Person sx={{fontSize: 30}} onClick={handleClick} />
                            </div>
                            <Menu
                                id="long-menu"
                                MenuListProps={{
                                    'aria-labelledby': 'long-button',
                                }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                PaperProps={{
                                    style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: '17ch',
                                    },
                                }}
                            >          
                                <Link to="/register" className='link-main'>
                                    <MenuItem  onClick={handleClose}>
                                        <div className="menuIconItem">
                                            <HowToReg sx={{fontSize: 22,}} /> Register
                                        </div>
                                    </MenuItem>
                                </Link>

                                <Link to="/login" className='link-main'>
                                    <MenuItem  onClick={handleClose}>
                                        <div className="menuIconItem">
                                            <Login sx={{fontSize: 22,}} /> Login
                                        </div>
                                    </MenuItem>
                                </Link>   
                            </Menu>
                        </div>

                        <div className="navbarRight_component">
                            <Link to='/cart' className='link-main'>
                                <div className="navbarCart">
                                    <ShoppingCart sx={{fontSize: 34}} />
                                    <div className="cart_items">
                                        <div className="cart-itemNo">
                                            <p>{quantity.length}</p>
                                        </div>
                                        <p>Item(s)</p>
                                    </div>
                                </div>
                            </Link>

                            <Link to='/cart' className='link-main'>
                                <div className="navbarCart_Icon">
                                    <ShoppingCart sx={{fontSize: 30}} />
                                    <div className="navbarCart_IconItems">
                                        <p>{quantity.length}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="navigation_links">
                <div className="navigation_links_item">
                    <Link to='/products' className='link-main navigation_links-p'>
                        <p>Products</p>
                    </Link>
                </div>
                <div className="navigation_links_item">
                    <Link to='/services-and-installations' className='link-main navigation_links-p'>
                        <p>Services & Installations </p>
                    </Link>
                </div>
                <div className="navigation_links_item">
                    <Link to='/recycling' className='link-main navigation_links-p'>
                        <p>Recycling</p>
                    </Link>
                </div>
            </div>

            <div className="smallSearch-bar">
                <div className="smallNavbar_SearchBar">                        
                    <input type='text'
                        placeholder='Search here...'
                    />
                    <div className="navbar_SearchIcon">
                        <Link to='/products' className='link-flex'>
                            <Search />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topbar