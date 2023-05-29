import React from "react";
import "./App.css";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

// import { webAppContext } from "./contexts/contexts";
import LandingPage from "./landingPage/landingPage";
import ImageSlider from "./imageSlider/imageSlider"

function App() {
  // const { __webAppSettings } = useContext(webAppContext);

  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/homepage" element={<LandingPage />} exact></Route>
        <Route path="/landingpage" element={<ImageSlider />} exact></Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
