import React from 'react';
import { useDispatch } from 'react-redux';
import { updateMission } from '../../redux/missionSlice';
import './Missions.css';

const Missions = (mission) => {
  const dispatch = useDispatch();

  const {
    mission: {
      id, missionName, description, reserved,
    },
  } = mission;

  const handleMission = () => {
    dispatch(updateMission(id));
  };

  return (
    <tr>
      <td>{missionName}</td>
      <td>{description}</td>
      <td>
        {reserved ? (
          <p className="not-member-status">ACTIVE MEMBER</p>
        ) : (
          <p className="member-status">NOT A MEMBER</p>
        )}
      </td>
      <td>
        {reserved ? (
          <button onClick={handleMission} type="button" className="leave-btn">
            LEAVE MISSION
          </button>
        ) : (
          <button onClick={handleMission} type="button" className="join-btn">
            JOIN MISSION
          </button>
        )}
      </td>
    </tr>
  );
};

export default Missions;
