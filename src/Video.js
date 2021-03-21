import React from 'react';
import './Video.css';

function Video() { 
    return (
        <div className = "video">
            <iframe 
               className="video__player" 
               loop 
               controls
               src="https://giphy.com/embed/1dLQC6YCDvelfnA3k9" 
               frameBorder="0" 
               allowFullScreen
               >
            </iframe>
            {/* <VideoFooter/> */}
            {/* <VideoSidebar/> */}
        </div>
    )
}

export default Video;



   {/* <iframe
               className = "video__player" 
            //    width="560" 
            //    height="315" 
               loop
               controls
               src="https://www.youtube.com/embed/8fdqUGydoPA" 
               title="YouTube video player" 
               frameborder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowfullscreen>
            </iframe> */}
            {/* <iframe
               className = "video__player"  
            //    width="560" 
            //    height="315" 
               src="https://www.youtube.com/embed/8fdqUGydoPA" 
               title="YouTube video player" 
               frameborder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowfullscreen>
            </iframe> */}
    
