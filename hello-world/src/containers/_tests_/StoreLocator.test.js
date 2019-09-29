import {shallow} from 'enzyme';
import StoreLocator from '../StoreLocator';

it('renders without crashing', () => {
let montedStoreLocation = shallow(<StoreLocator />)
});
