export default function generateWeeklyAverage(filteredData) {
  const weeklyAverageData = [];

  for (const dayData of filteredData) {
    const currencyAverages = {};

    for (const currencyData of dayData) {
      const currencyName = currencyData.Currency_name;
      const Rate = parseFloat(currencyData.open);

      if (!currencyAverages[currencyName]) {
        currencyAverages[currencyName] = {
          total: Rate,
          count: 1,
        };
      } else {
        currencyAverages[currencyName].total += Rate;
        currencyAverages[currencyName].count++;
      }
    }

    const weekAverage = {};

    for (const currencyName in currencyAverages) {
      const average =
        currencyAverages[currencyName].total /
        currencyAverages[currencyName].count;
      weekAverage[currencyName] = average.toFixed(2);
    }

    weeklyAverageData.push(weekAverage);
  }
  return weeklyAverageData;
}
