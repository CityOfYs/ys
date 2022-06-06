import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Tourism from './Tourism';
import CityGovt from './routes/CityGovt';
import reportWebVitals from './reportWebVitals';
import './custom.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Citizenship from "./routes/Citizenship";
import ReactGA from "react-ga4";

ReactGA.initialize("G-9355GW9D85");
ReactGA.send("pageview");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/tourism" element={<Tourism />} />
        <Route path="citizenship-resource-center" element={<Citizenship />} />
        <Route path="/" element={<CityGovt />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
