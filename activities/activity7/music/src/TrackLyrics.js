import React from "react";

const TrackLyrics = (props) => {

  if (!props.track) {
    return <p>Show the lyrics of a selected track here</p>;
  }

  return (
    <div>
      <h5>{props.track.title}</h5>
      <p>{props.track.lyrics}</p>
    </div>
  );
};

export default TrackLyrics;