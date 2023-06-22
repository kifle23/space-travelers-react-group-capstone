import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllMissions,
  getMissionStatus,
  getActiveMissions,
} from '../redux/missionSlice';
import Profiles from '../components/profile/Profile';
import './Profile.css';

const Profile = () => {
  const dispatch = useDispatch();
  const reservedMissions = useSelector(getAllMissions).filter(
    (mission) => mission.reserved === true,
  );
  const missionStatus = useSelector(getMissionStatus);

  useEffect(() => {
    if (missionStatus === 'idle' || missionStatus === 'succeeded') {
      dispatch(getActiveMissions());
    }
  });
  return (
    <>
      <div className="profile-section">
        <Profiles missions={reservedMissions} />
      </div>
    </>
  );
};

export default Profile;
