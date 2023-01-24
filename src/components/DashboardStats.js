import React from "react";
import { FaHandHoldingHeart } from "react-icons/fa";
import { HiCurrencyDollar, HiUserGroup } from "react-icons/hi";
import Spinner from "../Spinner";

const DashboardStats = ({ onReload, loading, error, data }) => {
  const dollarFormatter = new Intl.NumberFormat("eng-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  });

  return (
    <>
      {loading && (
        <div className="flex flex-row justify-center items-center px-8 py-8 h-64 w-full">
          <Spinner />
        </div>
      )}

      {!loading && (
        <div className="flex flex-row w-full h-[25%] justify-evenly">
          <div className="h-full w-[30%] bg-white my-8 p-8 rounded-lg drop-shadow-lg flex flex-col justify-center items-start">
            <div className="w-52 flex gap-4 items-start">
              <h1 className="text-xl">Total Amount</h1>
              <HiCurrencyDollar size={28} color="#ee3a3a" />
              {/* recognize that hex color code? */}
            </div>
            <h1 className="text-4xl font-bold mt-4">
              {dollarFormatter.format(data.totalAmount)}
            </h1>
          </div>
          <div className="h-full w-[30%] bg-white my-8 p-8 rounded-lg drop-shadow-lg flex flex-col justify-center items-start">
            <div className="w-52 flex gap-4 items-start">
              <h1 className="text-xl">Number of Donors</h1>
              <HiUserGroup size={28} color="#ee3a3a" />
            </div>
            <h1 className="text-4xl font-bold mt-4">{data.numberOfDonors}</h1>
          </div>
          <div className="h-full w-[30%] bg-white my-8 p-8 rounded-lg drop-shadow-lg flex flex-col justify-center items-start">
            <div className="w-52 flex gap-4 items-start">
              <h1 className="text-xl">Total Donations</h1>
              <FaHandHoldingHeart size={28} color="#ee3a3a" />
            </div>
            <h1 className="text-4xl font-bold mt-4">{data.totalDonations}</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardStats;
