import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/features/Rockets/RocketSlice';

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
        rockets.rocket.map((rock) => (
          <div key={rock.id} className=" d-flex-space g-10 my-20">
            <img src={rock.flickr_images} className="logo" alt="rocket" />
            <div className="rocket-details">
              <h2 className="rocket-name">{rock.name}</h2>
              <p className="rocket-desc">{rock.description}</p>
              <button type="button" className="rocket-reserve btn">Reserve Rocket</button>
            </div>
          </div>
        ))
      ) : null}
    </div>
  );
};

export default Rockets;
