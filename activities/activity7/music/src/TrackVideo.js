import React from "react";

const TrackVideo = (props) => {

  if (!props.track) {
    return <p>Show the YouTube video of the selected track here</p>;
  }

  return (
    <div>
      <iframe
        width="420"
        height="315"
        src={props.track.video}
        title="Track Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TrackVideo;