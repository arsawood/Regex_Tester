import React from "react";
import TabBar from "./components/TabBar/TabBar";
import RegexComp from "./components/RegexComp/RegexComp";
import Tiles from "./components/Tiles/Tiles";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound";

const App = () => {
  const tabs = [
    "Home",
    "Section",
    "E M Coding",
    "Resource Management",
    "Utilities",
    "NLP",
    "Reports",
  ];
  const defaultActiveTab = "Home";
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <TabBar tabs={tabs} defaultActiveTab={defaultActiveTab} />
              <Tiles />
            </>
          }
        />
        <Route
          path="/regextest"
          element={
            <>
              <Header />
              <TabBar tabs={tabs} defaultActiveTab={defaultActiveTab} />
              <RegexComp />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
