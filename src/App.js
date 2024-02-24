import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import store from './utils/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <HomeScreen />
      </Provider>
    </>
  )
}

export default App