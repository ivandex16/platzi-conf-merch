import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

const Home = lazy(() => import("../containers/Home"));
const Checkout = lazy(() => import("../containers/checkout/Checkout"));
const Information = lazy(() => import("../containers/information/Information"));
const Payment = lazy(() => import("../containers/payment/Payment"));
const Success = lazy(() => import("../containers/success/Success"));
const NotFound = lazy(() => import("../containers/NotFound"));
const Layout = lazy(() => import("../component/layout/Layout"));

const App = () => {
  const initialState = useInitialState();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AppContext.Provider value={initialState}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="checkout/information" element={<Information />} />
              <Route path="checkout/payment" element={<Payment />} />
              <Route path="checkout/success" element={<Success />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </Suspense>
  );
};

export default App;
