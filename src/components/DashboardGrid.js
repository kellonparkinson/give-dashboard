import React, { useState, useLayoutEffect } from "react";
import Spinner from "../Spinner";
import Error from "../Error";

const DashboardGrid = ({ onReload, loading, error, data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [desc, setDesc] = useState(true);

  const sortName = () => {
    if (desc) {
      setDesc(false);
      const nameAsc = [...data].sort((a, b) => a.name.localeCompare(b.name));
      setSortedData(nameAsc);
    } else {
      setDesc(true);
      const nameDesc = [...data].sort((a, b) => b.name.localeCompare(a.name));
      setSortedData(nameDesc);
    }
  };

  const sortEmail = () => {
    if (desc) {
      setDesc(false);
      const emailAsc = [...data].sort((a, b) => a.email.localeCompare(b.name));
      setSortedData(emailAsc);
    } else {
      setDesc(true);
      const emailDesc = [...data].sort((a, b) => b.email.localeCompare(a.name));
      setSortedData(emailDesc);
    }
  };

  const sortDate = () => {
    if (desc) {
      setDesc(false);
      const datesAsc = [...data].sort((a, b) =>
        a.timestamp.toString().localeCompare(b.timestamp.toString())
      );
      setSortedData(datesAsc);
    } else {
      setDesc(true);
      const datesDesc = [...data].sort((a, b) =>
        b.timestamp.toString().localeCompare(a.timestamp.toString())
      );
      setSortedData(datesDesc);
    }
  };

  const sortTransaction = () => {
    if (desc) {
      setDesc(false);
      const transAsc = [...data].sort((a, b) =>
        a.transactionId.toString().localeCompare(b.transactionId.toString())
      );
      setSortedData(transAsc);
    } else {
      setDesc(true);
      const transDesc = [...data].sort((a, b) =>
        b.transactionId.toString().localeCompare(a.transactionId.toString())
      );
      setSortedData(transDesc);
    }
  };

  const sortAmount = () => {
    if (desc) {
      setDesc(false);
      const amtAsc = [...data].sort((a, b) =>
        a.cryptoAmount.toString().localeCompare(b.cryptoAmount.toString())
      );
      setSortedData(amtAsc);
    } else {
      setDesc(true);
      const amtDesc = [...data].sort((a, b) =>
        b.cryptoAmount.toString().localeCompare(a.cryptoAmount.toString())
      );
      setSortedData(amtDesc);
    }
  };

  return (
    <>
      <div className="w-screen h-[65%] justify-center items-center fixed bottom-10 overflow-hidden overflow-y-scroll overscroll-contain">
        <table className="mx-8 rounded-xl w-19/20 h-full">
          <thead className="bg-gray-200 sticky top-0">
            <tr className="flex flex-row gap-4 py-3 px-3 border-b-2 text-left items-center">
              <th className="w-8">
                <input type="checkbox" />
              </th>
              <th className="w-1/6 text-gray-400">
                <button className="text-sm" onClick={sortName}>
                  NAME
                </button>
              </th>
              <th className="w-1/5 text-gray-400">
                <button className="text-sm" onClick={sortEmail}>
                  EMAIL
                </button>
              </th>
              <th className="w-32 text-gray-400">
                <button className="text-sm" onClick={sortDate}>
                  DATE
                </button>
              </th>
              <th className="w-40 text-gray-400">
                <button className="text-sm" onClick={sortTransaction}>
                  TRANSACTION ID
                </button>
              </th>
              <th className="w-1/5 text-gray-400">
                <button className="text-sm" onClick={sortAmount}>
                  AMOUNT (CRYPTO/USD)
                </button>
              </th>
              <th className="w-28 text-gray-400 text-sm">TAX RECEIPT</th>
            </tr>
          </thead>
          <tbody className="px-3 py-1">
            {!loading &&
              sortedData.map((item) => {
                return (
                  <tr
                    className="flex flex-row gap-4 py-6 px-3 border-b-2 border-gray-100 bg-white items-center"
                    key={item.transactionId}
                  >
                    <td className="w-8">
                      <input type="checkbox" />
                    </td>
                    <td className="w-1/6">
                      <h1>{item.name}</h1>
                    </td>
                    <td className="w-1/5 truncate">
                      <h1>{item.email}</h1>
                    </td>
                    <td className="w-32">
                      <h1>{new Date(item.timestamp).toLocaleDateString()}</h1>
                    </td>
                    <td className="w-40">
                      <h1 className="font-medium underline">
                        {item.transactionId.slice(0, 3)}...
                        {item.transactionId.slice(-5, -1)}
                      </h1>
                    </td>
                    <td className="w-1/5">
                      <h1>
                        {item.cryptoAmount.slice(0, 12)} ETH ($
                        {item.usdAmountAtTransaction})
                      </h1>
                    </td>
                    <td className="w-28">
                      <a href={item.receipt} className="text-red-600">
                        Preview
                      </a>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>

        {loading && (
          <div className="flex flex-row justify-center px-8 py-8 h-64 w-full z-10">
            <Spinner />
          </div>
        )}
      </div>
      <div className="fixed bottom-0 mb-2 w-screen flex justify-center">
        <button
          className="bg-gray-200 py-1 px-8 text-xs rounded-md shadow-md"
          onClick={() => onReload()}
        >
          Reload Transactions
        </button>
      </div>
    </>
  );
};

export default DashboardGrid;
