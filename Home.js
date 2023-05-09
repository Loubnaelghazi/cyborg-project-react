import './home.css'
 import React from 'react'
 import {
   Hero,
   MostPopular,
   Library,
 } from '../../components/index.js';

 const Home = () => {
   return (
     <>
       <Hero />
       <MostPopular />
       <Library />
     </>
   );
 }
 
 export default Home
 