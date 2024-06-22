import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Cart from "./components/Cart/Cart"
import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home"
import Brands from "./components/Brands/Brands"
import Categories from "./components/Categories/Categories"
import Products from "./components/Products/Products"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Notfound from "./components/Notfound/Notfound"



let x = createBrowserRouter([
  {path:'', element:<Layout />, children:[
    {index:true, element:<Home />},
    {path:'categories' , element:<Categories />},
    {path:'brands' , element:<Brands />},
    {path:'cart' , element:<Cart />},
    {path:'products', element:<Products />},
    {path:'login' , element:<Login/>},
    {path:'register' , element:<Register />},
    {path:'*' , element:<Notfound />}
  ]}
])
export default function App() {
  //partie logique 


  //partie UI
  return (
    <RouterProvider router={x}></RouterProvider>
  )
}
