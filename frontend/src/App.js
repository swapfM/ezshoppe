import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import UserListScreen from "./screens/UserListScreen";
import UserEditScreen from "./screens/UserEditScreen";
import ProductListScreen from "./screens/ProductListScreen";
import ProductEditScreen from "./screens/ProductEditScreen";
import OrderListScreen from "./screens/OrderListScreen";
import ErrorScreen from "./screens/ErrorScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route exact path="/" Component={HomeScreen} />
            <Route exact path="/register" Component={RegisterScreen} />
            <Route exact path="/profile" Component={ProfileScreen} />
            <Route exact path="/login" Component={LoginScreen} />
            <Route exact path="/product/:id" Component={ProductScreen} />
            <Route exact path="/cart/:id?" Component={CartScreen} />
            <Route exact path="/shipping" Component={ShippingScreen} />
            <Route exact path="/payment" Component={PaymentScreen} />
            <Route exact path="/placeorder" Component={PlaceOrderScreen} />
            <Route exact path="/order/:id?" Component={OrderScreen} />
            <Route exact path="/admin/userlist" Component={UserListScreen} />
            <Route
              exact
              path="/admin/user/:id/edit"
              Component={UserEditScreen}
            />

            <Route
              exact
              path="/admin/productlist"
              Component={ProductListScreen}
            />

            <Route
              exact
              path="/admin/product/:id/edit"
              Component={ProductEditScreen}
            />

            <Route path="*" Component={ErrorScreen} />

            <Route exact path="/admin/orderlist" Component={OrderListScreen} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
