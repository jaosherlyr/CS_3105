import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

((container, imageList) => {
    for (const i of imageList) {
        const img = document.createElement('img');
        img.setAttribute('style', 'width:10px; height:10px; display:inline-block;');
        img.setAttribute('src', i);
        container.appendChild(img);
    }
})(document.querySelector('#preload-container'), [
    "./media/Venti-tbhk.png",
    "./media/Tamayo.png",
    "./media/draken.png",
    "./media/Fangs-OC.png",
    "./media/TurtlePainting.png",
    "./media/TCF-whiteBorder.png"
]);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
