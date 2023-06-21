import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/features/Rockets/RocketSlice';
import Rocket from '../components/Rocket';

const Rockets = () => {
  const rockets = useSelector((store) => store.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <div className="container">
      {rockets.loading && <div>loading</div>}
      {!rockets.loading && rockets.error ? (
        <div>
          Error
          {rockets.error}
        </div>
      ) : null}
      {!rockets.loading && rockets.rocket.length ? (
        rockets.rocket.map((rocket) => (
          <Rocket
            key={rocket.id}
            name={rocket.name}
            img={rocket.flickr_images}
            id={rocket.id}
            desc={rocket.description}
          />
        ))
      ) : null}
    </div>
  );
};

export default Rockets;
