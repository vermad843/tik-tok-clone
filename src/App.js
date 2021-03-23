import React from 'react';
import './App.css';
import Video from './Video';

function App() {
  return (
    <div className="app">
         <div className = "app__videos">
             <Video
               channel = "vermad83"
               description = "wow it works..."
               song = "the Weekend Starboy"
               likes = {123}
               messages = {400}
               shares = {200}
             />
             <Video
               channel = "vermad83"
               description = "wow it works..."
               song = "the Weekend Starboy"
               likes = {123}
               messages = {400}
               shares = {200}
             />
             <Video
               channel = "vermad83"
               description = "wow it works..."
               song = "the Weekend Starboy"
               likes = {123}
               messages = {400}
               shares = {200}
             />
             <Video
               channel = "vermad83"
               description = "wow it works..."
               song = "the Weekend Starboy"
               likes = {123}
               messages = {400}
               shares = {200}
             />
             
          </div>
    </div>
  );
}

export default App;
