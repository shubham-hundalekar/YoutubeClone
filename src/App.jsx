import { useState } from 'react'
import './App.css'
import Head from "./components/Head"
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const appRouter = createBrowserRouter([
  {
    paht:"/",
    element : <Body />, 
    children :[
      {
        path:'/',
        element: <MainContainer/>
      },
      {
        path:'watch',
        element : <WatchPage />
      }
    ]
  }
])
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <Provider store={store}>
      <div>
        <Head/>
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  )
}

export default App
