import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { updateMission } from '../../redux/missionSlice';
import './Profile.css';

const Profile = ({ missions }) => {
  const dispatch = useDispatch();

  const handleMission = (event, id) => {
    dispatch(updateMission(id));
  };

  const readMore = (event, url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="profile-content">
      <div className="missions">
        <h1>Missions</h1>
        <div className="mission-list">
          {missions.length ? (
            <ul className="user-missions">
              {missions.map(({ id, missionName, url }) => (
                <li key={id}>
                  <p className="mission-name">{missionName}</p>
                  <div className="action-btns">
                    <button
                      type="button"
                      className="leave-mission-btn"
                      onClick={(event) => handleMission(event, id)}
                    >
                      Leave Mission
                    </button>
                    <button
                      type="button"
                      className="read-more-btn"
                      onClick={(event) => readMore(event, url)}
                    >
                      Read More
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No Mission Joined</p>
          )}
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      missionName: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      reserved: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default Profile;
