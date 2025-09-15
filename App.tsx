import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import DataManager from "./components/DataManager";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  // 假設這些是 props 或 state，請依實際調整
  const userId = "demo-user";
  const processedAssetAccounts: any[] = [];
  const cashflowRecords: any[] = [];

  // 用 switch 來控制要顯示哪個頁面
  switch (currentPage) {
    case "dashboard":
      return (
        <Dashboard
          userId={userId}
          assetAccounts={processedAssetAccounts}
          cashflowRecords={cashflowRecords}
        />
      );

    case "data-manager":
      return <DataManager />;

    default:
      return <div>Page not found</div>;
  }
}

export default App;
