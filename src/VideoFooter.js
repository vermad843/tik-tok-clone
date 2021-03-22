import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

function VideoFooter() {
    return (
        <div className = "videoFooter">
           <div className = "videoFooter__text">
               <h3>@vermad843</h3>
               <p>this is a description</p>
               <MusicNoteIcon/>
               <Ticker mode="smooth">
                   {
                       ({index}) => (
                           <>
                             <h1>What's up guys {index}</h1>
                           </>
                       )
                   }
               </Ticker>
           </div>
           <img
               className = "videoFooter__record"
               src = "https://static.thenounproject.com/png/934821-200.png"
               alt = ""
           />
        </div>
    )
}

export default VideoFooter;
