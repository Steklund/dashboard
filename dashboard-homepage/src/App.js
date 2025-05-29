import React from "react";
import './App.css';
import DashboardCard from "./components/DashboardCard";

function App() {
  return (
    <div className="App p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">Welcome to the Dashboard Homepage</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        <DashboardCard
          title="Portainer"
          description="Manage Docker containers with a powerful GUI."
          href="/portainer/"
          logo="https://www.portainer.io/hubfs/portainer-logo-black.svg"
        />
        <DashboardCard
          title="Demo"
          description="Explore our interactive demo environment."
          href="/demo/"
          logo="https://nginx.org/img/nginx_logo_dark.png"
        />
        <DashboardCard
          title="GitHub"
          description="Hopefully you know what this is."
          href="https://github.com/Steklund"
          logo="https://github.githubassets.com/assets/apple-touch-icon-144x144-b882e354c005.png"
        />
          {/* Add more DashboardCards here */}
      </div>
    </div>
  );
}

export default App;