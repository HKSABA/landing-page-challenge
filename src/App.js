import React, { useEffect, useState } from "react";
import Switch from "@material-ui/core/Switch";
import AllMediaCards from "./AllMediaCards";
import AllOverviewCards from "./AllOverviewCards";
import "./Header.css";
import "./MuiSwitch.css";
import "./Theme.css";
import "./App.css";

function App() {
  const [toggled, setToggled] = useState(true);
  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem("dark"));
    return savedMode || false;
  }

  return (
    <div className="app">
      <div id="app__body" className={darkMode ? "dark_mode" : "light_mode"}>
        {/* Header */}
        <div className="app__header">
          <div className="appHeader__top">
            <div className="appHeader__left">
              <h1>Social Media Dashboard</h1>
              <p id="dark_mode_p">Total Followers: 981,000</p>
            </div>

            <div className="appHeader__right">
              <p>Dark Mode</p>
              <Switch
                checked={toggled}
                onChange={(e) => setToggled(e.target.checked)}
                onClick={() => setDarkMode((prevMode) => !prevMode)}
              />
            </div>
          </div>
        </div>

        <AllMediaCards />

        <h2 id="overview_h2">Overview - Today</h2>
        <AllOverviewCards />
      </div>
    </div>
  );
}

export default App;
