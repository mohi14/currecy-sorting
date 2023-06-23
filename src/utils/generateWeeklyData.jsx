export default function generateWeeklyData(currencyData) {
  const currentDate = new Date();
  const sevenDaysBeforeDate = new Date(
    currentDate.getTime() - 7 * 24 * 60 * 60 * 1000
  );

  const filteredData = currencyData.filter((dayData) => {
    const date = new Date(dayData[0].date);

    return date >= sevenDaysBeforeDate && date <= currentDate;
  });
  return filteredData;
}
