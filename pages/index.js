import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Container from "@mui/material/Container";
import { borderRadius } from "@mui/system";
import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Home() {
  const api = 'https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=1fd91ba848ba888adfb6a9933aaf23ff'

  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
  const [location, setLocation]=useState('Texas')
  const [file, setFile]=useState(
    
  )
const [toggle, useToggle]=useState(0)
  const [yourloc, setYourloc]= useState('')

  // useEffect(
  //   ()=>{
      
  //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1fd91ba848ba888adfb6a9933aaf23ff&units=metric`)
  // .then((response) => response.json())
  // .then((data) => setFile(data));
  // useToggle(toggle+1)
  //   }
  // ,[])
 
    
      

  console.log(file)
  // console.log(navigator.geolocation.getCurrentPosition())

  // setYourloc({lat:position.coords.latitude, long:position.coords.longitude})
  // console.log(yourloc)

  // const successCallback = (position) => {
  //   console.log(position);
  // };
  
  // const errorCallback = (error) => {
  //   console.log(error);
  // };
  
  // const a = navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

 // var iconcode = file.weather[0].icon;
const handleSubmit=(e)=>{
  e.preventDefault();
  
  // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1fd91ba848ba888adfb6a9933aaf23ff&units=metric`)
  //   .then((response) => response.json())
  //   .then((data) => setFile(data))
  console.log(location)
   //// setToggle(1+toggle)
    console.log(toggle)
}
  return (
    <div >
      <h1>Weather App</h1>
      <Box
       sx={{
        margin: 'auto',
        width: '60%',
        
        padding: '10px',
        
      }}
      >
        <FormControl
          variant="standard"
          fullWidth
          className="form"
          onSubmit={handleSubmit}
        >
          <InputLabel
            htmlFor="input-with-icon-adornment"
            sx={{ alignItem: "center" }}
          >
            Search Place for weather
          </InputLabel>
          <Input
            value={location}
            id="input-with-icon-adornment"
            sx={{ borderRadius: "16px", borderColor: "secondary.main" }}
            // startAdornment={
            //   <InputAdornment position="start">
            //     <SearchIcon />
            //   </InputAdornment>
            // }
            onChange={(e)=>setLocation(e.target.value)}
          />
          <Button type="submit" onClick={handleChange}>Enter</Button>
        </FormControl>
      </Box>
          <img src="sun.png" width="150px"/>
          {/* <img src={file.weather[0].icon} width="150px"/> */}
          {/* <Image 
                src={`http://openweathermap.org/img/wn/${iconcode}@2x.png`}
             alt='/'
            width='100'
            height='100'
          /> */}
          {
          //   toggle>1 ?
          //   <>
          //   <Typography gutterBottom variant="h2" component="div">
          //   {file.name}
          // </Typography>
          // <Typography variant="h4" color="text.secondary">
          //   {file.sys.country}
          // </Typography>
          // <Typography variant="h4" color="text.secondary">
          //  {file.weather[0].description}
          // </Typography>
          // <Typography variant="h4" color="text.secondary">
          //  Temp : {file.main.temp}
          // </Typography>
          // <Typography variant="h4" color="text.secondary">
          //  Humidity : {file.main.humidity}
          // </Typography>
          // <Typography variant="h4" color="text.secondary">
          //  Feels like : {file.main.feels_like}
          // </Typography>
          // <Typography variant="h4" color="text.secondary">
          //  Pressure : {file.main.pressure}
          // </Typography>
          // </> : "rendering"
          }
       
            
    </div>
  );
}
