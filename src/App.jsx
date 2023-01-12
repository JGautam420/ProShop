

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomeScreen from './screens/HomeScreen'
import Darkmode from './utils/DarkMode'
import SingleProductScreen from './screens/SingleProductScreen';
import { Container } from '@mui/material';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import CartScreen from './screens/CartScreen';
import ProfileScreen from './screens/ProfileScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import ProductPanel from './screens/adminPanel/ProductPanel';
import UserPanel from './screens/adminPanel/UserPanel';
import OrderPanel from './screens/adminPanel/OrderPanel';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
   <Darkmode>
   <Navbar/>
     <main id='body'>
    
      <Container maxWidth="xl">
      <Routes>
    <Route path={'/'} element={ <HomeScreen/>} />
    <Route path={'/product/:_id'} element={ <SingleProductScreen/>} />
    <Route path={'/register'} element={ <RegisterScreen/>} />
    <Route path={'/login'} element={ <LoginScreen/>} />
    <Route path={'/cart'} element={ <CartScreen/>} />
    <Route path={'/profile'} element={ <ProfileScreen/>} />
    <Route path={'/checkout'} element={ <CheckoutScreen/>} />
    <Route path={'/admin'}>
      <Route path="products" element={<ProductPanel/>} />
      <Route path="users" element={<UserPanel/>} />
      <Route path="orders" element={<OrderPanel/>} />
      </Route>
   </Routes>
      </Container>
      </main>
     <footer>
      <br />
      <hr />
      <span>
        Copyright & copy 2022 
        <p>Made With ❤️‍🔥 By J.GAUTAM</p>
      </span>
     
     </footer>
     </Darkmode>

    </BrowserRouter>
  );
}

export default App;
