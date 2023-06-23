export default function generateMonthlyData(currencyData) {
  const currentDate = new Date();
  const thirtyDaysBeforeDate = new Date(
    currentDate.getTime() - 30 * 24 * 60 * 60 * 1000
  );

  const filteredData = currencyData.filter((dayData) => {
    const date = new Date(dayData[0].date);

    return date >= thirtyDaysBeforeDate && date <= currentDate;
  });
  return filteredData;
}
