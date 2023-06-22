import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navmenu from '../components/Navmenu';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <Navmenu />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
