'use client'
import { Box, IconButton, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Typography } from "@mui/material";
import Card from "./card";
import ArrowRightAltSharpIcon from '@mui/icons-material/ArrowRightAltSharp';
import Carousel from "react-material-ui-carousel";
import Image from "next/image";


const userData: {name: string, time: string, image: string}[] = [{
  name: 'Join [Video] Visit with Dr. Mark Greene',
  time: 'Today at 4:00 PM ET',
  image: '/user.png'
},
{
  name: 'Upcoming [Video] Visit with Dr. Mark Greene',
  time: 'Wednesday at 4:00 PM ET',
  image: '/user.png'
}]

const ActionMenu: {name: string, description: string, icon: string}[] = [{
  name: 'Schedule a follow-up appointment',
  description: 'Your Zealthy provider requested you schedule a follow-up during your last visit.',
  icon: '/Schedule.png'
},
{
  name: 'Reschedule Zealthy visit',
  description: 'We want to meet with you! Please go ahead and reschedule your visit.',
  icon: '/Reschedule.png'
},
{
  name: 'Schedule lab work or upload recent labs',
  description: 'Zealthy ordered lab work for you. Schedule an appointment at a Quest or Labcorp location near you, or upload recent lab work that you completed.',
  icon: '/Filter.png'
},
{
  name: 'Please update payment method',
  description: 'Your card information is no longer valid. To continue your Zealthy membership, please update your payment method.',
  icon: '/payment.png'
},
{
  name: 'Complete your anxiety or depression check-in ',
  description: 'Your insurance information appears to be inactive. If it recently changed, please update here.',
  icon: '/plus.png'
},
{
  name: 'Complete your anxiety or depression check-in ',
  description: 'It’s time for your anxiety or depression check-in. Please help us stay on top of your mental health journey.',
  icon: '/Anxiety.png'
},
{
  name: 'Schedule your next coaching session',
  description: 'Stay on top of your goals by scheduling your next 1:1 session with your [weight loss/mental health] coach.',
  icon: '/Coaching.png'
},
{
  name: 'Establish primary care with Zealthy',
  description: 'Did you know that we can become your primary care provider? Schedule your first video visit with a Zealthy provider to get fully onboarded. ',
  icon: '/Establish.png'
},
]

const GetCareData: {name: string, description: string, icon: string}[] = [{
  name: 'Schedule a visit or request a new prescription',
  description: 'Same/next-day appointments over video, phone or message',
  icon: '/phone.png'
},
{
  name: 'Messages',
  description: 'Feel free to message with our virtual care team 24/7 and get answers',
  icon: '/health.png'
},
{
  name: 'Medication, prescription renewals & delivery',
  description: 'Manage prescriptions, request renewals, and track the delivery of medications',
  icon: '/delivery.png'
},
{
  name: 'My health',
  description: 'View lab results, past appointments, vitals, and request records',
  icon: '/health.png'
},
{
  name: 'Personal information',
  description: 'Update insurance, billing, password, and more',
  icon: '/information.png'
},
]

const itemData: {img: string, title: string}[] = [{
  img: '/silder_1.png',
  title: 'Try Zealthy’s weight loss program. We predict you’ll lose at least [30] lbs to achieve a weight of [170] lbs. '
},
{
  img: '/silder_3.png',
  title: 'Achieve better long-term outcomes through our mental health program (with coaching + medication options). '
},
{
  img: '/silder_4.png',
  title: 'Our Zealthy primary care providers offer exceptional,  individualized care for general health concerns.'
}]

export default function Dashboard() {

  const CarouselItem = (item:any, index:any) => {
    return <ImageListItem key={index} cols={1}>
    <Image
      src={`${item.img}`}
      alt={item.title}
      loading="lazy"
      width={568}
      height={400}
    />
    <ImageListItemBar
      title={<Box sx={{ 
        fontSize: { xs: '12px', md: '16px' },
        lineHeight: { xs: '16px', md: '24px' },
        letterSpacing: { xs: '0.004em', md: '0.3px' },
        color: '#FFFFFF',
        width: { xs: '216px', md: '472px' }, padding: '0', height: '48px', whiteSpace: 'pre-line'}}>{item.title}</Box>}
      sx={{ whiteSpace: 'pre-wrap !important' , background:'rgba(0, 33, 11, 0.8)', WebkitLineClamp: "2",
      alignItems: 'center',
      padding: '21px 24px 21px 9px',
      gap: '12px',
      height:'96px'
    }}
      actionIcon={
        <IconButton
          sx={{ color: 'rgba(255, 255, 255, 0.54)', p: '0'
        }}
          aria-label={`info about ${item.title}`}
        >
          <ArrowRightAltSharpIcon sx={{ color: '#FFFFFF' }} />
        </IconButton>
      }
    />
  </ImageListItem>
  }
  return (
    <Box component="main" sx={{ p: { xs: '114px 25px 20px 22px', md: '222px 25px 20px 22px' }, display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ maxWidth: '568px', width: '100%', }}>
        <Typography variant="h1" sx={{ fontWeight: 700, fontSize: { xs: '20px', md: '28px' }, lineHeight: '40px', mb: { xs: '24px', md: '48px' }, fontFamily: 'Abril Text' }}>Hi, [Kyle]! </Typography>
        <Box sx={{ mb: '48px' }}>
          {
            userData.map((item, i) => (
              <Card key={i} name={item.name} type={'sm'} time={item.time} avatar={item.image} style={{ width: '100%', background: '#00210B', borderRadius: '16px', p: '24px', mb: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #00210B' }} color={'white'} />
            ))
          }
        </Box>
        <Typography sx={{ fontWeight: 600, fontSize: '18px', lineHeight: '26px', mb: '16px', fontFamily: 'Inter' }}>Action items</Typography>
        <Box sx={{ mb: '48px' }}>
          {
            ActionMenu.map((item, i) => (              
              <Card key={i} name={item.name} time={item.description} avatar={item.icon} style={{ width: '100%', background: '#FFEAE3', borderRadius: '16px', p: { xs: '16px', md: '24px' }, mb: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #CCCCCC' }} color={'#1B1B1B'} />
            ))
          }
        </Box>
        <Typography sx={{ fontWeight: 600, fontSize: '18px', lineHeight: '26px', mb: '16px', fontFamily: 'Inter' }}>Get the care you need</Typography>
        <Box sx={{ mb: '48px' }}>
          {
            GetCareData.map((item, i) => (
              <Card key={i} name={item.name} time={item.description} avatar={item.icon} style={{ width: '100%', background: 'white', borderRadius: '16px', p: { xs: '16px', md: '24px' }, mb: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #CCCCCC' }} color={'#1B1B1B'} />
            ))
          }
        </Box>
        <Typography sx={{ fontWeight: 600, fontSize: '18px', lineHeight: '26px', mb: '16px', fontFamily: 'Inter' }}>Explore our offerings</Typography>

        <ImageList sx={{ width : { xs: 312, md: 568 }, height: { xs: 260, md: 450 } , display: 'block' }}>
          <Carousel indicatorContainerProps={{
              style: { textAlign:'left', zIndex:1}
            }}
            navButtonsAlwaysInvisible={true}
            indicatorIconButtonProps={{
              style: {
                color:'#CCCCCC'
              }
            }}
            activeIndicatorIconButtonProps={{
              style: {
                color:'#00872B'
              }
            }} 
            autoPlay={true}
            interval={5000}
            >

            {itemData.map((item, index) => (
              CarouselItem(item, index)
            ))}
          </Carousel>
        </ImageList>
      </Box>
    </Box>
  )
}
