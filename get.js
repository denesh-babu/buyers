// import { Table } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import React from 'react'
import { useEffect,useState } from 'react';

function Get() {


    const [data,setData] = useState([])

    useEffect(() => { 
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            console.log("Getting from ::::",res.data)
            setData(res.data)
        }).catch(err => console.log(err))
      },[])


      const arr = data.map((data, index) => {
        return (
          <TableRow >
          <TableCell>{data.id}</TableCell>
          <TableCell>{data.title}</TableCell>
          <TableCell>{data.body}</TableCell>
          </TableRow>
        )
      })


  return (
    <>
   
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Body</TableCell>
            
              
            </TableRow>
        </TableHead>
        <TableBody>
                   
         
             
         {arr}  
              
            
           
        </TableBody>
    </Table>
    </>
  )
}

export default Get