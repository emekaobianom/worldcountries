import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//redux 3 ---
import { Provider } from "react-redux";
import store from "./store";
//-----------

import Home from "./Home";
import Country from "./Country";
import Layout from "./Layout";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/:code" element={<Country />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
