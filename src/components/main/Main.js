import React from "react";
import Header from "./Header";
import TabComponents from "./TabComponents";

function Main() {
  return (
    <div className="main" style={{ overflowX: "hidden" }}>
      <Header />
      <TabComponents />
    </div>
  );
}

export default Main;
