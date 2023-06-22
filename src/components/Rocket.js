import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReserveRocket } from '../redux/features/Rockets/RocketSlice';

const Rocket = (rockets) => {
  const dispatch = useDispatch();
  const {
    id, name, img, desc, reserved,
  } = rockets;
  const handleClick = (e, id) => {
    e.preventDefault();
    if (reserved === false) {
      dispatch(reserveRocket({ id }));
    } else {
      dispatch(cancelReserveRocket({ id }));
    }
  };
  return (
    <div className=" d-flex-space g-10 my-20">
      <img src={img} className="logo" alt="rocket" />
      <div className="rocket-details">
        <h2 className="rocket-name">{name}</h2>
        <p className="rocket-desc">
          {' '}
          {reserved === true && <span className="btn reserved">Reserved</span>}
          {desc}
        </p>
        <button onClick={(e) => { handleClick(e, id); }} className={reserved === true ? 'rocket-unreserve btn' : 'rocket-reserve btn'} type="button">{reserved === true ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
      </div>
    </div>
  );
};

export default Rocket;
