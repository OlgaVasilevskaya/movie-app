import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Spinner from '../Spinner';
import DetailsElements from '../DetailsElements';

import {
  getAllDetailsSelector,
  getLoadingStateSelector,
  getErrorSelector,
} from '../../store/reducers/movies/selectors/DetailsSelectors';
import { getDetailsThunk } from '../../store/reducers/movies/thunks/detailsThunk';

import { useMobileScreenMatch } from '../../hooks/useMobileScreenMatch';

import './details.scss';

const Details = () => {
  const dispatch = useDispatch();

  const { eventId } = useParams();

  const details = useSelector(getAllDetailsSelector);

  const isLoading = useSelector(getLoadingStateSelector);

  const isError = useSelector(getErrorSelector);

  useMobileScreenMatch();

  const getDetails = useCallback(() => {
    dispatch(getDetailsThunk(eventId));
  }, [dispatch, eventId]);

  useEffect(() => {
    getDetails();
  }, [getDetails]);

  if (isError) {
    return (
      <div>Ooops, something went wrong</div>
    );
  }

  if(isLoading) {
    return <Spinner />;
  }

  return (
    <div className="details">
      <DetailsElements key={details.eventId} detail={details}>Description</DetailsElements>
    </div>
  );
};

export default Details;
