import React from 'react'
import {Box,Button,Typography} from '@mui/material'

function buycard() {
  return (
    
    <>
     <Box sx={{width:'300px',height:'400px',backgroundColor:'#f2f2f2'}}>
        <Box sx={{width:'300px',height:'200px'}}>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'30px'}} >
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11081.485191408394!2d79.18098938097553!3d10.895457628673027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baac53f04a3b65f%3A0xf67f341f17144917!2sAravind&#39;s%20shop!5e0!3m2!1sen!2sin!4v1677756156420!5m2!1sen!2sin" width="300px" height="200px" title="W3Schools Free Online Web Tutorials"></iframe> */}
          <iframe width="260" height="200" src="https://www.youtube.com/embed/ZiVr3CXm4js" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Box>
        <Box>
         <Typography sx={{fontWeight:'bold',fontSize:'20px',marginLeft:'20px',marginTop:'15px'}}>Title</Typography>
         <Typography sx={{fontSize:'15px',marginLeft:'20px',marginTop:'1px'}}>loreum ipsum</Typography>
        </Box>
        <Box >
            <Button sx={{backgroundColor:'blue',height:'40px',width:'90px',color:'white',marginTop:'30px',marginLeft:'30px'}}>Buy now</Button>
        </Box>
        </Box>
     </Box>
     
    </>
  )
}

export default buycard