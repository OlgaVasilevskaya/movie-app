import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { getUserSelector } from 'store/reducers/authorization/selectors';

import './movie.scss';

const Movie = (props) => {
  const { movie } = props;

  const { posterLink, name, ageLimit } = movie;

  const [openAlert, setOpenAlert] = useState('');

  const navigate = useNavigate();

  const isUserAuthrized = useSelector(getUserSelector);

  const handleGoToMovie = useCallback((eventId) => () => {
    isUserAuthrized
      ? navigate(`/movie/${movie.eventId}`)
      : setOpenAlert('Sorry, you should log in');
  }, [isUserAuthrized, movie.eventId, navigate]);

  return (
    <div className="movie-wrapper">
      <img className="movie-img" src={posterLink} alt="movie" />

      <div className="movie-name">{name}</div>

      <div className="movie-age">{ageLimit.acronym}</div>

      <Stack spacing={2} direction="row" className="movie-btn">
        <Button 
          variant="outlined" 
          onClick={handleGoToMovie(movie.eventId)}
        > 
          Buy ticket 
        </Button>
      </Stack>

      <div>{openAlert}</div>
    </div>
  );
};

export default Movie;
