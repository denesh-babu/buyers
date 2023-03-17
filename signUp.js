
import React,{useState} from 'react'
import { Typography, Grid, TextField, Button, Card, CardContent,Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import * as yup from 'yup'

import {Formik,Form,Field,ErrorMessage} from 'formik'




function SingnUp() {
  const navigate = useNavigate()
  const [firstName, setFirstName]=useState('');
  const [lastName, setLastName]=useState('');
  const [email, setEmail]=useState('');
  const [phone, setPhone]=useState('');
  const [password, setPassword]=useState('');
  const [confirmPassword, setConfirmPassword]=useState('');
  

  const postData = async () =>{
   await axios.post('',{
      firstName,
      lastName,
      email,
      phone,
      password,
      confirmPassword,})


    // console.log(firstName);
    // console.log(lastName);
    // console.log(email);
    // console.log(phone);
    // console.log(password);
    // console.log(confirmPassword);
  }
   



  
  const initialValues={
     firstName:'',
     lastName:'',
     email:'',
     phone:'',
     password:'',
     confirmPassword:'',
  }
  const validationSchema=yup.object().shape({
    firstName:yup.string().required(""), 
    lastName:yup.string().required(""), 
    email:yup.string().email().required(""), 
    phone:yup.string().min(10,"minimum should be 10").max(10,"message").required(""), 
    password:yup.string().min(6,"minimum should be 6").required(""), 
    confirmPassword:yup.string().min(6,"minimum should be 6").required(""), 
  })
 const onSubmit=(value,props)=>{
    console.log(value)
    navigate('/login')
 }
  return (
    <div className='Sign-Up'>

      <Box sx={{width:'100%',height:'100vh',display:'flex',backgroundColor:' #f2f2f2'}}>
      <Box sx={{width:'50%',height:'100vh',backgroundImage: 'url(https://bl-i.thgim.com/public/news/ivhmzl/article65885804.ece/alternates/FREE_1200/engg.jpg)', backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', }}>

      </Box>
      <Box sx={{width:'50%',height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Grid>
        <Card style={{ maxWidth: 350, padding: "10px 5px", }}>
          <CardContent>
            <Typography gutterBottom variant="h5" sx={{fontFamily:"sans-serif",color:'#003399',fontWeight:'700',display:'flex',alignItems:'center',justifyContent:"center"}} >
              Sign Up
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
           
            </Typography>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
              {(props)=>(
                <Form>
                    <Grid container spacing={1}>
                <Grid xs={12}   item>
                  <Field as={TextField} value={firstName} onChange={event => setFirstName(event.target.value)} name='firstName' placeholder="Enter first name" helperText={<ErrorMessage name="firstName" />} label="First Name" variant="standard"  sx={{width:'290px'}} required />
                </Grid>
                <Grid xs={12}  item>
                  <Field as={TextField} value={lastName} onChange={event => setLastName(event.target.value)} name='lastName' placeholder="Enter last name" helperText={<ErrorMessage name="lastName" />} label="Last Name"  variant="standard" sx={{width:'290px'}} required />
                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField} value={email} onChange={event => setEmail(event.target.value)} name='email' type="email" placeholder="Enter email" helperText={<ErrorMessage name="email" />} label="Email"  variant="standard" sx={{width:'290px'}} required />
                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField} value={phone} onChange={event => setPhone(event.target.value)} name='phone' type="phone number" placeholder="Enter phone number" helperText={<ErrorMessage name="phone" />} label="Phone"  variant="standard" sx={{width:'290px'}} required />
                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField} value={password} onChange={event => setPassword(event.target.value)} name='password' label="Password" type="password" placeholder="Enter Your Password" helperText={<ErrorMessage name="password" />}  variant="standard" sx={{width:'290px'}} required />
                </Grid>
                <Grid item xs={12}>
                  <Field as={TextField} value={confirmPassword} onChange={event => setConfirmPassword(event.target.value)} name='confirmPassword' label="confirmPassword" type="password" placeholder="Enter Your confirm Password" helperText={<ErrorMessage name="confirmPassword" />}  variant="standard" sx={{width:'290px'}} required />
                </Grid>
                <Grid item xs={12} sx={{display:'flex',alignItems:'center',justifyContent:"center",margin:'20px'}}>
                  <Button  type="submit" variant="contained" onClick={postData} sx={{width:'120px',height:'35px',backgroundColor:" #003399"}}>Sign Up</Button>
                  
                </Grid>
                <Box sx={{display:'flex',flexDirection:'row',marginLeft:'70px'}}>
                <Typography sx={{fontSize:'15px'}}>Already a member? </Typography>
                <Typography sx={{fontSize:'15px',fontWeight:'600',marginLeft:'10px',color:'#003399'}}><a href='service'>Sign in</a></Typography>
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
      </Box>
     
    </div>
  )
}

export default SingnUp