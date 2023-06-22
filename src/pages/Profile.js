import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllMissions,
  getMissionStatus,
  getActiveMissions,
} from '../redux/missionSlice';
import Profiles from '../components/profile/Profile';
import './Profile.css';
import ProfileRocket from '../components/ProfileRocket';

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
      <div className="grid-center container">
        <Profiles missions={reservedMissions} />
        <ProfileRocket />
      </div>
    </>
  );
};

export default Profile;
