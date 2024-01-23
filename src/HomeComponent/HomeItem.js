import { useState, useEffect } from "react";
import { slider } from "./slider";


function HomeItem() {
  const [slide, setSlide] = useState(0);
  const [hidden, setHidden] = useState(false);

  const prevVideo = () => {
    setHidden(true);
    setTimeout(() => {
      setSlide ((slide => {
        slide --;
        if (slide<0) {
          return slider.length-1;
        }
        return slide
      }))
      setHidden(false);
    }, 1000); 
  };

  const nextVideo = () => {
    setHidden(true);
    setTimeout(() => {
      setSlide ((slide => {
        slide ++;
        if (slide > slider.length-1) {
          slide = 0;
        }
        return slide
      }))
      setHidden(false);
    }, 1000); 
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHidden(true);
      setTimeout(() => {
        setSlide ((slide => {
          slide ++;
          if (slide > slider.length-1) {
            slide = 0;
          }
          return slide
        }))
        setHidden(false);
      }, 1000); 
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="video-box">
       
      {slider.map((item, index) => (
        <video
          key={item.id}
          className={`video-carousel ${index === slide && !hidden ? "" : "hidden"}`}
          autoPlay
          muted
          loop
        >
          <source src={item.video} type="video/mp4" />
        </video>
      ))}
      <div className="btns">
      <button className="slide-btn" onClick={prevVideo}>&laquo;</button>
      <button className="slide-btn" onClick={nextVideo}>&raquo;</button>
      </div>
    </div>
  );
}

export default HomeItem;

