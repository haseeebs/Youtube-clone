import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchScreen from './screens/WatchScreen';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomeScreen />,
    children: [
      {
        path: '/',
        element: <MainContainer />
      },
      {
        path: '/watch',
        element: <WatchScreen />
      }
    ]
  }
])

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <RouterProvider router={appRouter}>
          <HomeScreen />
        </RouterProvider>
      </Provider>
    </>
  )
}

export default App