import React from "react";

// Components

import Sidebar from "./Sidebar";

import Authorslist from "./Authorslist";

function App() {
  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <Sidebar />
        <Authorslist />
      </div>
    </div>
  );
}

export default App;
