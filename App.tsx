import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import { loadDataFromFirestore, saveDataToFirestore } from "./utils/dataProcessing";
import { AppData, Page } from "./types";

// ===============================
// Firebase Config
// ===============================
const firebaseConfig = {
  apiKey: "AIzaSyBzIuGIG4jmUe146rexK51UNvA2dn3xnT8",
  authDomain: "fir-f51b8.firebaseapp.com",
  projectId: "fir-f51b8",
  storageBucket: "fir-f51b8.firebasestorage.app",
  messagingSenderId: "904534740293",
  appId: "1:904534740293:web:edb32f42ebd04c4215022c",
  measurementId: "G-11Y1KJXZCM",
};

// 固定使用 demoUser 作為測試帳號
const MOCK_USER_ID = "demoUser";
const MOCK_APP_ID = "finance-dashboard-v1";

// ===============================
// Main App Component
// ===============================
const App: React.FC = () => {
  const [page, setPage] = useState<Page>("dashboard");
  const [data, setData] = useState<AppData | null>(null);
  const [db, setDb] = useState<firebase.firestore.Firestore | null>(null);

  // Initialize Firebase once
  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    const firestoreDb = firebase.firestore();
    setDb(firestoreDb);
  }, []);

  // Load data from Firestore when db is ready
  useEffect(() => {
    if (db) {
      loadDataFromFirestore(db, MOCK_USER_ID, MOCK_APP_ID).then((loadedData) => {
        setData(loadedData);
      });
    }
  }, [db]);

  // Save handler
  const handleSave = (newData: AppData) => {
    setData(newData);
    if (db) {
      saveDataToFirestore(db, MOCK_USER_ID, MOCK_APP_ID, newData);
    }
  };

  return (
    <div className="app-container flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar currentPage={page} setPage={setPage} />
        <main className="flex-1 overflow-auto p-4 bg-gray-50">
          {data && (
            <Dashboard
              page={page}
              data={data}
              onSave={handleSave}
            />
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
