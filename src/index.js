import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter} from "react-router-dom";
import App from './App';
import '../src/assets/styles/Accordian.css'
import '../src/assets/styles/Testimonal.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
     <BrowserRouter  basename="/react_home" >
     <App />
     </BrowserRouter>
  </React.StrictMode>
);

