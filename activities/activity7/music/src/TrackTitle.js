import React from "react";

const TrackTitle = (props) => {

  const handleClick = () => {
    props.onSelect(props.track);
  };

  return (
    <button
      className="btn btn-outline-primary m-1"
      onClick={handleClick}
    >
      {props.track.title}
    </button>
  );
};

export default TrackTitle;