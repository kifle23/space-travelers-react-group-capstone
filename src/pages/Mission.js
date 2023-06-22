import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Missions from '../components/missions/Missions';
import {
  getMissionStatus,
  fetchMissions,
  getAllMissions,
} from '../redux/missionSlice';
import './Mission.css';

const Mission = () => {
  const dispatch = useDispatch();
  const { status } = useSelector(getMissionStatus);
  const missions = useSelector(getAllMissions);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [status, dispatch]);

  return (
    <div className="mission-section">
      <div className="mission-content">
        <table>
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th className="status-head">Status</th>
              <th className="action-head">Action</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((x) => (
              <Missions key={x.id} mission={x} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mission;
