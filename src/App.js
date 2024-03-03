import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import store from './utils/store';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import WatchScreen from './screens/WatchScreen';
import SearchScreen from './screens/SearchScreen';
import MainContainer from './components/MainContainer';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
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
          },
          {
            path: '/search',
            element: <SearchScreen />
          }
        ]
      }
    ]
  }
])

const App = () => {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={appRouter}>
          <Header />
          <HomeScreen />
        </RouterProvider>
      </Provider>
    </>
  )
}

export default App