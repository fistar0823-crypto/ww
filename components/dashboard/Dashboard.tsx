// components/Dashboard.tsx
import React from "react";

interface DashboardProps {
  userId: string;
  assetAccounts: any[];
  cashflowRecords: any[];
}

const Dashboard: React.FC<DashboardProps> = ({ userId, assetAccounts, cashflowRecords }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>User ID: {userId}</p>

      <h3>資產帳戶</h3>
      <ul>
        {assetAccounts && assetAccounts.length > 0 ? (
          assetAccounts.map((acc, i) => <li key={i}>{JSON.stringify(acc)}</li>)
        ) : (
          <li>尚無資料</li>
        )}
      </ul>

      <h3>現金流紀錄</h3>
      <ul>
        {cashflowRecords && cashflowRecords.length > 0 ? (
          cashflowRecords.map((rec, i) => <li key={i}>{JSON.stringify(rec)}</li>)
        ) : (
          <li>尚無資料</li>
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
