import React, { useState, useEffect, useRef } from "react";

const LazyYoutube = () => {
  const [load, setLoad] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Log to check if the ref is being set
    console.log("videoRef.current:", videoRef.current);

    // Setup Intersection Observer only if the ref is assigned
    if (videoRef.current) {
      const observer = new IntersectionObserver((entries) => {
        console.log("Observer entries:", entries); // Log for debugging
        if (entries[0].isIntersecting) {
          setLoad(true);
          observer.disconnect();
        }
      });

      observer.observe(videoRef.current);

      // Cleanup function
      return () => {
        if (videoRef.current) {
          observer.unobserve(videoRef.current);
        }
      };
    } else {
      console.log("Ref is not assigned to an element yet.");
    }
  }, []);

  return (
    <div ref={videoRef} style={{ position: 'relative', paddingBottom: '45.25%', height: 0 }}>
      {load ? (
        <iframe
        style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',  width: '80%', height: '100%' }}
        width="1280px"
        height="720px"
        src={`https://www.youtube.com/embed/Plo2k0qQ_To`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      
      ) : (
        <div>Video institucional da Jaguaracambé</div>
      )}
    </div>
  );
};

export default LazyYoutube;