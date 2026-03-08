import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = (props) => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    props.updateSingleAlbum(props.albumId, navigate);
  };

  return (

    <div className='col-md-4'>

      <div className='card mb-3'>

        <div className='row g-0'>

          <div className='col-md-4'>
            <img
              src={props.imgURL}
              className='img-fluid rounded-start'
              alt={props.albumTitle}
            />
          </div>

          <div className='col-md-8'>

            <div className='card-body'>

              <h5 className='card-title'>
                {props.albumTitle}
              </h5>

              <p className='card-text'>
                {props.albumDescription}
              </p>

              <button
                className='btn btn-primary'
                onClick={handleButtonClick}
              >
                {props.buttonText}
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Card;