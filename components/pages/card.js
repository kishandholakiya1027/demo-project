'use client'
import { Avatar, Box, Typography } from "@mui/material";
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';

function Card({name, time, avatar, style, color, type}) {
    return (
        <Box sx={style}>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                { 
                    type === 'sm' ? 
                    <Avatar sx={{mr: '24px', width: '48px', height: '48px' }} alt="Remy Sharp" src={avatar} /> :
                    <Avatar sx={{mr: {xs: '16px', md: '24px'}, width: '48px', height: '48px' }} alt="Remy Sharp" src={avatar} />
                }
                <Box sx={{ mr: {sx: '16px', md: '24px'} }}>
                    <Typography sx={{ fontWeight: 500, color: {color}, fontSize: {xs: '12px', md: '16px'}, lineHeight: {xs: '16px', md: '24px'}, mb: '2px' }}>{name}</Typography>
                    <Typography sx={{ fontWeight: 500, color: {color}, fontSize: {xs: '12px', md: '16px'}, lineHeight: {xs: '16px', md: '24px'} }}>{time}</Typography>
                </Box>
            </Box>
            <ArrowRightAltSharpIcon sx={{ color: {color} }} />
        </Box>
    );
}

export default Card;