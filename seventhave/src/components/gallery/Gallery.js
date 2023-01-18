import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

import "./gallery.css";

export const GalleryItem = ({ children, width }) => {
  return (
    <div className="gallery-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Gallery = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  });

  return (
    <div
      {...handlers}
      className="gallery"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="galleryinner"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
    </div>
    <div className="arrowsandindicators">
      <div className="prevbuttoncontainer">
            <button 
                className="prevbutton"
                onClick={() => {
                    updateIndex(activeIndex - 1);
                }}>
                <FontAwesomeIcon icon={faArrowLeftLong} className="leftarrow"/>
            </button>
        </div>
        <div className="indicators">
        {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? "active" : ""}`}
              onClick={() => {
                updateIndex(index);
              }}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
        <div className="nextbuttoncontainer">
      <button 
                className="nextbutton"
                onClick={() => {
                    updateIndex(activeIndex + 1);
                }}>
                <FontAwesomeIcon icon={faArrowRightLong} className="rightarrow"/>
            </button>
        </div>
    </div>
</div>
  );
};

export default Gallery;