import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import Mission from '../pages/Mission';
import Missions from '../components/missions/Missions';

describe('A test for missions component', () => {
  it('Check whether mission component renders', () => {
    const mission = {
      id: 'heloo',
      missionName: 'Commercial Resupply Services',
      description:
        'Commercial Resupply Services (CRS) are a series of contracts awarded by NASA from 2008–2016 for delivery of cargo and supplies to the International Space Station (ISS) on commercially operated spacecraft. The first CRS contracts were signed in 2008 and awarded $1.6 billion to SpaceX for 12 cargo transport missions and $1.9 billion to Orbital Sciences for 8 missions, covering deliveries to 2016. In 2015, NASA extended the Phase 1 contracts by ordering an additional three resupply flights from SpaceX and one from Orbital Sciences. After additional extensions late in 2015, SpaceX is currently scheduled to have a total of 20 missions and Orbital 10. SpaceX began flying resupply missions in 2012, using Dragon cargo spacecraft launched on Falcon 9 rockets from Space Launch Complex 40 at Cape Canaveral Air Force Station, Cape Canaveral, Florida. Orbital Sciences began deliveries in 2013 using Cygnus spacecraft launched on the Antares rocket from Launch Pad 0A at the Mid-Atlantic Regional Spaceport (MARS), Wallops Island, Virginia. A second phase of contracts (known as CRS2) were solicited and proposed in 2014. They were awarded in January 2016 to Orbital ATK, Sierra Nevada Corporation, and SpaceX, for cargo transport flights beginning in 2019 and expected to last through 2024.',
      reserved: false,
    };
    const renderedMission = renderer.create(
      <Provider store={store}>
        <Missions mission={mission} />
      </Provider>,
    );

    expect(renderedMission).toMatchSnapshot();
  });

  it('Check if it renders correctly', () => {
    const renderedMission = renderer.create(
      <Provider store={store}>
        <Mission />
      </Provider>,
    );

    expect(renderedMission).toMatchSnapshot();
  });
});
