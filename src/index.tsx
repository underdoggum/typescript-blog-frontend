// Many thanks to "The Nerdy Canuck" for support and help throughout creating this simpler MERN/typescript blog: https://www.youtube.com/channel/UCmG1UbEI0iFE1tAw2SyvvXg

import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";
import Application from './application';

ReactDOM.render(
  <Router>
    <Application />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
