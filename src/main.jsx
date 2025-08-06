import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import {Course} from './Course/Course.jsx'
// import image_1 from '../src/assets/image_1.jpg'
// import image_2 from '../src/assets/image_2.jpg'
// import image_3 from '../src/assets/image_3.jpg'
import CourseList from "./Course/CourseList.jsx";
import App from "./App.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App/>
  </StrictMode>
)
