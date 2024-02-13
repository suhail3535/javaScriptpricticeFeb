import React from "react";

const MapComponent = () => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas">
        <iframe
          title="google-map"
          width="100%"
          height="300"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=krishna+nagar+lal+kothi+jaipur+rajasthan&amp;t=&amp;z=8&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"></iframe>
        <a href="https://online-timer.me/"></a>
        <br />
        <a href="https://online.stopwatch-timer.net/"></a>
      </div>
      <style>{`
        .mapouter {
          position: relative;
          text-align: right;
          height: 300px;
          width: 100%;

        }
        .gmap_canvas {
          overflow: hidden;
          background: none !important;
          height: 300px;
          width: 100%;
        }
      `}</style>

    </div>
  );
};

export default MapComponent;
