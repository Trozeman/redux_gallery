/**
 * @format
 * @flow
 */
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./containers/ImagesListContainer";
import ImageScreen from './components/imageComponent';
import configureStore from './store';

const initialState = {
  appData: {},
  activeImage: null,
};

const store = configureStore(initialState);



const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  ImageScreen: {screen: ImageScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
