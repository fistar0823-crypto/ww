import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import DataManager from "./components/DataManager";

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>("dashboard");
  const [userId] = useState<string>("user123");
  const [processedAssetAccounts] = useState<any[]>([
    { account: "現金", balance: 50000 },
    { account: "股票", balance: 200000 },
  ]);
  const [cashflowRecords] = useState<any[]>([
    { date: "2025-09-01", type: "收入", amount: 30000 },
    { date: "2025-09-10", type: "支出", amount: 8000 },
  ]);

  return (
    <div>
      <h1>理財系統</h1>
      <nav>
        <button onClick={() => setCurrentPage("dashboard")}>Dashboard</button>
        <button onClick={() => setCurrentPage("data-manager")}>資料管理</button>
      </nav>

      <div style={{ marginTop: "20px" }}>
        {(() => {
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
              return (
                <DataManager
                  onSave={(data) => console.log("儲存成功:", data)}
                />
              );
            default:
              return <div>請選擇功能</div>;
          }
        })()}
      </div>
    </div>
  );
};

export default App;