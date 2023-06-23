import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import generateCurrencyData from "./utils/generateData";

import generateWeeklyData from "./utils/generateWeeklyData";
import generateWeeklyAverage from "./utils/generateWeeklyAverage";
import getNotification from "./utils/getNotification";
import generateMonthlyData from "./utils/generateMonthlyData";
import generateMonthlyAverage from "./utils/generateMonthlyAverage";
import SortedDataTable from "./components/SortedDataTable";
import AverageDataTable from "./components/AverageDataTable";

function App() {
  const [allData, setAllData] = useState(null);

  const [sortedData, setSortedData] = useState(null);
  const [averageData, setAverageData] = useState(null);

  const [notification, setNotification] = useState("");

  // sorting data based by week
  const weeklyData = () => {
    const data = generateWeeklyData(allData);
    setSortedData(data);
    setAverageData(null);
  };

  const weeklyAverage = () => {
    const data = generateWeeklyData(allData);
    const average = generateWeeklyAverage(data);
    setAverageData(average);
    setSortedData(null);
  };

  // sorting data based by month
  const monthlyData = () => {
    const data = generateMonthlyData(allData);
    setSortedData(data);
    setAverageData(null);
  };
  const monthlyAverage = () => {
    const data = generateMonthlyData(allData);
    const average = generateMonthlyAverage(data);
    setAverageData(average);
    setSortedData(null);
  };

  // notification

  useEffect(() => {
    const currencyNames = ["USD", "EUR", "GBP", "JPY"];
    const currencyData = generateCurrencyData(currencyNames);
    setAllData(currencyData);
    const notification = getNotification(currencyData);

    setNotification(notification);

    console.log(notification, "fkjfk");

    // notification for call every 2000

    const intervalId = setInterval(() => {
      const updatedCurrencyData = generateCurrencyData(currencyNames);
      setAllData(updatedCurrencyData);
      const updatedNotification = getNotification(updatedCurrencyData);
      setNotification(updatedNotification);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <div>
        <h1>Notification</h1>

        <h3>
          {" "}
          Increaseed:{" "}
          {notification?.message === "higger" && notification?.currency}
        </h3>
        <h3>
          {" "}
          Decreaseed:{" "}
          {notification?.message === "lower" && notification?.currency}
        </h3>
        <div>
          <button onClick={weeklyData}>7 Days Data</button>
          <button onClick={weeklyAverage}>Avarage weekly</button>
          <button onClick={monthlyData}>30 Days Data</button>
          <button onClick={monthlyAverage}>Average monthly</button>
        </div>

        {/* average */}
      </div>
      {sortedData && <SortedDataTable sortedData={sortedData} />}
      {averageData && <AverageDataTable averageData={averageData} />}
    </>
  );
}

export default App;
