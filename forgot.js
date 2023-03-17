
import React from 'react'
import { Typography, Grid, TextField, Button, Card, CardContent,Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'

import * as yup from 'yup'

import {Formik,Form,Field,ErrorMessage} from 'formik'
function Forgot() {
  const navigate = useNavigate()
  
   
  
  
  const initialValues={
     
     email:'',
    
    
    
  }
  const validationSchema=yup.object().shape({
   
    email:yup.string().email().required(""), 
    
   
   
  })
 const onSubmit=(value,props)=>{
    console.log(value)
    navigate('/login')
 }
  return (
    <div className='Sign-Up'>
      {/* <Typography gutterBottom variant="h4" align="center"sx={{}}>
        
      </Typography> */}
      <Box sx={{width:'100%',height:'100vh',display:'flex',backgroundColor:' #f2f2f2'}}>
      <Box sx={{width:'50%',height:'100vh',backgroundImage: 'url(https://bl-i.thgim.com/public/news/ivhmzl/article65885804.ece/alternates/FREE_1200/engg.jpg)', backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', }}>

      </Box>
      <Box sx={{width:'50%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Grid>
        <Card style={{ maxWidth: 350, padding: "10px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" sx={{fontFamily:"sans-serif",color:'#003399',fontWeight:'700',display:'flex',alignItems:'center',justifyContent:"center"}} >
              Forgot password
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
           
            </Typography>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
              {(props)=>(
                <Form>
                    <Grid container spacing={1}>
               
                <Grid item xs={12}>
                  <Field as={TextField} name='email' type="email" placeholder="Enter email" helperText={<ErrorMessage name="email" />} label="Email"  variant="standard" sx={{width:'290px'}} required />
                </Grid>
                
               
                <Grid item xs={12} sx={{display:'flex',alignItems:'center',justifyContent:"center",margin:'20px'}}>
                  <Button  type="submit" variant="contained"  sx={{width:'120px',height:'35px',backgroundColor:" #003399"}}>Forgot</Button>
                  
                </Grid>
                <Box sx={{display:'flex',flexDirection:'row',marginLeft:'70px'}}>
                <Typography sx={{fontSize:'15px'}}></Typography>
                <Typography sx={{fontSize:'15px',fontWeight:'600',marginLeft:'35px',color:'#003399'}}><a href='readbtn'> New password</a></Typography>
                </Box>
              </Grid>
                </Form>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Grid>
      </Box>
      </Box>
    </div>
  )
}

export default Forgot