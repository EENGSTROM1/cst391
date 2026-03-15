import React from "react";
import AlbumList from "./AlbumList";

const SearchAlbum = (props) => {

  console.log("SearchAlbum props:", props);

  return (
    <div className="container">

      <AlbumList
        albumList={props.albumList}
        updateSingleAlbum={props.updateSingleAlbum}
      />

    </div>
  );
};

export default SearchAlbum;