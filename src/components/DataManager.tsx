import React, { useState } from "react";

interface DataManagerProps {
  onSave: (data: any) => void;
}

const DataManager: React.FC<DataManagerProps> = ({ onSave }) => {
  const [value, setValue] = useState("");

  const handleSave = () => {
    const newData = { timestamp: new Date().toISOString(), value };
    onSave(newData);
    setValue("");
  };

  return (
    <div>
      <h2>資料管理</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="輸入資料"
      />
      <button onClick={handleSave}>儲存</button>
    </div>
  );
};

export default DataManager;