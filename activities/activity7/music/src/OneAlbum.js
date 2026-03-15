import React from "react";
import { useNavigate } from "react-router-dom";
import TracksList from "./TracksList";
import TrackLyrics from "./TrackLyrics";
import TrackVideo from "./TrackVideo";

const OneAlbum = (props) => {

  const navigate = useNavigate();

  if (!props.album) {
    return <div>Loading album...</div>;
  }

  const handleEditClick = () => {
    props.updateSingleAlbum(props.album.albumId, navigate);
    navigate("/edit/" + props.album.albumId);
  };

  return (

    <div className="container">

      <h2>Album Details for {props.album.title}</h2>

      <div className="row">

        <div className="col-md-4">

          <div className="card">

            <img
              src={props.album.image}
              className="card-img-top"
              alt={props.album.title}
            />

            <div className="card-body">

              <h5 className="card-title">
                {props.album.title}
              </h5>

              <p className="card-text">
                {props.album.description}
              </p>

              <button
                className="btn btn-warning mb-3"
                onClick={handleEditClick}
              >
                Edit Album
              </button>

              <TracksList tracks={props.album.tracks} />

            </div>

          </div>

        </div>

        <div className="col-md-8">

          <TrackLyrics />

          <TrackVideo />

        </div>

      </div>

    </div>

  );
};

export default OneAlbum;