export default function generateCurrencyData(currencyNames) {
  const startDate = new Date("2023-04-01");
  const endDate = new Date("2024-04-01");
  const data = [];

  while (startDate < endDate) {
    const dateString = startDate.toISOString().split("T")[0];
    const dayData = [];

    for (const currencyName of currencyNames) {
      const rate = Math.random() * 150;
      const currencyData = {
        Currency_name: currencyName,
        close: rate.toFixed(2),
        date: dateString,
        high: (rate + Math.random()).toFixed(2),
        low: (rate - Math.random()).toFixed(2),
        open: (rate - Math.random()).toFixed(2),
      };

      dayData.push(currencyData);
    }

    data.push(dayData);
    startDate.setDate(startDate.getDate() + 1);
  }

  return data;
}
