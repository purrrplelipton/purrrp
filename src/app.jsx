import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from "./components/context";
import { Home } from "./pages/home";

const App = () => {
  return (
    <>
      <Provider>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
        </Routes>
      </Provider>
    </>
  );
};

export default App;
