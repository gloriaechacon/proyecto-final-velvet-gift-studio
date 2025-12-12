
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { CartProvider } from "./context/CartContext/CartProvider";
import { AuthProvider } from "./context/AuthContext/AuthProvider";
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { MainLayout } from "./layouts/MainLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";
import { Login } from "./components/Login/Login";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";

function App() {
return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <Routes>
            <Route element={<MainLayout />}>
              <Route
                path="/"
                element={<ItemListContainer titulo={"Velvet Gift Studio"} />}
              />
              <Route
                path="/category/:category"
                element={<ItemListContainer />}
              />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>

            <Route path="/admin/*" element={<AdminLayout />}>
              <Route index element={<Login />} />
              <Route
                path="alta-productos"
                element={<RutaProtegida>
                  <ProductFormContainer />
                </RutaProtegida>}
              />
            </Route>
          </Routes>
          {/* Dejamos fuera del Routes lo que queremos que no se vuelva a renderizar al navegar */}
            <Footer />
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App
