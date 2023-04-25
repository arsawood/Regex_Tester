import React, { useState } from "react";
import "./TabBar.css";
import { Link } from "react-router-dom";

function TabBar({ tabs, defaultActiveTab }) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="tab_bar">
        {tabs.map((tab) => (
          <Link
            to="/"
            key={tab}
            className={`tab ${tab === activeTab ? "active" : ""}`}
            onClick={() => handleTabChange(tab)}
          >
            {tab}
          </Link>
        ))}
      </div>
    </>
  );
}

export default TabBar;
