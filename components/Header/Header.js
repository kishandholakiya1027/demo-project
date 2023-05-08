'use client'
import { AppBar, Avatar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import { AccountCircle } from "@mui/icons-material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Image from "next/image";
import { textAlign } from "@mui/system";
import { useState } from "react";
const drawerWidth = 280;
const navItems = ['Home', 'Treat me now', 'Schedule visit', 'Messages'];

const Header = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const container = window !== undefined ? () => window().document.body : undefined;

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                ZEALTHY
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    return (
        <>
            <Box sx={{ flexGrow: 1 }} >
                <AppBar component="nav" sx={{ minHeight: { md: '108px' }, justifyContent: 'center', background: 'white', color: '#1B1B1B', boxShadow: 'none', borderBottom: '1px solid #CCCCCC' }}>
                    <Toolbar sx={{ height: '100%', p: { md: '0 26px !important', xl: '0 56px !important' } }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{ mr: { xl: '56px', lg: '26px', sm: '16px', xs: '0' } }}
                        >
                            <KeyboardBackspaceIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, fontWeight: 900, fontSize: '20px', lineHeight: '24px', textAlign: { xs: 'center', sm: 'left' } }}
                        >
                            ZEALTHY
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            {
                                navItems.map((item, i) => (
                                    <>
                                        <Button sx={{ color: '#1B1B1B', textTransform: "capitalize", paddingX: '17.5px', fontWeight: 500, fontSize: '16px', lineHeight: '24px' }}>{item}</Button>
                                    </>
                                ))
                            }
                        </Box>
                        <Box sx={{ display: { xs: 'none', md: 'block' }, ml: '56px' }}>
                            <Avatar sx={{ background: '#8ACDA0' }}>
                                <Image src="/User_icon.png" width={24} height={24} />
                            </Avatar>
                        </Box>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    );
};

export default Header;