import React from "react";
import Layout from "./components/Layout";
import Introduction from "./components/introduction/Introduction";

function App() {
  if(window.location.pathname === "/hire") {
    window.location.href = "https://cal.com/max-intropia/15min";
    return 
  }
  return (
    <Layout>
      <Introduction />
    </Layout>
  );
}

export default App;
