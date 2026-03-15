import React from "react";
import TrackTitle from "./TrackTitle";

const TracksList = (props) => {

  const tracks = props.tracks.map((track, index) => (
    <TrackTitle
      key={index}
      track={track}
      onSelect={props.onSelect}
    />
  ));

  return (
    <div>
      {tracks}
    </div>
  );
};

export default TracksList;