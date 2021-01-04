import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import CakeContainers from './components/CakeContainers';
import store from './redux/store'
import CakeContainerHook from './components/CakeContainerHook';
import IceCreamContainer from './components/IceCreamContainer';
import PayloadCakeContainer from './components/PayloadCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />

        {/* "cake" is passed as "props" in item componenet */}
        <ItemContainer cake /> 
        <ItemContainer />
        <CakeContainerHook />
        <CakeContainers />
        <IceCreamContainer />
        <PayloadCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
