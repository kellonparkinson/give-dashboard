/**
 *  --- INSTRUCTIONS ---
 *
 * Hello!
 *
 * The objective here is to create a simple
 * dashboard using asynchronous data sources.
 * You have been provided with a rough view
 * for the data you will receive. An image of
 * the UI you will implement is found in the
 * root folder of this project - Mockup.png.
 *
 * All table headers (except tax receipt) should
 * sort the data in the table by that column when
 * clicked, toggling between ascending and descending
 * order.
 *
 * Feel free to add any libraries you may need to this
 * sandbox.
 *
 * The CSS files for TailwindCSS is already
 * included. Please use the conventions described
 * by the TailwindCSS docs to implement this UI.
 * The docs are found here: https://tailwindcss.com/
 *
 * NOTE: the "preview" button can just link to the
 * "receipt" attribute value.
 *
 */

import React, { useState } from "react";
// import DataCard from "./DataCard";

import "./styles.css";
import useTestData from "./useTestData";

import DashboardStats from "./components/DashboardStats";
import DashboardGrid from "./components/DashboardGrid";
// import ReceiptModal from "./components/ReceiptModal";

export default function App() {
  const {
    statisticsData,
    statisticsLoading,
    statisticsError,
    reloadStatistics,
    transactionData,
    transactionsLoading,
    transactionError,
    reloadTransactions
  } = useTestData();

  // const [showModal, setShowModal] = useState(false)

  return (
    <div id="application" className="bg-gray-100 h-screen w-screen">
      <DashboardStats
        onReload={reloadStatistics}
        loading={statisticsLoading}
        error={statisticsError}
        data={statisticsData}
      />
      <DashboardGrid
        onReload={reloadTransactions}
        loading={transactionsLoading}
        error={transactionError}
        data={transactionData}
        // setShowModal={setShowModal}
      />
      {/* {showModal && <ReceiptModal />} */}
    </div>
  );
}
