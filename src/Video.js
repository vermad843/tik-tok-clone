import React,{useRef, useState} from 'react';
import './Video.css';
import VideoFooter from './VideoFooter'; 

function Video() {
    const[playing, setPlaying] = useState(false); 
    const videoRef = useRef(null);
    
    const onVideoPress = () => {
       if(playing) {
         videoRef.current.pause();
         setPlaying(false);    
       }else {
         videoRef.current.play();
         setPlaying(true);    
       }
    };  
 
    return (
        <div className = "video">
            <video
               className = "video__player"
               loop
               onClick = {onVideoPress}
               src = "snow.mp4"
               width="560" 
               height="315"
               ref = {videoRef} 
               >
            </video>
            <VideoFooter
               channel = "vermad843"
               description = "Check out this dance"
               song = "Usher - Yeah"
            />
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

//  gif
   
              {/* <iframe 
               className="video__player" 
               loop
            //    onClick = {onVideoPress}
               ref = {videoRef} 
               src="https://giphy.com/embed/1dLQC6YCDvelfnA3k9" 
            //    frameBorder="0" 
            //    allowFullScreen
               >
            </iframe> */}
    
