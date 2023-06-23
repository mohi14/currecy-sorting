export default function getNotification(data) {
  const shorDateConverter = (date) => {
    const shortDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    return shortDate;
  };

  const currentDate = shorDateConverter(new Date());

  let notfiy = "";

  const filterData = data?.find((dayData) => {
    const date = shorDateConverter(new Date(dayData[0].date));
    const currency = dayData[0].open;
    if (currentDate == date) {
      if (parseInt(currency) < 107) {
        console.log(currency);
        return (notfiy = { message: "lower", currency });
      } else if (parseInt(currency) > 112) {
        console.log(currency);
        return (notfiy = { message: "higger", currency });
      } else {
        return (notfiy = { message: "", currency });
      }
    }
  });

  return notfiy;
}
