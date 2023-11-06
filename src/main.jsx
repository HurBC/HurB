import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './static/css/index.css'
import Winter from './static/img/winter.gif'
import Summer from './static/img/summer.gif'

let date = new Date();
let actualDate = {
    "day": date.getDate(),
    "month": date.getMonth()
}
let winter = {
    "start": {
        "day": 20,
        "month": 2
    },
    "end": {
        "day": 23,
        "month": 8
    }
}
let backgrounds = {
    "Winter": Winter,
    "Summer": Summer
}

if ((actualDate.month > winter.start.month && actualDate.month < winter.end.month) || 
    (actualDate.month == winter.start.month && actualDate.day >= winter.start.day) || 
    (actualDate.month == winter.end.month && actualDate.day <= winter.end.day)) {
      document.querySelector("body").style.backgroundImage = backgrounds.Winter;
} else {
    document.querySelector("body").style.background = "url(" + backgrounds.Summer + ")";
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
