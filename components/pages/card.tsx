'use client'
import { Avatar, Box, Typography } from "@mui/material";
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';

interface IProps {
    name: string
    time: string
    avatar: any
    style: any
    color: string
    type?: string
}

function Card(props:IProps) {
    const {name, time, avatar, style, color, type} = props;

    return (
        <Box sx={style}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {
                    type === 'sm' ?
                        <Avatar sx={{ mr: '24px', width: '48px', height: '48px' }} alt="Remy Sharp" src={avatar} /> :
                        <Avatar sx={{ mr: { xs: '16px', md: '24px' }, width: '48px', height: '48px' }} alt="Remy Sharp" src={avatar} />
                }
                <Box sx={{ mr: { sx: '16px', md: '24px' } }}>
                    <Typography sx={{ fontWeight: 500, color: { color }, fontSize: { xs: '12px', md: '16px' }, fontFamily: 'Inter', lineHeight: { xs: '16px', md: '24px' }, mb: '2px' }}>{name}</Typography>
                    <Typography sx={{ fontWeight: 400, color: { color }, fontSize: { xs: '12px', md: '14px' }, fontFamily: 'Inter', lineHeight: { xs: '16px', md: '20px' } }}>{time}</Typography>
                </Box>
            </Box>
            <ArrowRightAltSharpIcon sx={{ color: { color } }} />
        </Box>
    );
}

export default Card;