
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import LayOut from './Layout/LayOut'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'

import Contact from './Components/Contact/Contact'
import Home from './Components/Home/Home'




function App() {
 let Routes=createBrowserRouter([{

   path:"/",element:<LayOut/>,children:[
    {index:true,element:<Home/>},
    {path:"home",element:<Home/>},
    {path:"about",element:<About/>},
    {path:"portfolio",element:<Portfolio/>},
    {path:"contact",element:<Contact/>}
   ]
 }])

 return <RouterProvider router={Routes}/>
}

export default App
