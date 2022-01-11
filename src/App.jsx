import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from './Component/NavBar/navbar';
import ImageSlider from './Component/Slider/slider';
import { SliderData } from './Data/sliderData';
import Infos from './Component/Infos/infos';
import Category from './Component/Category/category';
import { Categories } from './Data/categoryData';
import Footer from './Component/Footer/footer';
import Product from './Component/Product/Product';
import { supremeData } from "./Data/supremeData"
import { offwhiteData } from "./Data/offwhiteData"
import { bapeData } from "./Data/bapeData"
import Cart from './Component/Cart/cart';

function App() {
  const Brands = [...supremeData, ...offwhiteData, ...bapeData]
  const [cartList , setCartList] = useState([])
  function addToCart(product)
  {
   console.log('add to cart ', product)
   const newList = [...cartList]
   const index = newList.findIndex(item => item.id === product.id);
   if (index !== -1) {
     newList[index].quantity++;
     console.log(newList[index]);
   } else {
     product.quantity = 1;
     newList.push(product);
   }
   setCartList(newList);
 }
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Infos />
        <Switch>
          <Route path="/npx-shop/" exact>
            <ImageSlider slides={SliderData} />
            <Category category={Categories} />
          </Route>
          <Route path="/npx-shop/supreme" exact>
            <Product myObj={supremeData} addToCartFunction={addToCart}  />
          </Route>
          <Route path="/npx-shop/offwhite" exact>
            <Product myObj={offwhiteData} addToCartFunction={addToCart} />
          </Route>
          <Route path="/npx-shop/bape" exact>
            <Product myObj={bapeData}  addToCartFunction={addToCart} />
          </Route>
          <Route path="/npx-shop/brands" exact>
            <Product myObj={Brands}  addToCartFunction={addToCart} />
          </Route>
          <Route path="/npx-shop/cart" exact>
            <Cart data={cartList}/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
