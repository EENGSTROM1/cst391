import React from 'react';
import Card from './Card';

const AlbumList = (props) => {

  const renderedList = props.albumList.map((album) => {

    return (
      <Card
        key={album.albumId}
        albumId={album.albumId}
        albumTitle={album.title}
        albumDescription={album.description}
        buttonText="View"
        imgURL={album.image}
        updateSingleAlbum={props.updateSingleAlbum}
      />
    );

  });

  return (
    <div className='row'>
      {renderedList}
    </div>
  );

};

export default AlbumList;