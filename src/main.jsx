import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Course} from './Course/Course.jsx'
import image_1 from '../src/assets/image_1.jpg'
import image_2 from '../src/assets/image_2.jpg'
import image_3 from '../src/assets/image_3.jpg'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Course name='HTML Product'  price= {200} image={image_1} rating={4.5} show={true}/>
      <Course name='CSS Product' price= {100} image={image_2} rating={3.2} show={true}/>
      <Course name='JS Product' price= {50} image={image_3} rating={4.7} show={true}/>
  </StrictMode>,
)
