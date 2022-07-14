import React from "react";
import "./App.css";
import { Grid } from "./components/Grid";

function App() {
  return (
    <div className="App">
      <Grid columns={5} rows={5} />
    </div>
  );
}

export default App;
