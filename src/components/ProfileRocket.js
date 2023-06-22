import { useSelector } from 'react-redux';

const ProfileRocket = () => {
  const rockets = useSelector((store) => store.rockets);
  const filteredRockets = rockets.rocket.filter((rocket) => rocket.reserved);
  return (
    <div className="rocket-booked">
      <h2>My Rockets</h2>
      <ul>
        {filteredRockets.map((rocket) => (
          <li key={rocket.id} className="py single-reserve">{rocket.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileRocket;
