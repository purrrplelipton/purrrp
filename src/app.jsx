import { Route, Routes } from "react-router-dom";
import { Provider } from "./components/context";
import { About, Contact, Experience, Home, Works } from "./pages";

const App = () => {
  return (
    <>
      <Provider>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route path={"/about-me"} element={<About />} />
          <Route path={"/works"} element={<Works />} />
          <Route path={"/experience"} element={<Experience />} />
          <Route path={"/reach-out"} element={<Contact />} />
        </Routes>
      </Provider>
    </>
  );
};

export default App;
