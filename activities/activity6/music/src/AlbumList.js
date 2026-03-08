import React from 'react';
import Card from './Card';

const AlbumList = (props) => {

  console.log('props albumList', props);

  const renderedList = props.albumList.map((album) => {

    return (
      <Card
        key={album.id}
        albumId={album.id}
        albumTitle={album.title}
        albumDescription={album.description}
        buttonText="OK"
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