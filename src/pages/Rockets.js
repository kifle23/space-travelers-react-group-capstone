import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../components/Rocket';
import { fetchRockets } from '../redux/features/Rockets/RocketSlice';

const Rockets = () => {
  const rockets = useSelector((store) => store.rockets);
  const dispatch = useDispatch();
  const lengthRock = rockets.rocket.length;
  useEffect(() => {
    if (lengthRock > 0) return;
    dispatch(fetchRockets());
  }, [dispatch, lengthRock]);
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
            reserved={rocket.reserved}
          />
        ))
      ) : null}
    </div>
  );
};

export default Rockets;
